# Phase 0.6: Package Audit (Slopsquatting Defense)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 0.6
> **Objective**: Prevent "Slopsquatting" by verifying all package names before installation.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 0.5: Meta-Cognitive Strategy Selection

---

## Instructions

### Step 1: Scan for Install Commands
**Action**: Scan `memory/run_command_log.json` (or intended history) for any `npm install` or `pip install` commands planned.

### Step 2: Verify Package Names
**Action**: For EACH package to be installed:
1.  **Exact Match Check**: specifically check for common typos (e.g., `react` vs `raect`).
2.  **Reputation Check**: Is this a known, standard library?
3.  **Risk Assessment**:
    - **Low Risk**: Standard (react, lodash, express).
    - **High Risk**: Unknown, new, or typo-prone names.

### Step 3: The Block
**Action**:
- **If High Risk**: STOP. Ask user for confirmation via `notify_user` OR verify against `memory/KNOWLEDGE_BASE.md`.
- **If Low Risk**: Allow proceeding.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-0.6-package-audit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ All intended packages verified safe.
- ✅ No typo-squatting candidates detected.
- ✅ Checklist verified.
