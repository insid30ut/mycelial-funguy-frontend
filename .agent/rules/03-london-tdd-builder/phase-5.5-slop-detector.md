# Phase 5.5: The Slop Detector

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 5.5
> **Objective**: Eliminate AI-generated code smell before exit.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 5: The Mirror Test

---

## Instructions

### Step 1: Mandatory Checklist
**Action**: Verify ALL checks pass.

| Check | Pass? | Fix If Fail |
|-------|-------|-------------|
| No generic names (`data`, `item`, `thing`, `result`, `temp`) | [ ] | Rename to semantic names |
| No placeholder comments (`// TODO`, `// implement`, `// code here`) | [ ] | Implement or remove |
| No magic numbers (naked literals in logic) | [ ] | Extract to constants |
| No dead code (commented-out blocks) | [ ] | Delete entirely |
| No empty catch blocks | [ ] | Add proper error handling |
| No duplicated logic (>3 lines repeated) | [ ] | Extract to function |
| No functions >50 lines | [ ] | Split into smaller functions |
| No >3 levels of nesting | [ ] | Flatten or extract |
| All error messages are descriptive | [ ] | Add context to errors |
| All public functions have JSDoc/docstrings | [ ] | Add documentation |
| No `console.log` in production code | [ ] | Remove or use logger |
| No `any` types in TypeScript | [ ] | Add proper types |

### Step 2: Scoring
- **12/12 checks pass**: PROCEED to exit.
- **10-11 pass**: WARNING, proceed with note.
- **<10 pass**: FAIL, loop back to Phase 3 (Refactor).

### Step 3: Log Results
**Action**: Write checklist results to `MEMORY_STREAM.md` for reference.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-5.5-slop-detector-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Slop Detector score >= 10/12.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 6: Atomic Exit
