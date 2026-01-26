# Phase 3: The Devil's Advocate Interceptor (The Critique)

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 3
> **Objective**: Destroy the Plan before we build it.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 2: User Story Generation

---

## Instructions

### Step 1: Persona Shift
**Action**: Switch to **"The Critic"** (Cynical, Security-Obsessed).

### Step 2: Pre-Mortem Attack
**SCoT**: "How could this fail?"
- Review the User Stories.
- **Attack**: "This story assumes the network is fast. What if it hangs?"
- **Attack**: "This input assumes valid JSON. What if it's a binary blob?"
- **Attack**: "This is over-engineered. Can we simplify?"

### Step 3: Report & Refine
**Action**: Write `memory/openspec/changes/[feature]/critique_report.md`.
**Action**: Update `user_stories.md` in the `changes` folder to address valid attacks.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-3-devils-advocate-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Critique report written.
- ✅ Stories refined based on critique.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 4: Adversarial SCoT
