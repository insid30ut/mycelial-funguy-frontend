# Phase 4: The Mirror Test (Self-Healing)

> **Parent Workflow**: 05-Refinement
> **Phase Number**: 4
> **Objective**: Validation before Return.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 3: The Re-Verification

---

## Instructions

### Step 1: The Mirror Test
**Action**: Review your Diff.
**Critique**: "Is this a Band-Aid? Did I add a Regression Test?"
- **Score < 9/10**: "Bad fix. Revert and Try again." (Loop back to Phase 1).
- **Score > 9/10**: Proceed.

### Step 2: Anti-Pattern Check
**Action**: Append to `memory/KNOWLEDGE_BASE.md`: `[Date] anti-pattern: DO NOT do X; it causes Y.`

### Step 3: Phase Checklist
**Action**: Open `.agent/checklists/05-refinement/phase-4-mirror-test-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Fix valid (Score > 9/10).
- ✅ Knowledge Base updated.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 5: The Sentinel Loop
