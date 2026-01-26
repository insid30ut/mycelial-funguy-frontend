# Phase 5.5: Spec Review (The Critic Agent)

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 5.5
> **Objective**: Adversarial review of the Functional Specification before Handoff.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 5: The Functional Specification

---

## Instructions

### Step 1: The Persona Shift
**Action**: Adopt the persona of a **Senior Principal Engineer** who is skeptical, detail-oriented, and safety-obsessed.
**Constraint**: You are NOT the author of the spec. You are the REVIEWER.

### Step 2: The Review Checklist (Critique)
**Action**: specific critique on `docs/specs/[feature]/functional_spec.md`:

1.  **Ambiguity Check**: Are there words like "fast", "handle", "manage" without metrics?
2.  **Completeness**: key scenarios (Happy Path, Edge Case, Error State) covered?
3.  **Feasibility**: Is this actually buildable with the selected stack?
4.  **Security**: Are authz/authn/input validation explicitly defined?
5.  **Testability**: Can every requirement be turned into a boolean pass/fail test?

### Step 3: The Verdict
**Action**: Output of review to `memory/MEMORY_STREAM.md`:

```markdown
## Spec Review: [Feature Name]
**Verdict**: [APPROVE / REQUEST CHANGES]

### Issues Found (if any)
1. [Issue Description] - [Severity: High/Med/Low]
2. [Issue Description] - [Severity: High/Med/Low]

### Required Actions
- [ ] Fix X
- [ ] Clarify Y
```

### Step 4: Resolution Loop
*   **If APPROVED**: Proceed to Phase 6.
*   **If REQUEST CHANGES**: 
    1.  Fix the spec (edit `functional_spec.md`).
    2.  Self-Correct.
    3.  Log "Review addressed" to memory.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-5.5-spec-review-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Review completed.
- ✅ Critical issues resolved.
- ✅ Verdict is APPROVE.
- ✅ Checklist verified.
