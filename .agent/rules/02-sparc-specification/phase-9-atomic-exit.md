# Phase 9: Atomic Exit

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 9
> **Objective**: Handoff to Builder via Session Exit Protocol.

---

## Instructions

### Step 1: Generate Handoff Files (Session Exit Protocol)
**Reference**: `memory/SESSION_HANDOFF.md` and `memory/handoff/[source]_to_[target].json`

1.  **Human-Readable Handoff**:
    - Update `memory/SESSION_HANDOFF.md`:
        - **Status**: Spec Complete.
        - **Next**: 03-london-tdd-builder.
        - **Artifacts**: `docs/specs/[feature]/functional_spec.md`.
        - **Decisions**: Key spec decisions.

2.  **Machine-Readable Handoff (JSON)**:
    - Create `memory/handoff/02_sparc_to_03_builder.json`.
    - Fields: `source="02-sparc-specification"`, `target="03-london-tdd-builder"`, `status="SUCCESS"`, `feature="[feature name]"`.

### Step 2: Validate Handoff
1.  **Schema Check**: Ensure JSON matches schema.
2.  **Validation**: Verify spec file exists and TDD scaffolding plan is ready.
3.  **Gate**:
    - **PASS**: Proceed.
    - **FAIL**: Retry generation.

### Step 3: Finalize Episodic Memory
- Update `memory/EPISODIC_MEMORY.md` with spec outcome.
- Log metrics to `memory/PERFORMANCE_LOG.md`.

### Step 4: Update Dashboard
1.  Update `memory/HEALTH_DASHBOARD.md`.
2.  Increment "Features Specified" count.

### Step 5: Git Operations
**Action**:
1.  **Stage & Commit**:
    ```powershell
    git add docs/specs/[feature] memory/PROJECT_STATE.md
    git commit -m "spec: [feature] functional spec"
    ```
2.  **Autonomy Check**:
    -   **IF** `Config.Autonomy == "Fully Auto"` **AND** `Config.GitPush == true`:
        -   Run: `git push`
    -   **ELSE**:
        -   Ask User: "Remote configured. Ready to push?"

### Step 6: The Guidance Message (Crucial)
**Action**: You MUST output a final message to the user that guides them to the next step.
**Template**:
"🎉 **Specification Complete!**
The blueprint is ready, including all failure modes and security checks.
**Next Step**: Build the Feature.

⚠️ **Context Refresh Required**:
To ensure optimal performance, please **Start a New Chat** before running the next command.

👉 **New Chat Command**: `/step4-london-tdd-builder`"

### Step 7: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-9-atomic-exit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
- ✅ Handoff files (JSON + Markdown) created/verified.
- ✅ Spec artifacts committed.
- ✅ User explicitly guided to `/step4-london-tdd-builder`.
- ✅ Checklist verified.
