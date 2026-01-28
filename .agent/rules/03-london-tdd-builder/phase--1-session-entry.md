# Phase -1: Session Entry Protocol (MANDATORY - CANNOT BE SKIPPED)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: -1
> **Objective**: Establish perfect situational awareness and apply lessons learned.

---

## Prerequisites
**MUST be completed before this phase**:
- [x] None (First Phase)

**MUST have access to**:
- `memory/PROJECT_STATE.md`
- `memory/SESSION_HANDOFF.md`
- `memory/EPISODIC_MEMORY.md`
- `memory/failure_log.md`
- `memory/KNOWLEDGE_BASE.md`

---

## Instructions

### Step 1: Full Context Absorption (State Awareness)
**Action**: Read ALL of the following files in order:
1. `memory/PROJECT_STATE.md` (canonical truth)
2. `memory/SESSION_HANDOFF.md` (previous session's exit state)
3. `memory/failure_log.md` (historical lessons)
4. `memory/KNOWLEDGE_BASE.md` (patterns and anti-patterns)
5. `memory/MEMORY_STREAM.md` (volatile context)

### Step 2: State Awareness Report
**Action**: Output the following report to the User (ALWAYS visible, cannot be suppressed):

```
+----------------------------------- STATE AWARENESS REPORT -----------------------------------+
| PROJECT: [Name from PROJECT_STATE]                                                           |
| LAST WORKFLOW: [Workflow that last touched PROJECT_STATE]                                    |
| CURRENT PHASE: [Exact status e.g., "(R) Researching"]                                        |
| FEATURE IN FOCUS: [Which feature is currently being worked]                                  |
|                                                                                              |
| COMPLETED PHASES:                                                                            |
|   [x] 00-Solicitation: [Date] - [Summary]                                                    |
|   [x] 01-Research: [Date] - [Summary]                                                        |
|   [.] 02-Specification: IN PROGRESS                                                          |
|                                                                                              |
| PENDING ACTIONS:                                                                             |
|   1. [Exact next action from last workflow exit]                                             |
|                                                                                              |
| LEARNED CONSTRAINTS (from failure_log):                                                      |
|   (!) [Rule 1 from ancestral lessons]                                                        |
|   (!) [Rule 2 from ancestral lessons]                                                        |
+----------------------------------------------------------------------------------------------+
```

### Step 3: Episodic Memory Injection (Reflexion Pattern)
**Action**:
1.  **Episode Search**: Scan `memory/EPISODIC_MEMORY.md` for matching episodes.
2.  **Pattern Match**:
    - If match found: Load `Lesson Learned` and increment `Reference Count`. Log: "(Ref) Applying lesson from [EPI-XXX]: [Lesson]".
    - If no match: Proceed.
3.  **Session Episode Creation**: Create draft episode for this session.

### Step 4: User Verification Gate
**Action**: Ask: "I have absorbed all context. Does this summary match your understanding?"
- **Fully Auto**: Proceed after 2s pause.
- **Semi/Manual**: Wait for explicit "Yes".

### Step 5: Memory Decay Check
**Action**: Once per session, scan for episodes > 30 days old with Reference Count < 3. Move to `memory/archive/`.

---



### Step 0.5: Health Check
**Action**: Read memory/HEALTH_DASHBOARD.md.
**Action**: Note any CRITICAL issues before proceeding.

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- [x] State Awareness Report displayed.
- [x] Relevant episodic memory loaded.
- [x] User (or timer) approved proceeds.

---

## Related Phases
**Next Phase**: Phase -0.6: Constitutional Compliance Check
