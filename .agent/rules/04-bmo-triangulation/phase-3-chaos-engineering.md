# Phase 3: Chaos Engineering (The Stress Test)

> **Parent Workflow**: 04-BMO-Triangulation
> **Phase Number**: 3
> **Objective**: Break the system.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 2: Reverse System Modeling & Drift Detection

---

## Instructions

### Step 1: Resilience Injection
**SCoT**: "How can I break this?"
- Identify 3 "Chaos Scenarios" (e.g., "Network Timeout", "Malicious Input", "Dependency Failure").
- **Constraint**: Do not actually delete production data. Use Mock Chaos.

### Step 2: Action
**Action**: Create a temporary test file `src/__tests__/[feature].chaos.test.ts`.

### Step 3: Execute
**Action**: Run this chaos test.

### Step 4: Reflect
- **Fail**: Trigger `05-refinement`.
- **Pass**: Proceed.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/04-bmo-triangulation/phase-3-chaos-engineering-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Chaos tests created and run.
- ✅ System stability verified.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 4: Triangulation
