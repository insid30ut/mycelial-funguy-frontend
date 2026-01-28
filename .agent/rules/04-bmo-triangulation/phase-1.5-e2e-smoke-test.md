# Phase 1.5: E2E Smoke Test (The Reality Check)

> **Parent Workflow**: 04-BMO-Triangulation
> **Phase Number**: 1.5
> **Objective**: Verify the feature is reachable and renders in the running application.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: Behavior Verification

---

## Instructions

### Step 1: Start Application
**Action**: Start the local development server (e.g., `npm run dev`).
**Action**: Wait for "Ready" signal.

### Step 2: Reachability Check
**Action**: Attempt to access the feature's route or trigger.
- **Manual**: "Browse to localhost:3000/[route]".
- **Automated**: Use `curl` or a test script if available.

### Step 3: Crash Check
**Action**: Check the console logs.
- **Pass**: No "Error", "Exception", or "Crash".
- **Fail**: White screen of death or 500 status.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/04-bmo-triangulation/phase-1.5-e2e-smoke-test-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Dev server started.
- ✅ Feature accessed successfully (HTTP 200 / Render).
- ✅ No console errors.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 2: Reverse System Modeling
