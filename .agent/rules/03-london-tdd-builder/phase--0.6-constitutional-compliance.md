# Phase -0.6: Constitutional Compliance Check

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: -0.6
> **Objective**: Ensure alignment with supreme laws before execution.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ None (First Phase)

**MUST have access to**:
- `memory/CONSTITUTION.md`

---

## Instructions

### Step 1: Read Constitution
**Action**: Load the Constitution file.
**Exact Prompt**:
```
> 📖 READ AND EXECUTE: `memory/CONSTITUTION.md`
```

### Step 2: Self-Audit
**Action**: Ask yourself:
1. "Does my intended next action violate any Article?"
2. "Am I currently in a loop state (Breaker 2.1)?"

### Step 3: Circuit Breaker Logic
**Action**: Evaluate safety.
- **If Violation**:
    - STOP immediately.
    - Log to `failure_log.md`: "COMBAT BREAKER TRIPPED: [Article]"
    - Emergency Exit to Notify User.
- **If Safe**: Proceed to Phase -0.5 (or next available phase).

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Constitution has been read.
- ✅ Self-Audit confirmed no violations.

---

## Related Phases
**Next Phase**: Phase 0: Ancestral Audit & Job Hunt
