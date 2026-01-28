# 02-SPARC-Specification - Phase 4.5: Security Threat Model Checklist

This checklist ensures Phase 4.5 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 4.5 CHECKLIST

Before proceeding, ensure you have access to:
1. Feature Description (User Stories)

VALIDATION APPROACH:
1. **Applicability**: Did we correctly identify if this is risky?
2. **Analysis**: Did we use STRIDE?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] Edge cases defined

## 2. CORE PHASE EXECUTION

### 2.1 Applicability Check (Step 1)
- [ ] **Question**: Does feature touch Auth, APIs, or PII?
- [ ] **Result**:
    - [ ] YES -> Proceed to Step 2
    - [ ] NO -> Log "Skipped" and Exit

### 2.2 STRIDE Analysis (Step 2-3)
*(Only if Applicable)*
- [ ] **S**poofing checked?
- [ ] **T**ampering checked?
- [ ] **R**epudiation checked?
- [ ] **I**nformation Disclosure checked?
- [ ] **D**enial of Service checked?
- [ ] **E**levation of Privilege checked?
- [ ] `docs/specs/[feature]/threat_model.md` created
- [ ] Mitigation strategies listed

### 2.3 Integration (Step 4)
- [ ] New threats added to `edge_cases.md`

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 9 (Security)**: Proactive threat modeling.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Threat Model (or Logged Skip)

### 4.2 Quality Standards
- [ ] Mitigations are concrete (e.g. "Use Rate Limiting") not vague ("Make it safe")

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
- **PROCEED TO PHASE 4.7**: Model secure.
- **RETRY PHASE**: Ignored risks.
