# 00-Solicitation - Phase 3: YAGNI Boundaries Checklist

This checklist ensures Phase 3 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 3 CHECKLIST

Before proceeding, ensure you have access to:
1. Phase 2 Outputs (Killer Feature)
2. `memory/MEMORY_STREAM.md` (Target for Anti-Goals)

VALIDATION APPROACH:
1. **Ruthlessness**: Are the cuts deep enough?
2. **Clarity**: Are the boundaries unambiguous?
3. **Safety**: Do the boundaries protect the agent from hallucinations/complexity loops?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Logic Check
- [ ] Knowing the "Killer Feature" (Phase 2), identify what *surrounds* it but isn't *it*.

## 2. CORE PHASE EXECUTION

### 2.1 The Challenge (Step 1)
- [ ] Agent asked explicitly for **Anti-Goals**
- [ ] Examples provided (e.g. "No Auth", "No GUI") to prime the user
- [ ] User response received

### 2.2 Risk Assessment (Step 2)
- [ ] Agent challenged the Anti-Goals: "Is this permanent or temporary?"
- [ ] confirmed Anti-Goals don't accidentally remove the Killer Feature (e.g. "Killer feature is login, Anti-Goal is No Auth" -> Conflict)

### 2.3 Super-PM: Scope Boundaries (Integrated from PM Checklist Sec 2.2)
*Validate the quality of the boundaries:*
- [ ] **Exclusions Explicit (PM Sec 2.2)**: Are "Nice-to-haves" explicitly moved to "Out of Scope"?
- [ ] **Rationale (PM Sec 2.2)**: Is it clear *why* these are cut? (Speed/Complexity/Irrelevance)
- [ ] **Infrastructure Checks (PM Sec 5.4)**: Are there hardware/platform constraints defined as Anti-Goals? (e.g. "No Kubernetes", "Windows Only")

### 2.4 Update Context (Step 3)
- [ ] Anti-Goals written to `memory/MEMORY_STREAM.md`
- [ ] Format is clear and retrieval-ready

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 10 (Complexity Brake)**: The Anti-Goals should actively reduce complexity. If user adds *more* scope here ("Actually, add Auth"), Law 10 is triggered -> Push back.

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] `memory/MEMORY_STREAM.md` updated with Anti-Goals

### 4.2 Quality Standards
- [ ] At least 1 Anti-Goal or Constraint is defined (Rare for a project to have zero boundaries)
- [ ] Anti-Goals are negative statements ("No X", "Not Y")

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
- **PROCEED TO PHASE 4**: Boundaries are set.
- **RETRY PHASE**: Scope is still "Everything".
