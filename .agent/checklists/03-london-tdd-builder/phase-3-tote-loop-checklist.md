# 03-London-TDD-Builder - Phase 3: TOTE Loop Checklist

This checklist ensures Phase 3 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 3 CHECKLIST

Before proceeding, ensure you have access to:
1. Implemented Code
2. Test Suite

VALIDATION APPROACH:
1. **Recursion**: Did we actually loop?
2. **Quality**: Is the Green code actually *Good* code?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Context Check
- [ ] Code is Clean (Phase 2.5 passed)

## 2. CORE PHASE EXECUTION

### 2.1 Verify Green (Step 1)
- [ ] `npm test` passed
- [ ] **Action**:
    - [ ] GREEN -> Proceed
    - [ ] RED -> Fix Bug (Loop)

### 2.2 TOTE Check (Step 2)
- [ ] **Refactoring Triggers Checked**:
    - [ ] Magic Numbers?
    - [ ] Nesting > 3?
    - [ ] Comments explaining *what* instead of *why*?

### 2.3 Refactor (Step 3)
- [ ] **Decision**:
    - [ ] DIRTY -> Refactor -> Retest
    - [ ] CLEAN -> Proceed

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 6 (Clean Code)**: Refactoring is mandatory, not optional.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Clean, Green Code

### 4.2 Quality Standards
- [ ] No regression during refactoring

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
- **PROCEED TO PHASE 3.5**: Loop complete.
- **LOOP BACK**: Tests broke during refactor.
