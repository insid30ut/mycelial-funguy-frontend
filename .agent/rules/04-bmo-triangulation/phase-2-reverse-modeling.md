# Phase 2: Reverse System Modeling & Drift Detection (The Mirror)

> **Parent Workflow**: 04-BMO-Triangulation
> **Phase Number**: 2
> **Objective**: Extract the "As-Built" Reality and Check for Mutative Drift.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: Behavior Verification

---

## Instructions

### Step 1: Reverse Engineering
**SCoT**: "Building mental model from source code..."
- Read the actual source code in `src/`.
- **Ignore** the Spec files.
- Generate a mental model of what the code *actually* does.

### Step 2: Drift History
- Check for existing `docs/bmo/[feature]/system_model_as_built.md`.
- **If Exists**: Rename it to `system_model_as_built.bak.md`.

### Step 3: Write Model
**Action**: Write the **New** `docs/bmo/[feature]/system_model_as_built.md`.

### Step 4: Drift Analysis
- **If Backup Exists**: Compare **New** vs **Bak**.
- **Check**: "Did the architecture change significantly (>10%)?"
- **Action**: If significant drift, create `docs/bmo/[feature]/drift_report.md`.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/04-bmo-triangulation/phase-2-reverse-modeling-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ As-Built Model created.
- ✅ Drift Analysis performed.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 3: Chaos Engineering
