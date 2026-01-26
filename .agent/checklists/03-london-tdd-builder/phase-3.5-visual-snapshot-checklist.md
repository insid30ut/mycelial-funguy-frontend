# 03-London-TDD-Builder - Phase 3.5: Visual Snapshot Checklist

This checklist ensures Phase 3.5 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 3.5 CHECKLIST

Before proceeding, ensure you have access to:
1. Feature Type (UI vs Logic)

VALIDATION APPROACH:
1. **Relevance**: Don't force snapshots on backend logic.
2. **Verification**: Don't just generate; inspect.

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Relevance Check
- [ ] **Question**: Is this UI/DOM?
- [ ] **Result**:
    - [ ] YES -> Proceed
    - [ ] NO -> Skip to Phase 4

## 2. CORE PHASE EXECUTION

### 2.1 Add Snapshot (Step 2-3)
- [ ] `toMatchSnapshot()` added
- [ ] Baseline generated

### 2.2 Reflection (Step 4)
- [ ] Snapshot file inspected manually
- [ ] **Confirmation**: Does the HTML/JSON look right?

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 4 (Testing)**: Visual regression defense.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Verified Snapshot (if UI)

### 4.2 Quality Standards
- [ ] Snapshot is not "null" or empty

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
- **PROCEED TO PHASE 4**: Snapshot verified.
- **RETRY PHASE**: Comparison failed.
