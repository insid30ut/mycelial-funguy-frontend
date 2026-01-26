# 02-SPARC-Specification - Phase 4: Adversarial SCoT Checklist

This checklist ensures Phase 4 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 4 CHECKLIST

Before proceeding, ensure you have access to:
1. `user_stories.md`

VALIDATION APPROACH:
1. **Coverage**: Did we cover all 3 branches (Malice, Env, Resource)?
2. **Quantity**: Are there at least 10 scenarios?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] Stories defined

## 2. CORE PHASE EXECUTION

### 2.1 Graph of Thought Analysis (Step 1)
- [ ] **Branch 1 (Malicious User)** explores:
    - [ ] SQL Injection/XSS?
    - [ ] Auth Bypass?
- [ ] **Branch 2 (Environment Failure)** explores:
    - [ ] Network timeout?
    - [ ] API down?
- [ ] **Branch 3 (Resource Constraints)** explores:
    - [ ] Disk full?
    - [ ] Memory spike?

### 2.2 Writing Edge Cases (Step 2)
- [ ] `memory/openspec/changes/[feature]/specs/edge_cases.md` created
- [ ] **Count Check**: >= 10 unique scenarios listed?

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 11 (GoT)**: Structured thinking applied to failure modes.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] `edge_cases.md` with 10+ items

### 4.2 Quality Standards
- [ ] Scenarios are specific, not generic "Something goes wrong"

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
- **PROCEED TO PHASE 4.5**: Edge cases defined.
- **RETRY PHASE**: < 10 cases found.
