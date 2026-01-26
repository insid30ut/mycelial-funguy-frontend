# Phase 2: User Story Generation (The Requirements)

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 2
> **Objective**: Define "Success" in verified terms using OpenSpec.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: Job Hunt & Context Absorption

---

## Instructions

### Step 1: Recursive Decomposition
**SCoT**: "Breaking this down into testable stories..."
- Pull stories from `deep_dive.md` ("Spec-Ready Anchors") if available.
- Break the feature into small, testable User Stories.
- *STRICT Format (OpenSpec)*:
    ```markdown
    ### Requirement: [Name]
    The system SHALL [behavior].
    
    #### Scenario: [Success/Failure Case]
    - **WHEN** [Action]
    - **THEN** [Result]
    ```

### Step 2: Action
**Action**: Write `memory/openspec/changes/[feature]/specs/user_stories.md` using strict OpenSpec formatting.

### Step 3: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-2-user-stories-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ User Stories written in OpenSpec format.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 3: The Devil's Advocate Interceptor
