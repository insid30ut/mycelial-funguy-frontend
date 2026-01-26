# Phase 4: Triangulation (The Judgment)

> **Parent Workflow**: 04-BMO-Triangulation
> **Phase Number**: 4
> **Objective**: The Ultimate Truth Check.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 3: Chaos Engineering

---

## Instructions

### Step 1: Inputs
1. **Intent**: Read `docs/specs/[feature]/functional_spec.md`.
2. **Reality**: Read `docs/bmo/[feature]/system_model_as_built.md`.
3. **Oracle**: Read the Test Results.

### Step 2: Cognitive Triangulation
**SCoT**: "Comparing Intent vs Reality vs Oracle..."
- Compare Intent vs Reality.
- **Discrepancy Check**: "Spec says X, Code does Y." -> **FAIL**.
- **Gap Check**: "Code handle Z, Spec never mentioned Z." -> **WARN** (Scope Creep).
- **Drift Check**: "Code has drifted significantly from previous version." -> **WARN**.

### Step 3: Reporting
**Action**: Write `docs/bmo/[feature]/triangulation_report.md`.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/04-bmo-triangulation/phase-4-triangulation-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Triangulation Report created.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 4.5: The Librarian
