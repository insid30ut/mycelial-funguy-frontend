# Phase 1: Failure Analysis & Circuit Breaker

> **Parent Workflow**: 05-Refinement
> **Phase Number**: 1
> **Objective**: Understand the Breakage and Prevent Infinite Loops.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 0: Ancestral Audit & Pattern Recognition

---

## Instructions

### Step 1: Check Context (Circuit Breaker)
**Action**: Read `memory/MEMORY_STREAM.md`.
- **Check**: Look for `refinement_attempt_count`.
- **If Count > 3**: **ABORT**. "I have tried to fix this 3 times and failed. I am requesting Human Intervention." -> **EXIT**.
- **If Count <= 3**: Increment `refinement_attempt_count`.

### Step 2: Investigation
**Action**: Read `docs/bmo/[feature]/triangulation_report.md` and `docs/bmo/[feature]/system_model_as_built.md`.

### Step 3: Root Cause SCoT (5 Whys)
**SCoT**: "Investigating root cause..."
- Investigate 3 Branches:
    - **Branch A (Code Error)**: Bug/Typo?
    - **Branch B (Test Error)**: Flaky/Wrong Mock?
    - **Branch C (Spec Drift)**: Outdated Spec?
- **Selection**: Pick the most probable branch.

### Step 4: Plan
**Action**: Create a "Fix Plan" in `memory/MEMORY_STREAM.md`.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/05-refinement/phase-1-failure-analysis-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Circuit Breaker passed.
- ✅ Root cause identified.
- ✅ Fix Plan created.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 2: The Fix (Code Surgery)
