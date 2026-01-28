# 00-Solicitation - Phase 12: Handoff (Atomic Exit) Checklist

This checklist ensures Phase 12 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 12 CHECKLIST (MANDATORY LOOP)

**CRITICAL INSTRUCTION**: This is an EXIT PHASE.
You MUST:
1. executing the checks below.
2. If ANY check fails, you MUST fix the underlying issue immediately.
3. You CANNOT complete this phase until ALL checks are [x].
4. **LOOP UNTIL GREEN**: Do not ask the user for permission to retry. Just fix and retry.

Before proceeding, ensure you have access to:
1. `memory/SESSION_HANDOFF.md`
2. `memory/schemas/handoff_schema.json`

VALIDATION APPROACH:
1. **Schema Compliance**: JSON must be perfect.
2. **Clean Break**: User must know exactly what to do next.

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Readiness
- [ ] Reflexion (Phase 11.8) complete

## 2. CORE PHASE EXECUTION

### 2.1 Handoff Generation (Step 1)
- [ ] `memory/SESSION_HANDOFF.md` updated with human-readable summary
- [ ] `memory/handoff/00_solicitation_to_01_research.json` created
    - [ ] `source: "00-solicitation"`
    - [ ] `target: "01-multi-arc-research"`
    - [ ] `status: "SUCCESS"`

### 2.2 Validation (Step 2)
- [ ] JSON Schema check passed (Valid JSON)
- [ ] Decision confidence scores included

### 2.3 Episodic & Dashboard (Steps 3-4)
- [ ] Episodic Memory confirmed updated
- [ ] Health Dashboard "Sessions Completed" incremented

### 2.4 Git Operations (Step 5)
- [ ] Changes staged (`git add`)
- [ ] Changes committed (`git commit`)
- [ ] **Autonomy Check**:
    - [ ] If Fully Auto + Push Enabled: `git push` executed
    - [ ] Else: User asked for push

### 2.5 User Notification (Step 6)
- [ ] Compact summary displayed
- [ ] Next command `/01-research` suggested

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 12 (Autonomy)**: Did we respect the user's Push preference?
- [ ] **Law 16 (Handoff)**: Protocol strictly followed?

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] Valid Handoff JSON
- [ ] Commit hash (or proof of commit)
- [ ] User notified

### 4.2 Quality Standards
- [ ] JSON is parsable by the next agent (No syntax errors)

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
- **EXIT WORKFLOW**: All Green.
- **LOOP AND FIX**: Any Red. (Self-Correction Mandatory)
