# Phase 4: The System Architecture (SCoT & Mapping)

> **Parent Workflow**: 00-Solicitation
> **Phase Number**: 4
> **Objective**: Explore topologies and Map the System.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 3: The "YAGNI" Boundaries

---

## Instructions

### Step 1: SCoT Architecture Analysis
**Constraint**: You MUST output a `<scot>` block protocol (Law 5) before presenting the map.
- **Option A (Naive/Simple)**: "What if we built this as a Monolith/Script?"
- **Option B (Robust/Scale)**: "What if we used Microservices/Event-Driven?"
- **Option C (The Balanced Way)**: "The pragmatic middle ground."
**Analysis/Decision**: Critique options. Select the winner based on **Phase 3 Constraints**.

### Step 2: System Decomposition
**Action**: Decompose the "Winner" into 3 dimensions (The System Map):
1. **User Journey**: Daily workflow (Who is the user?).
2. **Data Model**: Core Entities (Nouns/Schema).
3. **Interface State**: UI/UX flow (Dashboard/Wizard?).

### Step 3: Presentation
**Ask**: "I have explored 3 paths via SCoT and selected [Selection]. Here is the System Map (Journey, Data, Interface). Shall we prune any dead branches?"

### Step 4: Wait
**Action**: Wait for user input.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/00-solicitation/phase-4-system-architecture-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Architecture options analyzed via SCoT.
- ✅ System Map created and presented.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 5: The "Day in the Life" Simulation
