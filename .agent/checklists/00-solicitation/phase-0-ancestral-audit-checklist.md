# 00-Solicitation - Phase 0: Ancestral Audit & System Onboarding Checklist

This checklist ensures Phase 0 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 0 CHECKLIST

Before proceeding with this phase, ensure you have access to:

1. `memory/failure_log.md`
2. `memory/PROJECT_STATE.md`
3. Git Environment access

IMPORTANT: If any prerequisites are missing, halt and report the gap.

VALIDATION APPROACH:

1. Ancestral Wisdom - Ensure past failures are actively converted into new constraints.
2. Configuration Clarity - Ensure Autonomy and Git settings are explicitly stored.
3. State Integrity - Project state must be current before proceeding.

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end (if Fully Auto mode)]]

## 1. PREREQUISITES & CONTEXT

[[LLM: Ensure the environment is ready and history is accessible.]]

### 1.1 Constitutional Compliance

- [ ] Phase -0.6 (Constitutional Compliance) verified as complete
- [ ] Global Laws reviewed and active in context

### 1.2 Memory Access

- [ ] `memory/failure_log.md` located (or initialized if missing)
- [ ] `memory/PROJECT_STATE.md` located and readable
- [ ] Git environment verified (git installed, remote checked)

## 2. CORE PHASE EXECUTION

### 2.1 Wisdom Retrieval (Step 1)

- [ ] `memory/failure_log.md` contents analyzed
- [ ] Specific mistake(s) from previous agent identified
- [ ] 3 specific, constrained rules formulated to avoid recurrence
- [ ] Rules are actionable and not generic "be careful" statements
- [ ] Self-correction performed if no log existed (log initialized)

### 2.2 The Handshake & Git Setup (Step 2)

- [ ] "Welcome" message delivered to user
- [ ] `git remote -v` executed
- [ ] Remote repository status confirmed (Exists or None)
- [ ] **If Remote Exists**: User asked to confirm push strategy
- [ ] **If No Remote**: User consulted on repo initialization
- [ ] Git configuration decision made (Push to existing / Init new / No git)

### 2.3 Autonomy Selector (Step 3)

- [ ] User presented with 3 Autonomy Levels:
    - [ ] [1] Fully Auto
    - [ ] [2] Semi-Guided (Standard)
    - [ ] [3] Manual Control
- [ ] User selection captured explicitly
- [ ] Implications of selection confirmed (e.g., "I will auto-push" vs "I will ask")

### 2.4 Update State (Step 4)

- [ ] `memory/PROJECT_STATE.md` opened for update
- [ ] Config object constructed/updated with:
    - [ ] `Autonomy` value
    - [ ] `GitPush` boolean
    - [ ] `Repo` string/details
- [ ] File written and verified

## 3. QUALITY GATES

### 3.1 Constraint Quality

- [ ] Generated constraints directly address the identified past failures
- [ ] Constraints do not conflict with Global Laws

### 3.2 Configuration Integrity

- [ ] Autonomy level is one of the 3 defined valid values
- [ ] Git strategy (Push/No Push) matches the autonomy level and user preference

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs

- [ ] `memory/PROJECT_STATE.md` updated with new Config
- [ ] Config object includes `Autonomy` level
- [ ] Config object includes `GitPush` boolean
- [ ] Config object includes `Repo` string

### 4.2 Quality Standards

- [ ] Project State is valid JSON/YAML/Markdown format as required
- [ ] User has explicitly confirmed the configuration (unless Fully Auto defaults used)

## PHASE VALIDATION SUMMARY

[[LLM: FINAL PHASE REPORT GENERATION

Create a phase completion report that includes:

1. Phase Status: COMPLETE / INCOMPLETE / FAILED
2. Validation Results Table (section-by-section pass/fail)
3. Critical Issues Found
4. Next Phase Readiness: READY / BLOCKED / CONDITIONAL
5. Recommendations]]

### Validation Results

| Section | Status | Issues |
|---------|--------|--------|
| 1. Prerequisites | _TBD_ | |
| 2. Core Execution | _TBD_ | |
| 3. Quality Gates | _TBD_ | |
| 4. Exit Criteria | _TBD_ | |

### Phase Decision

- **PROCEED TO NEXT PHASE**: All criteria met, outputs validated
- **RETRY PHASE**: Issues found, specific items need correction
- **ESCALATE**: Critical failure, human intervention required
