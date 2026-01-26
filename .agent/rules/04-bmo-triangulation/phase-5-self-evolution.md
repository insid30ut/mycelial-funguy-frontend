# Phase 5: The Self-Evolution Loop

> **Parent Workflow**: 04-BMO-Triangulation
> **Phase Number**: 5
> **Objective**: The "O" in BMO (Optimization). Update the system based on findings.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 4: Triangulation
- ✅ Phase 4.8: Post-Task Reflexion

---

## Instructions

### Step 1: Analyze Evolution Triggers
**Action**: Did we find a novel failure mode or a workflow inefficiency?
*   **IF NO**: Log "No evolution required" and EXIT.
*   **IF YES**: Proceed.

### Step 2: Update The Rulebook (Global Laws)
**Action**:
*   If a tool failed repeatedly -> Add a "Double-Tap" law check.
*   If a pattern caused Slop -> Add a "No AI Slop" entry.
*   **Execute**: You MUST follow `.agent/rules/EVOLUTION_PROTOCOL.md` to safely update rules.
    *   **Check Mode**: Read `PROJECT_STATE.EvolutionMode`.
    *   **Temp-Swap**: Do not edit directly. Use temp files.

### Step 3: Update The Strategy (Meta)
**Action**:
*   If the strategy selected in Phase 0.5 failed -> Down-rank it in `memory/KNOWLEDGE_BASE.md`.
*   If a new strategy worked -> Add it to the KB.

### Step 4: The "Anti-Body" Injection
**Action**:
*   If we fixed a bug, create a "Regression Test" phase or check for future workflows?
*   Just ensure the test case is permanently added to the repository.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/04-bmo-triangulation/phase-5-self-evolution-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Triggers analyzed.
- ✅ Global Laws updated (if needed) per Evolution Protocol.
- ✅ Knowledge Base updated (if needed).
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 6: Atomic Exit
