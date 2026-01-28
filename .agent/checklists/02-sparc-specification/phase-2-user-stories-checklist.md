# 02-SPARC-Specification - Phase 2: User Stories Checklist

This checklist ensures Phase 2 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 2 CHECKLIST

Before proceeding, ensure you have access to:
1. `memory/openspec/changes/[feature]/specs/`
2. `deep_dive.md` (Source)

VALIDATION APPROACH:
1. **OpenSpec Compliance**: Is the format exact? (`SHALL`, `WHEN`, `THEN`).
2. **Decomposition**: Are stories small enough?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] Feature selected from Phase 1

## 2. CORE PHASE EXECUTION

### 2.1 Decomposition (Step 1)
- [ ] Feature broken into multiple stories
- [ ] **Format Check (OpenSpec)**:
    - [ ] `### Requirement: [Name]`
    - [ ] `The system SHALL [behavior]`
    - [ ] `#### Scenario:`
    - [ ] `- **WHEN** ...`
    - [ ] `- **THEN** ...`

### 2.2 Writing (Step 2)
- [ ] `memory/openspec/changes/[feature]/specs/user_stories.md` created
- [ ] All stories written to file

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 5 (SCoT)**: Did we derive stories logically from the Research?
- [ ] **Law 7 (Ambiguity)**: BDD format (Given/When/Then) forces clarity.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] `user_stories.md` exists and is non-empty

### 4.2 Quality Standards
- [ ] Every requirement has at least one Scenario
- [ ] "SHALL" keywords used

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
- **PROCEED TO PHASE 3**: Stories valid.
- **RETRY PHASE**: Format violation (not OpenSpec).
