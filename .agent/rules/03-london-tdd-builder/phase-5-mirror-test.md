# Phase 5: The Mirror Test (Self-Correction)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 5
> **Objective**: Final Code Quality Audit.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 4: Recursive TDD with Context Shedding

---

## Instructions

### Step 1: The Mirror Test
**Action**: Read the final `src/[feature].ts`.
**Critique**:
- "Did I leave any `console.log`?"
- "Are all imports valid (checked against `package.json`)?"
- "Is the coverage 100% for the Spec?"

### Step 2: Scoring Decision
- **Score < 9/10**: "I failed [Metric]. I must Refactor." (Loop back to Phase 3).
- **Score > 9/10**: Proceed to Exit.

### Step 3: Wisdom Recording
**Action**: Append to `memory/failure_log.md`: "Build [Feature] successful. Key learning: [Insight]."

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-5-mirror-test-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Code quality score > 9/10.
- ✅ Wisdom recorded.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 5.5: The Slop Detector
