# Phase 4: Recursive TDD with Context Shedding

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 4
> **Objective**: Complete all specs without crashing memory.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 3.5: Visual Snapshot Verification

---

## Instructions

### Step 1: Spec Audit
**Action**: Ask "Are there more User Stories or Edge Cases in the Spec?"

### Step 2: Context Shedding
- **Count**: "Have I implemented 5 tests in a row?"
- **Action**: If Yes, **Summarize** current progress to `MEMORY_STREAM.md`, clear older context logs to free up tokens.

### Step 3: Loop Decision
- **If Yes (More specs)**: Pick next case, Loop back to **Phase 1** (Write Red Test).
- **If No (Done)**: Proceed to Integration (Phase 5).

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-4-recursive-tdd-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ All User Stories implemented.
- ✅ All Edge Cases covered.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 5: The Mirror Test (Self-Correction)
