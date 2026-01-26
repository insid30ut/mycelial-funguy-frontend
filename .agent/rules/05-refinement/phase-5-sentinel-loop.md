# Phase 5: The Sentinel Loop

> **Parent Workflow**: 05-Refinement
> **Phase Number**: 5
> **Objective**: Return to BMO.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 4: The Mirror Test

---

## Instructions

### Step 1: Report
**Action**: Output "Fix Applied and Verified locally."

### Step 2: Trigger
**Action**: Auto-start `04-bmo-triangulation` again to perform the full certification.
- *Loop*: `04` -> Fail -> `05` -> Fix -> `04` -> Pass.

### Step 3: Phase Checklist
**Action**: Open `.agent/checklists/05-refinement/phase-5-sentinel-loop-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Triggered 04-BMO.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 6: Exit
