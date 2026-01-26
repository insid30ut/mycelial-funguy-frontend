# Phase 12: Handoff (Atomic Exit)

> **Parent Workflow**: 00-Solicitation
> **Phase Number**: 12
> **Objective**: Git push & transition to Research via Session Exit Protocol.

---

## Instructions

### Step 1: Generate Handoff Files (Session Exit Protocol)
**Reference**: `memory/SESSION_HANDOFF.md` and `memory/handoff/[source]_to_[target].json`

1.  **Human-Readable Handoff**:
    - Update `memory/SESSION_HANDOFF.md` with summary, artifacts, decisions, and next actions.

2.  **Machine-Readable Handoff (JSON)**:
    - Create `memory/handoff/00_solicitation_to_01_research.json` conforming to `memory/schemas/handoff_schema.json`.
    - Fields: `source="00-solicitation"`, `target="01-multi-arc-research"`, `status="SUCCESS"`, `next_action="Initiate Phase 0 of Research"`.

### Step 2: Validate Handoff
1.  **Schema Check**: Ensure JSON contains all required fields.
2.  **Validation**: Verify `decisions` include confidence scores (if any).
3.  **Gate**:
    - **PASS**: Proceed.
    - **FAIL**: Correct JSON and retry.

### Step 3: Finalize Episodic Memory
- Update `memory/EPISODIC_MEMORY.md` with final outcome.
- Log session metrics to `memory/PERFORMANCE_LOG.md`.

### Step 4: Update Dashboard
1.  Read `memory/HEALTH_DASHBOARD.md`.
2.  Update "Features Completed" or "Session Status".
3.  Write back to `memory/HEALTH_DASHBOARD.md`.

### Step 5: Git Operations
**Action**:
1.  **Stage & Commit**:
    ```powershell
    git add docs/project_brief.md memory/PROJECT_STATE.md
    git commit -m "feat: complete solicitation phase for [Project Name]"
    ```
2.  **Autonomy Check**:
    -   **IF** `Config.Autonomy == "Fully Auto"` **AND** `Config.GitPush == true`:
        -   Run: `git push`
    -   **ELSE**:
        -   Ask User: "Remote configured. Ready to push?"

### Step 6: The Guidance Message (Crucial)
**Action**: You MUST output a final message to the user that guides them to the next step.
**Template**:
"🎉 **Solicitation Complete!**
We have successfully defined the vision and project brief.
**Next Step**: Time to Research.
👉 Please run the command: `/step2-multi-arc-research` to begin the Deep Research phase."

### Step 7: Phase Checklist
**Action**: Open `.agent/checklists/00-solicitation/phase-12-handoff-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Handoff files (JSON + Markdown) created and verified.
- ✅ Dashboard updated.
- ✅ Work committed.
- ✅ User explicitly guided to `/step2-multi-arc-research`.
- ✅ Checklist verified.
