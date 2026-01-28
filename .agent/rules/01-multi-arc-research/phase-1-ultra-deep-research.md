# Phase 1: Ultra-Deep Research Protocol (SCoT Mode)

> **Parent Workflow**: 01-Multi-Arc-Research
> **Phase Number**: 1
> **Objective**: Exhaustive investigation of all implementation requirements using Multi-Pass Search and SCoT.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 0.5: Meta-Cognitive Strategy Selection

---

## Instructions

### 1.1: Multi-Pass Search Strategy
**Action**: Execute searches in this EXACT order, documenting findings after each:

**Pass 1: Official Truth (Authoritative Sources)**
*   Query: `"[Technology] documentation [2025 OR 2026]" site:docs.* OR site:*.dev`
*   Target: Official documentation, release notes, migration guides
*   Capture: Version numbers, breaking changes, deprecation warnings

**Pass 2: Community Experience (Sentiment Analysis)**
*   Query: `"[Technology] problems" OR "issues" OR "not working" site:reddit.com [2025]`
*   Query: `"[Technology]" label:bug is:open site:github.com`
*   Target: Real-world pain points, unresolved issues
*   Capture: Common complaints (>3 mentions = "Known Pain")

**Pass 3: Comparative Analysis (Alternative Evaluation)**
*   Query: `"[Technology] vs [Alternative]" 2025 comparison`
*   Query: `"why I switched from [Technology]" OR "migrating from [Technology]"`
*   Target: Competitive landscape, migration patterns
*   Capture: Reasons to choose/avoid each option

**Pass 4: Implementation Patterns (Code Examples)**
*   Query: `"[Technology] [specific feature] example" site:github.com`
*   Query: `"[Technology] tutorial" [2025] best practices`
*   Target: Working code patterns, copy-paste ready snippets
*   Capture: Exact syntax, import statements, version-specific APIs

**Pass 5: Edge Cases & Gotchas (Negative Filter)**
*   Query: `"[Technology] gotcha" OR "common mistake" OR "pitfall"`
*   Query: `"[Technology]" "don't do" OR "avoid" OR "antipattern"`
*   Target: Things that will break the build
*   Capture: Anti-patterns with explanations

### 1.2: Source Credibility Scoring
For each source found, assign a weight:
| Source Type | Weight | Reason |
|-------------|--------|--------|
| Official Docs | 1.0 | Canonical truth |
| GitHub Issues/PRs | 0.9 | Real problems, real solutions |
| Stack Overflow (accepted) | 0.8 | Community-vetted |
| Reddit (high upvotes) | 0.7 | Wisdom of crowds |
| Blog Posts (recent) | 0.6 | May be outdated |
| AI-generated content | 0.3 | High hallucination risk |

### 1.3: Structured Chain of Thought (SCoT) Output
**Action**: For each technology/library researched, produce the following block in `docs/research/[feature]/deep_dive.md`:

```markdown
## SCoT Research: [Technology Name]

### Step 1: What IS this? (Definition)
[1-2 sentence official description]

### Step 2: Why would I use it? (Value Proposition)
- [Benefit 1]
- [Benefit 2]

### Step 3: What version? (Version Lock)
- Current Stable: [X.Y.Z]
- Recommended for Production: [X.Y.Z]
- Breaking Changes from Previous: [List]

### Step 4: How do I install it? (Setup)
```bash
[Exact install command]
```

### Step 5: How do I use it? (Core Patterns)
```typescript
[Minimal working example]
```

### Step 6: What can go wrong? (Gotchas)
⚠️ [Gotcha 1]: [Description and fix]
⚠️ [Gotcha 2]: [Description and fix]

### Step 7: What are the alternatives? (Escape Hatch)
- [Alternative 1]: Better if [condition]
- [Alternative 2]: Better if [condition]

### Step 8: Final Recommendation
[USE / CAUTION / AVOID] because [reason]
```

### 1.4: Token Budget Management
**Constraint**: Final `deep_dive.md` MUST be < 40,000 tokens.
**Technique**: If raw findings exceed budget:
1.  Prioritize by relevance score
2.  Summarize verbose sections
3.  Move detailed code examples to appendix files (`docs/research/[feature]/appendix/`)

### 1.5: Phase Checklist
**Action**: Open `.agent/checklists/01-multi-arc-research/phase-1-ultra-deep-research-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ All 5 search passes completed for key technologies.
- ✅ SCoT Research blocks generated for each tech.
- ✅ `deep_dive.md` created/updated within token limits.
- ✅ Checklist verified.
