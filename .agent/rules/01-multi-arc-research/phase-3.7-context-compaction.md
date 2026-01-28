# Phase 3.7: Context Compaction

> **Parent Workflow**: 01-Multi-Arc-Research
> **Phase Number**: 3.7
> **Objective**: Compress the session's learnings into a high-density summary for the Memory Stream.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 3: Mirror Test

---

## Instructions

### Step 1: Synthesize The "Nugget"
**Action**: Look at `docs/research/[feature]/deep_dive.md`.
**Prompt**: "Summarize the KEY technical decision and its rationale in < 50 words."

### Step 2: Update Memory Stream
**Action**: Append to `memory/MEMORY_STREAM.md`:
```markdown
[DATE] [RESEARCH] [Feature]: [The Nugget]
```

### Step 3: Clear Short-Term Memory
**Action**: Mark all intermediate search logs in `memory/run_command_log.json` as processed (mental clear).

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/01-multi-arc-research/phase-3.7-context-compaction-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Nugget distilled.
- ✅ Memory Stream updated.
- ✅ Checklist verified.
