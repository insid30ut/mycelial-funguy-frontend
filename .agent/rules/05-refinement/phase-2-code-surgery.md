# Phase 2: The Fix (Code Surgery)

> **Parent Workflow**: 05-Refinement
> **Phase Number**: 2
> **Objective**: Apply the Patch.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: Failure Analysis & Circuit Breaker

---

## Instructions

### Step 1: Edit
**Action**: Edit `src/[feature].ts`.

### Step 2: Constraint
Apply *only* the necessary fix. Do not rewrite the whole file unless necessary.

### Step 3: Spec Sync
**Action**: If the failure was a "Spec Drift" (Branch C), update `docs/specs/[feature]/` to match the working code.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/05-refinement/phase-2-code-surgery-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Code edited.
- ✅ Specs updated (if applicable).
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 3: The Re-Verification
