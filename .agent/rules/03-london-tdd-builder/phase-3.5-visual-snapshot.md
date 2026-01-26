# Phase 3.5: Visual Snapshot Verification (The Eye)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 3.5
> **Objective**: Catch Visual Regressions.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 3: The TOTE Loop

---

## Instructions

### Step 1: Relevance Check
**Action**: Ask "Does this feature involve UI/DOM elements?"
- **If No**: Skip to Exit.
- **If Yes**: Proceed to Step 2.

### Step 2: Add Snapshot
**Action**: Add a Snapshot Assertion to the test (`toMatchSnapshot()`).

### Step 3: Update Snapshot
**Action**: Run `npm test -- -u` to generate the baseline.

### Step 4: Reflect
**Action**: Inspect the snapshot file. Does it look correct?

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-3.5-visual-snapshot-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Snapshot assertion added (if UI).
- ✅ Snapshot baseline generated (if UI).
- ✅ Snapshot verified correct (if UI).
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 4: Recursive TDD with Context Shedding
