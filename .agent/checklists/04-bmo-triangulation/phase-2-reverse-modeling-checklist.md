# 04-BMO-Triangulation - Phase 2: Reverse Modeling Checklist

This checklist ensures Phase 2 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 2 CHECKLIST

Before proceeding, ensure you have access to:
1. Source Code

VALIDATION APPROACH:
1. **Honesty**: Does the model reflect *code*, not *specs*?
2. **Drift**: Did we check for unauthorized changes?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] Behavior Verified

## 2. CORE PHASE EXECUTION

### 2.1 Reverse Engineering (Step 1)
- [ ] Mental Model built from `src/` ONLY (ignoring specs)

### 2.2 History (Step 2)
- [ ] Previous model backed up (if exists)

### 2.3 Write Model (Step 3)
- [ ] `docs/bmo/[feature]/system_model_as_built.md` created
- [ ] **Content**: Accurate reflection of current code structure

### 2.4 Drift Analysis (Step 4)
- [ ] **Comparison**: New vs Old (or Spec)
- [ ] **Assessment**: Significant Drift? (>10%)
- [ ] **Action**:
    - [ ] `drift_report.md` created (if drifted)
    - [ ] Logged "No Drift" (if clean)

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 2 (Truth)**: The map must match the territory.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] As-Built Model
- [ ] Drift Report (optional)

### 4.2 Quality Standards
- [ ] Model is not a copy-paste of the Functional Spec

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
- **PROCEED TO PHASE 3**: Model captured.
