# Phase 2.5: Code Review (The Sr. Engineer)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 2.5
> **Objective**: Inline code review of implementation before refactoring loop.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 2: Implementation (Green Test)

---

## Instructions

### Step 1: The Scan
**Action**: Read the code files created/modified in Phase 2.

### Step 2: The Clean Code Audit (Quick Pass)
**Action**: Check against "No AI Slop" Manifesto (Global Law 7):
*   ❌ No generic names (`data`, `item`, `res`)
*   ❌ No `any` types
*   ❌ No commented out code
*   ❌ No magic numbers
*   ✅ JSDoc/Docstrings present?

### Step 3: Logic Verification
**Action**: Ask: "Does this code actually satisfy the test intent, or did I just game the test?"
**Action**: Ask: "Is there a simpler way to do this?"

### Step 4: The Decision
*   **Pass**: Code is clean and correct. Proceed to Phase 3.
*   **Fail**: Refactor IMMEDIATELY. Do not proceed until fixed.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-2.5-code-review-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Code passes Clean Code Audit.
- ✅ Logic verified against test intent.
- ✅ Checklist verified.
