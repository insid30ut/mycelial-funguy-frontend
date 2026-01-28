# 01-Multi-Arc-Research - Phase 3: Mirror Test Checklist

This checklist ensures Phase 3 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 3 CHECKLIST

Before proceeding, ensure you have access to:
1. `docs/research/[feature]/deep_dive.md`

VALIDATION APPROACH:
1. **Self-Correction**: This is the last line of defense against hallucinations.
2. **Specifics**: Does the research have versions, imports, and warnings?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Artifact Check
- [ ] Deep Dive document exists

## 2. CORE PHASE EXECUTION

### 2.1 The Mirror Test (Step 1)
*Read the Deep Dive and verify:*
- [ ] **Banned Words Check**: No "Fast", "Easy", "Robust" without metrics?
- [ ] **Version Lock**: Are versions e.g. `18.2.0` present? (No `latest`)
- [ ] **Gotcha Check**: Is there at least one "Warning/Gotcha" section?
- [ ] **Import Check**: Are imports explicit? (e.g. `import { X } from 'y'`)
- [ ] **Dependency Check**: Are dependencies listed?

### 2.2 Scoring (Step 2)
- [ ] Score assigned (X/10)
- [ ] **If Score < 9**: Loop back to Phase 1.
- [ ] **If Score > 9**: Proceed.

### 2.3 Wisdom (Step 3)
- [ ] Success logged to `memory/failure_log.md`

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 4 (One-Shot)**: Does this research enable a one-shot implementation?

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Score > 9
- [ ] Deep Dive verified

### 4.2 Quality Standards
- [ ] No "ToDo" or placeholder text in Deep Dive

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
- **PROCEED TO PHASE 3.5**: Research verified.
- **RETRY PHASE**: Deep Dive is sloppy.
