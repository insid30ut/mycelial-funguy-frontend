# Phase 4: Atomic Exit

> **Parent Workflow**: 01-Multi-Arc-Research
> **Phase Number**: 4
> **Objective**: Validate Research & Handoff to Spec.

---

## Instructions

### Step 1: Generate Handoff Files (Session Exit Protocol)
**Reference**: `memory/SESSION_HANDOFF.md` and `memory/handoff/[source]_to_[target].json`

1.  **Human-Readable Handoff**:
    - Update `memory/SESSION_HANDOFF.md`:
        - **Status**: Research Complete.
        - **Next**: 02-sparc-specification.
        - **Artifacts**: `docs/research/[feature]/deep_dive.md`.
        - **Decisions**: Key architectural choices (with confidence scores).
    
2.  **Machine-Readable Handoff (JSON)**:
    - Create `memory/handoff/01_research_to_02_sparc.json`.
    - Fields: `source="01-multi-arc-research"`, `target="02-sparc-specification"`, `status="SUCCESS"`, `feature="[feature name]"`.

### Step 2: Validate Handoff
1.  **Schema Check**: Ensure JSON matches schema.
2.  **Validation**: Verify deep dive document exists and is > 1000 tokens.
3.  **Gate**:
    - **PASS**: Proceed.
    - **FAIL**: Retry generation.

### Step 3: Finalize Episodic Memory
- Update `memory/EPISODIC_MEMORY.md` with research outcome.
- Log metrics to `memory/PERFORMANCE_LOG.md`.

### Step 4: Update Dashboard
1.  Update `memory/HEALTH_DASHBOARD.md`.
2.  Increment "Features Researched" count if tracking.

### Step 5: Git Operations
**Action**:
1.  **Stage & Commit**:
    ```powershell
    git add docs/research/[feature] memory/PROJECT_STATE.md
    git commit -m "docs: research complete for [feature]"
    ```
2.  **Autonomy Check**:
    -   **IF** `Config.Autonomy == "Fully Auto"` **AND** `Config.GitPush == true`:
        -   Run: `git push`
    -   **ELSE**:
        -   Ask User: "Remote configured. Ready to push?"

### Step 6: The Guidance Message (Crucial)
**Action**: You MUST output a final message to the user that guides them to the next step.
**Template**:
"🎉 **Research Complete!**
I have analyzed the domain and identified the best architectural path.
**Next Step**: Create the Specification.
👉 Please run the command: `/step3-sparc-specification` to begin the Specification phase."

### Step 7: Phase Checklist
**Action**: Open `.agent/checklists/01-multi-arc-research/phase-4-atomic-exit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
- ✅ Handoff files (JSON + Markdown) created/verified.
- ✅ Research artifacts committed.
- ✅ User explicitly guided to `/step3-sparc-specification`.
- ✅ Checklist verified.
