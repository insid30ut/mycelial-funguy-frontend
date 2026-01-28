# 02-SPARC-Specification - Phase 9: Atomic Exit Checklist

This checklist ensures Phase 9 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 9 CHECKLIST (MANDATORY LOOP)

**CRITICAL INSTRUCTION**: This is an EXIT PHASE.
You MUST:
1. executing the checks below.
2. If ANY check fails, you MUST fix the underlying issue immediately.
3. You CANNOT complete this phase until ALL checks are [x].
4. **LOOP UNTIL GREEN**: Do not ask the user for permission to retry. Just fix and retry.

Before proceeding, ensure you have access to:
1. `memory/SESSION_HANDOFF.md`
2. `memory/handoff/02_sparc_to_03_builder.json`

VALIDATION APPROACH:
1. **Schema**: Handoff JSON validity.
2. **Artifacts**: Spec availability.

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Readiness
- [ ] Mirror Test passed

## 2. CORE PHASE EXECUTION

### 2.1 Handoff Generation (Step 1)
- [ ] `memory/SESSION_HANDOFF.md` updated
    - [ ] Status: Spec Complete
    - [ ] Next: 03-london-tdd-builder
- [ ] `memory/handoff/02_sparc_to_03_builder.json` created
    - [ ] `status: "SUCCESS"`

### 2.2 Validation (Step 2)
- [ ] JSON Schema Check Passed
- [ ] TDD Scaffolding Plan (implied by spec presence) ready

### 2.3 Logs & Updates (Step 3-4)
- [ ] `EPISODIC_MEMORY.md` updated
- [ ] `HEALTH_DASHBOARD.md` updated (Features Specified count)

### 2.4 Git Operations (Step 5)
- [ ] Changes staged and committed (`docs/specs`, `PROJECT_STATE`)
- [ ] **Autonomy Check**:
    - [ ] If Auto+Push: `git push` executed
    - [ ] Else: Asked user

### 2.5 Notification (Step 6)
- [ ] Summary displayed
- [ ] Next command `/03-builder` shown

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 16 (Handoff)**: Protocol compliance.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Valid Handoff JSON
- [ ] Committed Specs

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
- **EXIT WORKFLOW**: Ready to Build.
- **LOOP AND FIX**: Check failed.
