# Phase 10.5: The Definition of Done Contract

> **Parent Workflow**: 00-Solicitation
> **Phase Number**: 10.5
> **Objective**: Lock measurable success criteria before research begins.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 10: Final Contract

---

## Instructions

### Step 1: Prompt for Metrics
**Action**: Ask the user to define measurable success.
**Exact Prompt**:
```
"How will we KNOW this feature is complete? Please define 3-5 measurable criteria.
Examples:
- Test coverage > 90%
- Page loads in < 100ms
- User can complete flow in < 3 clicks"
```

### Step 2: Ambiguity Audit (Mini-Loop)
**Action**: Check user response.
- If vague (e.g., "fast", "secure"): Ask "Please define [term] numerically or with a specific test condition."
- If measurable: Proceed.

### Step 3: Lock Contract
**Action**: Append the criteria to `docs/project_brief.md` (or `functional_spec.md` if existing) under `## Acceptance Criteria (Definition of Done)`.

**Format**:
```markdown
## Acceptance Criteria (Definition of Done)
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
```

### Step 4: Handoff Note
**Action**: Log to `memory/SESSION_HANDOFF.md`: "DoD Contract established. BMO Verification will enforce these metrics."

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/00-solicitation/phase-10.5-definition-of-done-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ 3-5 measurable criteria obtained.
- ✅ Criteria written to `docs/project_brief.md`.
- ✅ Criteria verified as unambiguous.
- ✅ Checklist verified.

