# 00-Solicitation - Phase 4: System Architecture Checklist

This checklist ensures Phase 4 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 4 CHECKLIST

Before proceeding, ensure you have access to:
1. Phase 3 Anti-Goals (Constraints)
2. Phase 2 Killer Feature (Objective)

VALIDATION APPROACH:
1. **SCoT Rigor**: Did the agent actually think, or just pick the first option?
2. **Mapping Completeness**: Does the map cover User, Data, and Interface?
3. **PM Alignment**: Does the tech choice fit the business goals (MVP)?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Constraint Loading
- [ ] Anti-Goals from Phase 3 loaded into context
- [ ] "Killer Feature" loaded as the optimization target

## 2. CORE PHASE EXECUTION

### 2.1 SCoT Architecture Analysis (Step 1)
- [ ] **Law 5 (SCoT) Enforced**: `<scot>` block generated *before* final output
- [ ] **Option A (Simple)** analyzed
- [ ] **Option B (Robust)** analyzed
- [ ] **Option C (Balanced)** analyzed
- [ ] **Selection**: Winner explicitly chosen based on Phase 3 constraints (e.g. "Chose Option A because Anti-Goal said No K8s")

### 2.2 Super-PM: Technical Guidance (Integrated from PM Checklist Sec 7)
*Validate the SCoT analysis against PM Technical Standards:*
- [ ] **Trade-offs (PM Sec 7.2)**: Are the downsides of the chosen path acknowledged?
- [ ] **Scalability vs Speed (PM Sec 5.1)**: Is the choice appropriate for the *current* stage?
- [ ] **Integration Points (PM Sec 8.2)**: Are external APIs/Systems identified in the analysis?

### 2.3 System Decomposition (Step 2)
- [ ] **User Journey Map**: Daily workflow described?
- [ ] **Data Model**: Core Entities identified? (Schema preview)
- [ ] **Interface State**: UI/UX flow described?

### 2.4 Presentation (Step 3)
- [ ] System Map presented to user
- [ ] User asked for confirmation/pruning

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 5 (SCoT)**: verified presence of thought chain.
- [ ] **Law 10 (Complexity Brake)**: Did we choose the *simplest* architecture that works? (Bias towards Monolith/Scripts for MVPs).

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] `<scot>` block in chat history
- [ ] System Map (Journey, Data, Interface) presented

### 4.2 Quality Standards
- [ ] Architecture choice is defended with logic
- [ ] Data Model includes key entities (e.g. "User", "Post", "Comment")

## PHASE VALIDATION SUMMARY

[[LLM: FINAL PHASE REPORT GENERATION
1. Phase Status: COMPLETE / INCOMPLETE / FAILED
2. Validation Results
3. Next Phase Readiness: READY / BLOCKED]]

### Validation Results
| Section | Status | Issues |
|---------|--------|--------|
| 1. Prerequisites | _TBD_ | |
| 2. Core Execution | _TBD_ | |
| 3. Quality Gates | _TBD_ | |
| 4. Exit Criteria | _TBD_ | |

### Phase Decision
- **PROCEED TO PHASE 5**: Map is drawn.
- **RETRY PHASE**: No SCoT, or Map is missing dimensions.
