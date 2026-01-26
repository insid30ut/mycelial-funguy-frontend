# Phase 0: Ancestral Audit & Context Injection

> **Parent Workflow**: 01-Multi-Arc-Research
> **Phase Number**: 0
> **Objective**: Learn from the past to protect the future.

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
**Prompt**: "Review the `failure_log.md`. What specifically failed in previous research tasks? (e.g., 'Hallucinated APIs', 'Used old Libs'). List 3 constraints to prevent recurrence."

### Step 2: Mode Check
- **If 'HOTFIX_REQUEST' in `MEMORY_STREAM`**: Enter **Hotfix Mode** (Target specific error -> `05-refinement`).
- **Else**: Proceed to Phase 1 (Normal Mode).

### Step 3: Phase Checklist
**Action**: Open `.agent/checklists/01-multi-arc-research/phase-0-ancestral-audit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Previous failures reviewed.
- ✅ Mode selected (Hotfix vs Normal).
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 1: The "Deep Literature Review"
