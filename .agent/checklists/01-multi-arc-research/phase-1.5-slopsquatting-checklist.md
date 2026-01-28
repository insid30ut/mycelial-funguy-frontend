# 01-Multi-Arc-Research - Phase 1.5: Slopsquatting Detection Checklist

This checklist ensures Phase 1.5 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 1.5 CHECKLIST

Before proceeding, ensure you have access to:
1. `docs/research/[feature]/deep_dive.md` (Source)

VALIDATION APPROACH:
1. **Paranoia**: Did we check EVERY package?
2. **Binary Truth**: Did we get a 200 OK or 404?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Input Ready
- [ ] Deep Dive document available

## 2. CORE PHASE EXECUTION

### 2.1 Extraction (Step 1)
- [ ] List of packages extracted from Deep Dive

### 2.2 Verification (Step 2-3)
- [ ] **Existence Check**: Each package searched on NPM/PyPI/etc.
- [ ] **Legitimacy Check**:
    - [ ] Downloads > 1k?
    - [ ] Age > 6mo?
- [ ] **Slopsquat Detection**:
    - [ ] Any 404s marked as ❌ SLOPSQUAT
    - [ ] Any low-stat packages marked as ⚠️ SUSPICIOUS

### 2.3 Report (Step 4)
- [ ] Verification Table appended to Deep Dive
- [ ] Status columns filled (✅/⚠️/❌)

### 2.4 Decision Logic (Step 5)
- [ ] **If ❌**: Phase 1 RESTARTED (Loop back)
- [ ] **If ⚠️**: User approval requested
- [ ] **If ✅**: Proceed

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 9 (Security)**: Preventing supply chain attacks (typosquatting).

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] "Dependencies (Verified)" section in Deep Dive
- [ ] Zero ❌ Slopsquats remaining

### 4.2 Quality Standards
- [ ] Every package has a status
- [ ] "Suspicious" packages have user sign-off

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
- **PROCEED TO PHASE 2**: Clean dependencies.
- **LOOP BACK**: Malicious/Fake packages found.
