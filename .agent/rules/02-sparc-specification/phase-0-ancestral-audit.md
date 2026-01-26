# Phase 0: The Ancestral Audit (Wisdom Access)

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 0
> **Objective**: Avoid repeating the "Lazy Spec" mistakes of the past.

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
**Action**: Read `memory/failure_log.md` (if exists) and `memory/PROJECT_STATE.md` (history).
**Prompt**: "Review the `failure_log.md`. Did previous features fail due to bad specs (e.g., 'Undefined Types', 'Missed Edge Cases')? List 3 constrained rules to prevent recurrence."

### Step 2: Mode Check
- **If 'HOTFIX_REQUEST' in `MEMORY_STREAM`**: Enter **Hotfix Mode** (Spec ONLY the fix -> `03-london-tdd-builder`).
- **Else**: Proceed to Phase 1 (Normal Mode).

### Step 3: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-0-ancestral-audit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Previous failures reviewed.
- ✅ Mode selected.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 1: Job Hunt & Context Absorption
