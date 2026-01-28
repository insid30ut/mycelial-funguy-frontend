# Phase 0: Ancestral Audit & Job Hunt

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 0
> **Objective**: Learn from limits and Find work.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase -0.6: Constitutional Compliance Check

**MUST have access to**:
- `memory/failure_log.md`
- `memory/PROJECT_STATE.md`

---

## Instructions

### Step 1: Wisdom Retrieval
**Action**: Read `memory/failure_log.md` (if exists) and `memory/PROJECT_STATE.md`.
**Prompt**: "Review the `failure_log.md`. Did previous builds fail due to bad mocks, import errors, or sloppy code? List 3 constrained rules to prevent recurrence."

### Step 2: Job Hunt
**Action**: Scan `memory/PROJECT_STATE.md` for the **First** feature with status `(S)` (Specified) that is NOT `(B)` or `(V)`.
**Action**: Update status to `(B)` (Building).

### Step 3: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-0-ancestral-audit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Wisdom retrieved from failure log.
- ✅ Feature to build identified.
- ✅ Project status updated to `(B)`.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 1: Test Scaffolding & SCoT Planning
