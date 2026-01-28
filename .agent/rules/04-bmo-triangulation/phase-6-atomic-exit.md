# Phase 6: Atomic Exit

> **Parent Workflow**: 04-BMO-Triangulation
> **Phase Number**: 6
> **Objective**: Verify Integrity & Handoff via Session Exit Protocol.

---

## Instructions

### Step 1: Generate Handoff Files (Session Exit Protocol)
**Reference**: `memory/SESSION_HANDOFF.md` and `memory/handoff/[source]_to_[target].json`

1.  **Human-Readable Handoff**:
    - Update `memory/SESSION_HANDOFF.md`:
        - **Status**: Verified by BMO.
        - **Next**: (Exit or Refinement).
        - **Artifacts**: System Model, Chaos Reports.
        - **Decisions**: Verified vs. Rejected.

2.  **Machine-Readable Handoff (JSON)**:
    - Create `memory/handoff/04_bmo_to_[next].json`.
    - Fields: `source="04-bmo-triangulation"`, `target="[00...05]"`, `status="SUCCESS|FAILURE"`.

### Step 2: Validate Handoff
1.  **Schema Check**: Ensure JSON matches schema.
2.  **Validation**: Verify BMO triangulation score > 80%.
3.  **Gate**:
    - **PASS**: Proceed.
    - **FAIL**: Retry generation.

### Step 3: Finalize Episodic Memory
- Update `memory/EPISODIC_MEMORY.md` with verification outcome.
- Log metrics to `memory/PERFORMANCE_LOG.md`.

### Step 4: Update Dashboard
1.  Update `memory/HEALTH_DASHBOARD.md`.
2.  Update "BMO Pass Rate".

### Step 4.5: Update Project State
**Action**: Open `memory/PROJECT_STATE.md`.
- **IF BMO PASSED**: Mark feature as `[x]` (Completed).
- **IF BMO FAILED**: Mark feature as `(F)` (Failed).

### Step 4.7: Sync Master Architecture (The Source of Truth)
**Action**: If BMO PASSED:
1.  Read `docs/bmo/[feature]/system_model_as_built.md`.
2.  Update `docs/architecture/system_architecture_manifest.md` with the new reality.
3.  Log: "Architecture synchronized with reality."


### Step 5: Git Operations
**Action**:
1.  **Stage & Commit**:
    ```powershell
    git add docs/bmo/ memory/PROJECT_STATE.md
    git commit -m "verify: [feature] bmo triangulation complete"
    ```
2.  **Autonomy Check**:
    -   **IF** `Config.Autonomy == "Fully Auto"` **AND** `Config.GitPush == true`:
        -   Run: `git push`
    -   **ELSE**:
        -   Ask User: "Remote configured. Ready to push?"

### Step 6: The Guidance Message (Crucial)
**Action**: You MUST output a final message to the user that guides them to the next step.

**Scenario A: BMO PASSED**
"🎉 **Verification Successful!**
BMO has certified this feature with a [Score]% verification score.
**Next Step**: Start the next feature (Research).

⚠️ **Context Refresh Required**:
To ensure optimal performance, please **Start a New Chat** before running the next command.

👉 **New Chat Command**: `/step2-multi-arc-research`"

**Scenario B: BMO FAILED**
"🚫 **Verification Failed.**
BMO detected critical issues or regressions.
**Next Step**: System Refinement (Fixing).

⚠️ **Context Refresh Required**:
To ensure optimal performance, please **Start a New Chat** before running the next command.

👉 **New Chat Command**: `/step6-refinement`"

### Step 7: Phase Checklist
**Action**: Open `.agent/checklists/04-bmo-triangulation/phase-6-atomic-exit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
- ✅ Handoff files (JSON + Markdown) created/verified.
- ✅ Verification artifacts committed.
- ✅ User explicitly guided to `/step2-multi-arc-research` OR `/step6-refinement`.
- ✅ Checklist verified.
