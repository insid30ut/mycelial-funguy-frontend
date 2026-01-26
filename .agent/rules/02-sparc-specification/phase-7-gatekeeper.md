# Phase 7: The Gatekeeper (Implementation Readiness Check)

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 7
> **Objective**: Strict Validation before coding.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 6: Pseudocode Generation & Logic Linting

---

## Instructions

### Step 1: Spec Traceability Matrix
**SCoT**: "Do we have 100% coverage?"
- **Check 1**: Do the `functional_spec.md` signatures actually satisfy every `user_stories.md` requirement?
- **Check 2**: Are the `edge_cases.md` actually handled in the `pseudocode.md`?
- **Check 3**: (If Track C) Does an ADR exist in `docs/architecture/decisions/`?

### Step 2: Decision
- **FAIL**: If gaps exist, loop back to Phase 3.
- **PASS**: Proceed to Step 3.

### Step 3: Promote
**Autonomy Check**:
- **If Fully Auto**: Proceed to Promote immediately.
- **If Semi/Manual**: Show `readiness_report.md` path and ask: "Specs ready. Shall I promote them to 'Current Truth'?"
**Action**: Copy `memory/openspec/changes/[feature]/specs/` to `docs/specs/[feature]/`.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-7-gatekeeper-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Coverage verified.
- ✅ Specs promoted to docs/specs/.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 8: The Mirror Test
