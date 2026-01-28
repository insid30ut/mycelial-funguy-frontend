# 04-BMO-Triangulation - Phase 3: Chaos Engineering Checklist

This checklist ensures Phase 3 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 3 CHECKLIST

Before proceeding, ensure you have access to:
1. `src/`

VALIDATION APPROACH:
1. **Stress**: Did we try to break it?
2. **Safety**: Did we avoid destroying production data?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] System Model understood

## 2. CORE PHASE EXECUTION

### 2.1 Resilience Injection (Step 1)
- [ ] 3 Chaos Scenarios identified (e.g. Timeout, Bad Input, Auth Fail)
- [ ] **Safety Check**: Mock Chaos used (no real destruction)

### 2.2 Action & Execute (Step 2-3)
- [ ] `src/__tests__/[feature].chaos.test.ts` created
- [ ] Chaos tests run

### 2.3 Reflect (Step 4)
- [ ] **Result**:
    - [ ] PASS (System handled chaos gracefully)
    - [ ] FAIL (System crashed) -> Trigger `05-refinement`

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 4 (Testing)**: Resilience is non-negotiable.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Chaos Test File
- [ ] Test Results

### 4.2 Quality Standards
- [ ] System should fail *gracefully* (Error Message), not *catastrophically* (Crash)

## PHASE VALIDATION SUMMARY

[[LLM: FINAL PHASE REPORT GENERATION
1. Phase Status: COMPLETE / INCOMPLETE / FAILED
2. Validation Results
3. Next Phase Readiness: READY / BLOCKED]]

### Validation Results
| Section | Status | Issues |
|---------|--------|--------|
| 1. Prerequisites | _TBD_ | |
| 2. Core Execution | _TBD_ | |
| 3. Quality Gates | _TBD_ | |
| 4. Exit Criteria | _TBD_ | |

### Phase Decision
- **PROCEED TO PHASE 4**: System resilient.
- **HALT**: Fragility detected.
