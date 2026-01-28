# Phase 1.5: Feature Extraction & Specification (The Collaborative Loop)

> **Parent Workflow**: 00-Solicitation
> **Phase Number**: 1.5
> **Objective**: collaboratively extract, suggest, and refine *every* feature in a recursive loop until the user is satisfied.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: The Vision Statement (or existing `PROJECT_STATE.md`)

---

## Instructions

### Step 0: Context Hydration
**Action**: Read `memory/PROJECT_STATE.md`.
**Internal Thought**: "What is the high-level goal? I need to know this to make suggestions."

### Step 1: The Recursive Extraction Loop (REPEAT UNTIL DONE)
**Action**: Enter a loop of extraction, suggestion, and verification.

#### 1.1: Analyze & Suggest
- **Read**: The user's latest input.
- **Extract**: Identify features, tech, and constraints using SCoT.
- **Suggest**: "Based on [User Input], you might also need [Suggestion A] and [Suggestion B]. Should I add these?"
- **Clarify**: "For [Feature X], did you mean [Option A] or [Option B]?"

#### 1.2: Update Inventory (Real-Time)
- **Action**: Update `docs/feature_inventory.md` with *confirmed* items.
- **Display**: Show the current "Draft Inventory" in the chat.
    ```markdown
    **Current Inventory**:
    1. [Feature 1]
    2. [Feature 2]
    ...
    ```

#### 1.3: The "Anything Else?" Gate
- **Ask**: "Is there anything else you can think of? Or any other features I should suggest?"
- **If User says 'More'**: Repeat Step 1.1.
- **If User says 'Done'**: Proceed to Step 2.

### Step 2: Final Verification (The Mirror)
**Action**: Present the **Final Feature Inventory** to the user.
**Prompt**:
```
┌─────────────────── LOCKED FEATURE INVENTORY ───────────────────┐
| [Full List of Features, Tech Stack, and Libraries]             |
└────────────────────────────────────────────────────────────────┘
Are we ready to lock this in and move to Hindsight Visioning?
1. YES: Proceed.
2. NO: Back to Loop.
```

### Step 3: Documentation
**Action**: Ensure `docs/feature_inventory.md` is complete and saved.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/00-solicitation/phase-1.5-feature-extraction-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Recursive loop continued until user said "Done".
- ✅ Agent proactively made suggestions.
- ✅ `docs/feature_inventory.md` created and approved.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 2: The "Hindsight 20/20" Visioning
