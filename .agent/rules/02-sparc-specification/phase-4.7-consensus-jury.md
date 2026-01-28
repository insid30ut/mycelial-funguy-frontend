# Phase 4.7: The Consensus Jury
> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 4.7
> **Objective**: Multi-agent voting for critical gate passage.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 4.5: Security Threat Model

---

## Instructions

### Step 1: Summon Jurors
**Action**: Simulate 3 distinct personas:
1.  🛡️ **Juror A (Security)**: "Are there any unchecked vulnerabilities?"
2.  🚀 **Juror B (Scale)**: "Will this break under load?"
3.  ✨ **Juror C (UX)**: "Is this actually usable?"

### Step 2: Deliberation & Voting
**Action**: Each Juror reviews the artifact (Edge Cases / Threat Model), provides reasoning, and casts a blind vote (`YES`, `NO`, or `CONDITIONAL`).

### Step 3: Consensus Resolution (AVR)
**Action**: Determine outcome:
- **3 YES**: UNANIMOUS PASS → Proceed.
- **2 YES, 1 COND**: MAJORITY PASS → Proceed with conditions logged.
- **Any NO**: VETO → Halt and fix specific objection (Loop back).

### Step 4: Verdict Application
**Action**: Write verdict to `memory/JURY_VERDICT.md`.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-4.7-consensus-jury-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Jury verdict reached and logged.
- ✅ No VETO votes remain.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 5
