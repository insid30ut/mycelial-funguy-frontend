# 04-BMO-Triangulation - Phase 1: Behavior Verification Checklist

This checklist ensures Phase 1 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 1 CHECKLIST

Before proceeding, ensure you have access to:
1. `src/` and `tests/`

VALIDATION APPROACH:
1. **Reality Check**: Do the tests *actually* pass?
2. **Coverage**: Is it high enough (>90%)?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] Code built

## 2. CORE PHASE EXECUTION

### 2.1 Run Tests (Step 1)
- [ ] `npm test` executed
- [ ] **Result**: GREEN (Pass)

### 2.2 Coverage Check (Step 2)
- [ ] Coverage Report generated
- [ ] **Result**: > 90%?

### 2.3 Action (Step 3)
- [ ] **Decision**:
    - [ ] PASS -> Proceed
    - [ ] FAIL -> HALT & Call `05-refinement`

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 4 (Testing)**: High standard of proof.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Passing Test Suite
- [ ] Coverage Report

### 4.2 Quality Standards
- [ ] No skipped tests disguised as passes

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
- **PROCEED TO PHASE 2**: Verified.
- **HALT**: Tests failed.
