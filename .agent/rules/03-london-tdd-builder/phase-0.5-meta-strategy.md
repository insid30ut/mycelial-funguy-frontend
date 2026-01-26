# Phase 0.5: Meta-Cognitive Strategy Selection

> **Parent Workflow**: 03 London Tdd Builder
> **Phase Number**: 0.5
> **Objective**: Adapt workflow behavior based on past performance.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 0: Ancestral Audit

---

## Instructions

### Step 1: Read Performance Metrics
**Action**: Read `memory/PERFORMANCE_LOG.md`.

### Step 2: Pattern Analysis
**Action**: Calculate the following from the last 3 entries:
1.  **Avg Loops**: (Sum of loops) / 3
2.  **Avg Mirror Score**: (Sum of scores) / 3

### Step 3: Strategy Selection
**Action**: Select one strategy strategy based on the data:

| Condition | Strategy | Behavior |
|-----------|----------|----------|
| Avg loops > 5 | **VERBOSE** | Extra logging, more checkpoints |
| Mirror Score < 8 | **CAUTIOUS** | Self-critique after every action |
| BMO/Test Failures > 1 | **PARANOID** | Double-verify all assertions |
| All metrics good | **STREAMLINED** | Skip optional checkpoints |
| No Data | **STANDARD** | Default behavior |

### Step 4: Apply Strategy
**Action**: Write selected strategy to `memory/MEMORY_STREAM.md`:
```
META_STRATEGY: [Selected Strategy]
REASON: [Justification]
```

### Step 5: Output
**Action**: Display to user: "🚀 Strategy Selected: **[Strategy]** (based on [Reason])"

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Strategy selected and logged.

---

## Related Phases
**Next Phase**: Phase 1

