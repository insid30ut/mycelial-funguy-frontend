# Phase 4.5: Anti-Pattern Capture (Enhanced)
> **Parent Workflow**: 05-Refinement
> **Phase Number**: 4.5
> **Objective**: Capture detailed anti-pattern for future prevention.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 4: The Mirror Test

---

## Instructions

### Step 1: Root Cause Documentation
**Action**: Write to `memory/KNOWLEDGE_BASE.md` using this template:
```markdown
## Anti-Pattern: [Descriptive Name]
- **ID**: AP-[XXX]
- **Date Discovered**: [Date]
- **Feature Origin**: [Feature where this occurred]
- **Symptom**: [What went wrong / error message]
- **Root Cause**: [Why it happened]
- **Bad Pattern**:
  ```[language]
  [The problematic code pattern]
  ```
- **Good Pattern**:
  ```[language]
  [The correct code pattern]
  ```
- **Prevention Rule**: [How to avoid in future]
- **Detection Query**: [Keywords/patterns to search for this issue]
```

### Step 2: Link to Failure Log
**Action**: Reference this anti-pattern ID in `failure_log.md` entry.

### Step 3: Severity Assignment
**Action**: Assign severity (MEDIUM, HIGH, CRITICAL) based on recurrence.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/05-refinement/phase-4.5-anti-pattern-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Anti-Pattern documented (if applicable).
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 5
