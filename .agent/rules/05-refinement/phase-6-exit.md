# Phase 6: Exit

> **Parent Workflow**: 05-Refinement
> **Phase Number**: 6
> **Objective**: Validate Fixes & Clean Handoff via Session Exit Protocol.

---

## Instructions

### Step 1: Generate Handoff Files (Session Exit Protocol)
**Reference**: `memory/SESSION_HANDOFF.md` and `memory/handoff/[source]_to_[target].json`

1.  **Human-Readable Handoff**:
    - Update `memory/SESSION_HANDOFF.md`:
        - **Status**: Refinement Complete.
        - **Next**: (Back to Source Workflow).
        - **Artifacts**: Fixed Code/Docs.
        - **Decisions**: Fix strategy applied.

2.  **Machine-Readable Handoff (JSON)**:
    - Create `memory/handoff/05_refinement_to_[source].json`.
    - Fields: `source="05-refinement"`, `target="[source_workflow]"`, `status="FIXED"`.

### Step 2: Validate Handoff
1.  **Schema Check**: Ensure JSON matches schema.
2.  **Validation**: Verify test pass rate > 95%.
3.  **Gate**:
    - **PASS**: Proceed.
    - **FAIL**: Retry generation.

### Step 3: Finalize Episodic Memory
- Update `memory/EPISODIC_MEMORY.md` with fix details.
- Log metrics to `memory/PERFORMANCE_LOG.md`.

### Step 4: Update Dashboard
1.  Update `memory/HEALTH_DASHBOARD.md`.
2.  Update "Refinement Cycles" count.

### Step 5: Git Operations
**Action**:
1.  **Stage & Commit**:
    ```powershell
    git add .
    git commit -m "fix: [issue] resolved via refinement"
    ```
2.  **Autonomy Check**:
    -   **IF** `Config.Autonomy == "Fully Auto"` **AND** `Config.GitPush == true`:
        -   Run: `git push`
    -   **ELSE**:
        -   Ask User: "Remote configured. Ready to push?"

### Step 6: The Guidance Message (Crucial)
**Action**: You MUST output a final message to the user that guides them to the next step.
**Template**:
"🎉 **Fixes Applied!**
The critical issues have been resolved.
**Next Step**: Return to your previous workflow (usually Verification).
👉 Please run the slash command for the workflow you came from (e.g., `/step5-bmo-triangulation` to re-verify)."

### Step 7: Phase Checklist
**Action**: Open `.agent/checklists/05-refinement/phase-6-exit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
- ✅ Handoff files (JSON + Markdown) created/verified.
- ✅ Fixes committed.
- ✅ User explicitly guided to source workflow.
- ✅ Checklist verified.
