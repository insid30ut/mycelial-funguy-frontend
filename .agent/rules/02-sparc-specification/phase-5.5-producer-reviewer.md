# Phase 5.5: Producer-Reviewer Loop

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 5.5
> **Objective**: Self-verification loop where the agent switches roles to review its own work.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 5: Functional Specification

---

## Instructions

### Step 1: Role Switch
**Action**: You are no longer the "Producer". You are now the "Senior Reviewer".
**Mindset**: Skeptical, pedantic, and detail-oriented.

### Step 2: The Review
**Action**: Review `functional_spec.md` against criteria:
1.  **Ambiguity**: Are there any "TBD"s or vague words ("handled appropriately")?
2.  **completeness**: Are all inputs/outputs typed?
3.  **Consistency**: Do the types match the User Stories?

### Step 3: The Critique
**Action**: Output a critique block:
```
REVIEW REPORT:
- 🔴 CRITICAL: [Issue]
- 🟡 MAJOR: [Issue]
- 🟢 MINOR: [Issue]
```

### Step 4: The Loop
**Action**:
- **If CRITICAL/MAJOR issues found**:
    - Switch back to "Producer".
    - Fix the issues in `functional_spec.md`.
    - Repeat Review (Max 3 loops).
- **If only MINOR issues**:
    - Proceed to Exit.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-5.5-producer-reviewer-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Review performed.
- ✅ No Critical/Major issues remain.
- ✅ Checklist verified.
