# Feature Inventory (Locked)

## Core Pages
- [x] **Landing Page**: Retain existing theme and images. Fix technical issues.
- [x] **Blog Page**: For long-form content.
- [x] **Tips & Teks Page**: Rich Text (Portable Text), Video Embeds, Images, Custom Formatting.
- [ ] **Trusted Partners Page**: Curated list from `partners.json`. 'Verified' badge for affiliates.
- [ ] **Calculators (External)**: Links to external Calculator tools (No local implementation).

## Functional Requirements
- [x] **Navigation**: Menu to switch between Landing, Blog, and Tips.
- [x] **Content Management**: **Sanity CMS** (Already integrated).
- [x] **Responsive Design**: Ensure mobile/desktop compatibility.
- [ ] **Partner Categories**: Must support 'vendor', 'social', 'knowledge'.
- [ ] **[V2] Affiliate Tracking**: Partner links must support query tracking/codes.

## Technical "Kinks" & Refactoring (Priority)
- [x] **Component Abstraction**: Create generic `PostCard` for Blog/Teks to remove duplication.
- [x] **Logic Centralization**: Move data fetching and helper functions (e.g., `getDifficultyColor`) to utility files.
- [x] **Environment Safety**: Add validation for Sanity environment variables.

## Tech Stack
- [x] **Framework**: Next.js 15 (App Router)
- [x] **Styling**: Tailwind CSS v4
- [x] **CMS**: Sanity (Headless)
- [x] **Hosting**: Vercel
