# Phase 3: The TOTE Loop (Recursive Refinement)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 3
> **Objective**: Test-Operate-Test-Exit. Ensure Green & Clean.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 2: Implementation (The Green Stage)

---

## Instructions

### Step 1: Verify Green
**Action**: Run `npm test`.
- **If Red**: **Operate** (Fix Bug) -> Loop back to Test.
- **If Green**: Proceed to Step 2.

### Step 2: TOTE Check (Refactor)
**Action**: Reflect on code quality.
- "Is this code 'AI Slop'? (e.g., Comments like `// code goes here`?)"
- "Are there Magic Numbers? Is Indentation > 3?"
- "Did I use `any`?"

### Step 3: Refactor
- **If Dirty**: **Operate** (Refactor) -> Loop back to Test.
- **If Clean**: Proceed to exit phase.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-3-tote-loop-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Tests pass.
- ✅ Code quality checks pass (No Magic Numbers, No Slop).
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 3.5: Visual Snapshot Verification
