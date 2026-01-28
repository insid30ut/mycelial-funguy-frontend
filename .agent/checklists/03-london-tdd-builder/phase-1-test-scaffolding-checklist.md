# 03-London-TDD-Builder - Phase 1: Test Scaffolding Checklist

This checklist ensures Phase 1 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 1 CHECKLIST

Before proceeding, ensure you have access to:
1. `functional_spec.md`
2. `pseudocode.md`

VALIDATION APPROACH:
1. **Preparation**: Did we plan the mocks?
2. **Invariants**: Did we write a Property Test?
3. **Red**: Did the test fail?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] Specs and Pseudocode available

## 2. CORE PHASE EXECUTION

### 2.1 Dependency SCoT (Step 2)
- [ ] Mock Strategy documented in `MEMORY_STREAM.md`
- [ ] All external dependencies identified for mocking

### 2.2 Scaffolding (Step 3-4)
- [ ] Test file created `src/__tests__/[feature].test.ts`
- [ ] Mocks implemented and typed

### 2.3 Test Writing (Step 5-6)
- [ ] **Property Test (PBT)**: At least one `fc.property` or equivalent written? (Or waiver documented)
- [ ] **Standard Tests**: Scenarios from OpenSpec implemented?

### 2.4 Confirm Red (Step 7)
- [ ] `npm test` executed
- [ ] **Result**: RED (Tests failed as expected)

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 10 (Complexity)**: Testing behavior, not implementation details.
- [ ] **Prohibition**: No "Happy Path Only" testing.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Test file with Mocks
- [ ] Red Test Run

### 4.2 Quality Standards
- [ ] Tests fail for the *right* reason (AssertionError, not SyntaxError)

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
- **PROCEED TO PHASE 1.5**: Red state confirmed.
- **RETRY PHASE**: Tests passed (False Positive) or Syntax Error.
