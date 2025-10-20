### Code Audit Report: Mycelial FunGuy Frontend

---

#### **Executive Summary**

The Mycelial FunGuy frontend is a well-built application with a solid architectural foundation that correctly leverages the core features of the Next.js App Router. Its strengths lie in its adherence to modern framework conventions, including efficient data fetching with Server Components, performance optimizations with `next/image` and `next/font`, and appropriate use of local state.

The project's most critical weakness is **widespread code duplication**. This issue is prevalent across the Calculator components and the content-serving pages (Blog and Teks), significantly impacting maintainability, scalability, and introducing a high risk of inconsistencies. The primary focus of improvement should be a comprehensive refactoring effort to abstract reusable components and logic, adhering to the DRY (Don't Repeat Yourself) principle.

Addressing this architectural debt will transform the codebase from a functional but brittle application into a robust, scalable, and highly maintainable project.

---

#### **Strengths**

*   **Modern Next.js Practices:** Excellent use of React Server Components for data fetching, `generateStaticParams` for static site generation (SSG), and `next/image` and `next/font` for performance optimization.
*   **Scoped State Management:** Correct and effective use of local component state (`useState`) for UI interactions (e.g., the mobile navigation menu), avoiding the premature introduction of a global state manager.
*   **Clean Configuration:** The `tailwind.config.ts` and `next.config.ts` files are well-structured, clean, and follow current best practices.
*   **Good Type Safety Foundation:** The use of TypeScript and the definition of interfaces for Sanity data types in `sanity.ts` provide a good foundation for a type-safe application.

---

#### **Prioritized Action Plan**

| Severity | Issue/Concern | Location (File/Function) | Suggested Refactor/Solution |
| :--- | :--- | :--- | :--- |
| **Critical** | **Massive UI & Logic Duplication:** The `blog` and `teks` pages (both list and slug views) are near-identical copies. | `src/app/blog/**` & `src/app/teks/**` | Create generic, reusable components: `PostCard` for list items and `PostPageLayout` for the article view. Abstract data fetching into a single, parameterized function. |
| **High** | **Component & Logic Duplication:** The three calculator components share identical UI structures and JSX for inputs, selects, and results. | `src/app/calculators/components/**` | Create generic UI components (`CalculatorInput`, `CalculatorSelect`, `ResultsCard`). Move calculation logic into pure functions in a separate utility file (`src/lib/calculators.ts`) to decouple it from the UI and make it unit-testable. |
| **Medium** | **Duplicated Navigation Links:** Navigation links are hardcoded in both the `Navbar` and `Footer` components. | `src/components/layout/Navbar.tsx`, `src/components/Footer.tsx` | Create a single source of truth for navigation links (e.g., `src/config/navigation.ts`) and import the array into both components. |
| **Medium** | **Duplicated Helper Functions:** Color utility functions are defined in both `teks/page.tsx` and `teks/[slug]/page.tsx`. | `src/app/teks/**` | Move `getDifficultyColor` and `getCategoryColor` to a central utility file like `src/lib/utils.ts`. |
| **Low** | **Incorrect Prop Typing:** The `params` prop in slug pages is incorrectly typed as a `Promise`. | `src/app/blog/[slug]/page.tsx`, `src/app/teks/[slug]/page.tsx` | Correct the type definition to `params: { slug: string }`. |
| **Low** | **Unsafe Environment Variables:** Use of non-null assertion (`!`) on `process.env` variables. | `src/lib/sanity.ts` | Add a check to ensure environment variables exist at startup, throwing a clear error if they are missing. |
| **Low** | **Redundant/Unused Config:** Minor cleanup opportunities in configuration files. | `next.config.ts`, `tailwind.config.ts` | Remove the legacy `domains` property from `next.config.ts`. Remove `src/pages` from `tailwind.config.ts` if the pages directory is not in use. |

---

#### **Detailed Analysis**

##### 1. Architecture & Design

The primary architectural issue is the violation of the **DRY (Don't Repeat Yourself)** principle. This manifests in two key areas:

**A. Content Pages (`blog` vs. `teks`)**

The page structure for listing and viewing blog posts is identical to that for "teks". This creates a significant maintenance burden.

*   **Before (Duplicated Card Structure):**

    ```tsx
    // In /blog/page.tsx and /teks/page.tsx
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post._id} href={`/blog/${post.slug.current}`}>
          <article className="bg-mfg-dark/50 ...">
            {/* ... image rendering ... */}
            <div className="p-6">
              {/* ... title, date, description ... */}
            </div>
          </article>
        </Link>
      ))}
    </div>
    ```

*   **After (Abstracted `PostCard` Component):**

    A new component, `src/components/PostCard.tsx`, could be created to handle this logic, accepting a `post` object as a prop.

    ```tsx
    // src/components/PostCard.tsx
    interface PostCardProps {
      post: BlogPost | TekAndTip; // Use a union type
      basePath: 'blog' | 'teks';
    }

    export function PostCard({ post, basePath }: PostCardProps) {
      return (
        <Link href={`/${basePath}/${post.slug.current}`}>
          <article className="bg-mfg-dark/50 ...">
            {/* ... image rendering ... */}
            <div className="p-6">
              {/* Conditionally render badges for 'teks' */}
              {'category' in post && ( /* ... badge logic ... */ )}
              {/* ... title, date, description ... */}
            </div>
          </article>
        </Link>
      );
    }
    ```

**B. Calculator Components**

The three calculator components are monolithic and repeat the same structural JSX.

*   **Before (Duplicated Input Field):**

    ```tsx
    // In AgarCalculator.tsx, LiquidCultureCalculator.tsx, etc.
    <div>
      <label className="block text-mfg-light font-semibold mb-2">
        Water Amount (ml)
      </label>
      <input
        type="number"
        value={waterAmount}
        onChange={(e) => setWaterAmount(e.target.value)}
        className="w-full px-4 py-3 bg-mfg-dark ..."
      />
    </div>
    ```

*   **After (Abstracted `CalculatorInput` Component):**

    Create a generic input component to be reused by all calculators.

    ```tsx
    // src/components/calculators/CalculatorInput.tsx
    interface CalculatorInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
      label: string;
    }

    export function CalculatorInput({ label, ...props }: CalculatorInputProps) {
      return (
        <div>
          <label className="block text-mfg-light font-semibold mb-2">{label}</label>
          <input {...props} className="w-full px-4 py-3 bg-mfg-dark ..." />
        </div>
      );
    }
    ```

##### 2. Maintainability & Testability

Decoupling business logic from the UI is crucial for both maintainability and testability.

*   **Before (Logic inside Component):**

    ```tsx
    // src/app/calculators/components/AgarCalculator.tsx
    export default function AgarCalculator() {
      const [waterAmount, setWaterAmount] = useState<string>('500');
      // ... more state ...

      const calculateAgar = () => {
        const water = parseFloat(waterAmount) || 0;
        // ... complex calculation logic ...
        return { /* results */ };
      };

      const results = calculateAgar();
      // ... JSX ...
    }
    ```

*   **After (Logic in Utility File):**

    This allows for independent unit testing of the calculation logic.

    ```ts
    // src/lib/calculators.ts
    export function calculateAgarRecipe(water: number, recipeType: string) {
      // ... complex calculation logic ...
      return { /* results */ };
    }
    ```

    ```tsx
    // src/app/calculators/components/AgarCalculator.tsx
    import { calculateAgarRecipe } from '@/lib/calculators';
    import { useMemo } from 'react';

    export default function AgarCalculator() {
      const [waterAmount, setWaterAmount] = useState('500');
      // ... more state ...

      const results = useMemo(() => {
        const water = parseFloat(waterAmount) || 0;
        return calculateAgarRecipe(water, recipeType);
      }, [waterAmount, recipeType]);

      // ... JSX ...
    }
    ```

##### 3. Security Vulnerabilities

The codebase is generally secure, with no major vulnerabilities detected. The one minor point is related to environment variable handling.

*   **Before (Unsafe Access):**

    ```ts
    // src/lib/sanity.ts
    export const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
      // ...
    });
    ```

*   **After (Safe Access):**

    This provides a much clearer error message during development if variables are missing.

    ```ts
    // src/lib/sanity.ts
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    if (!projectId || !dataset) {
      throw new Error("Missing Sanity project ID or dataset. Check your .env files.");
    }

    export const client = createClient({
      projectId,
      dataset,
      // ...
    });
    ```

This concludes the comprehensive audit. By implementing the changes outlined in the action plan, you will significantly improve the codebase's architecture, making it more robust, maintainable, and scalable for future development.