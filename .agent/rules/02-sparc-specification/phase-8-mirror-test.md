# Phase 8: The Mirror Test (Self-Correction)

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 8
> **Objective**: Verify the Spec Integrity.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 7: The Gatekeeper

---

## Instructions

### Step 1: The Mirror Test
**Action**: Read the promoted `docs/specs/[feature]/` files.
**Critique**:
- "Did I leave any 'Any' types in the Functional Spec?"
- "Is the 'Edge Case' list just happy paths disguised as failures?"

### Step 2: Scoring Decision
- **Score < 9/10**: "I failed [Metric]. I must RE-SPEC." (Loop back).
- **Score > 9/10**: Proceed to Exit.

### Step 3: Wisdom Recording
**Action**: Append to `memory/failure_log.md`: "Spec [Feature] successful. Key learning: [Insight]."

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-8-mirror-test-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Specs pass quality check (>9/10).
- ✅ Success logged.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 9: Atomic Exit
