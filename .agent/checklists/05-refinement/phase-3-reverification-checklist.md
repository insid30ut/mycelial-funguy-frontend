# 05-Refinement - Phase 3: Re-Verification Checklist

This checklist ensures Phase 3 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 3 CHECKLIST

Before proceeding, ensure you have access to:
1. Patched Code

VALIDATION APPROACH:
1. **Proof**: Do tests pass now?
2. **Regression**: Did we break anything else?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Ready
- [ ] Code saved

## 2. CORE PHASE EXECUTION

### 2.1 Run Tests (Step 1)
- [ ] `npm test` executed
- [ ] **Result**: GREEN

### 2.2 Chaos Check (Step 3)
- [ ] Original Chaos Test (if applicable) re-run
- [ ] **Result**: PASS

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 4 (Testing)**: Green is the only way out.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Passing Test Suite

### 4.2 Quality Standards
- [ ] Fix verified by automated tests

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
- **PROCEED TO PHASE 4**: Verified.
- **LOOP BACK**: Still failing.
