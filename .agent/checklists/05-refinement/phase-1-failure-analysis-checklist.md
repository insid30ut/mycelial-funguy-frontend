# 05-Refinement - Phase 1: Failure Analysis Checklist

This checklist ensures Phase 1 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 1 CHECKLIST

Before proceeding, ensure you have access to:
1. `MEMORY_STREAM.md`

VALIDATION APPROACH:
1. **Safety**: Did we trip the Circuit Breaker?
2. **Logic**: Did we use SCoT to find the root cause?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] Failure Details available

## 2. CORE PHASE EXECUTION

### 2.1 Circuit Breaker (Step 1)
- [ ] `refinement_attempt_count` checked
- [ ] **Action**:
    - [ ] Proceed (Count <= 3)
    - [ ] **ABORT** (Count > 3) -> Call Human

### 2.2 Root Cause SCoT (Step 2-3)
- [ ] **5 Whys Analysis** performed
- [ ] **Branch Selected**:
    - [ ] Code Error
    - [ ] Test Error
    - [ ] Spec Drift

### 2.3 Plan (Step 4)
- [ ] "Fix Plan" written to Memory Stream

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 5 (SCoT)**: Analytical debugging.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Circuit Breaker Status
- [ ] Fix Plan

### 4.2 Quality Standards
- [ ] Analysis goes deeper than "syntax error" (finds *why* it happened)

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
- **PROCEED TO PHASE 2**: Plan ready.
- **EXIT**: Loop detected.
