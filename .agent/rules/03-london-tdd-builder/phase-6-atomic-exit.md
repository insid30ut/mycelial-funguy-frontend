# Phase 6: Atomic Exit

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 6
> **Objective**: Handoff to BMO via Session Exit Protocol.

---

## Instructions

### Step 1: Generate Handoff Files (Session Exit Protocol)
**Reference**: `memory/SESSION_HANDOFF.md` and `memory/handoff/[source]_to_[target].json`

1.  **Human-Readable Handoff**:
    - Update `memory/SESSION_HANDOFF.md`:
        - **Status**: Build Complete.
        - **Next**: 04-bmo-triangulation.
        - **Artifacts**: Implemented Code, Test Suite.
        - **Decisions**: Implementation details.

2.  **Machine-Readable Handoff (JSON)**:
    - Create `memory/handoff/03_builder_to_04_bmo.json`.
    - Fields: `source="03-london-tdd-builder"`, `target="04-bmo-triangulation"`, `status="SUCCESS"`, `feature="[feature name]"`.

### Step 2: Validate Handoff
1.  **Schema Check**: Ensure JSON matches schema.
2.  **Validation**: Verify all tests match `docs/specs/[feature]`.
3.  **Gate**:
    - **PASS**: Proceed.
    - **FAIL**: Retry generation.

### Step 3: Finalize Episodic Memory
- Update `memory/EPISODIC_MEMORY.md` with build outcome.
- Log metrics to `memory/PERFORMANCE_LOG.md`.

### Step 4: Update Dashboard
1.  Update `memory/HEALTH_DASHBOARD.md`.
2.  Increment "Features Built" count.

### Step 5: Git Operations
**Action**:
1.  **Stage & Commit**:
    ```powershell
    git add src/ tests/ memory/PROJECT_STATE.md
    git commit -m "feat: [feature] implementation completed"
    ```
2.  **Autonomy Check**:
    -   **IF** `Config.Autonomy == "Fully Auto"` **AND** `Config.GitPush == true`:
        -   Run: `git push`
    -   **ELSE**:
        -   Ask User: "Remote configured. Ready to push?"

### Step 6: The Guidance Message (Crucial)
**Action**: You MUST output a final message to the user that guides them to the next step.
**Template**:
"🎉 **Build Complete!**
I have implemented the feature and passed all unit tests.
**Next Step**: Verify System Integrity (BMO).
👉 Please run the command: `/step5-bmo-triangulation` to begin the Verification phase."

### Step 7: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-6-atomic-exit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
- ✅ Handoff files (JSON + Markdown) created/verified.
- ✅ Code committed.
- ✅ User explicitly guided to `/step5-bmo-triangulation`.
- ✅ Checklist verified.
