# 00-Solicitation - Phase 1: The Vision Statement Checklist

This checklist ensures Phase 1 is executed completely, correctly, and in alignment with the workflow's Global Laws and objectives.
**CRITICAL**: This phase incorporates "Super-PM" validation standards. You must validate the Vision not just as a string of text, but as a viable product foundation.

[[LLM: INITIALIZATION INSTRUCTIONS - PHASE 1 CHECKLIST

Before proceeding, ensure you have access to:
1. `memory/PROJECT_STATE.md` (Updated from Phase 0)
2. `memory/context.md` (if applicable)

VALIDATION APPROACH:
1. **The "Why" Test**: Does the user explain *why* this needs to exist, or just *what* it is?
2. **The "Who" Test**: Is the target audience implied or explicit?
3. **The "What" Test**: Is the core mechanic defined?

EXECUTION MODE:
Option A: Interactive - Complete section by section with user confirmation
Option B: Autonomous - Execute full phase and report at end]]

## 1. PREREQUISITES & CONTEXT

### 1.1 Ancestral Verification
- [ ] Phase 0 (Ancestral Audit) confirmed complete
- [ ] Project State contains `Autonomy` and `GitPush` settings

### 1.2 "Context Check" (Step 1)
- [ ] Agent asked: "What are we building today?"
- [ ] Agent asked for "Context" before "Code"
- [ ] No code was written in this phase (Strict YAGNI)

## 2. CORE PHASE EXECUTION

### 2.1 The Vision Definition (Steps 2-3)
- [ ] Examples provided to prompt user (Snake Game vs Reactor) to gauge complexity
- [ ] User input received and parsed
- [ ] User's "High-Level Goal" extracted clearly

### 2.2 Super-PM: Problem Definition (Integrated from PM Checklist Sec 1.1)
*Validate the user's input against these product standards. If missing, ASK clarifying questions.*
- [ ] **Problem Statement**: Is the core problem being solved clearly articulated?
- [ ] **Target Audience**: Is it clear *who* this is for? (e.g., "Devs", "Kids", "Internal Ops")
- [ ] **Value Prop**: Is it clear *why* this solution is better/necessary?
- [ ] **Impact**: Is the intended outcome measurable or observable?

### 2.3 Super-PM: Business & Success Metrics (Integrated from PM Checklist Sec 1.2)
- [ ] **Objective Defined**: Is there a single, unifying goal? (e.g. "Build a standard todo app" vs "Revolutionize task management")
- [ ] **Success Metric**: How will we know we finished? (e.g., "All tests pass" or "User can login")

## 3. QUALITY GATES

### 3.1 Global Law Compliance
- [ ] **Law 1 (The 10x Engineer)**: Does the vision allow for a 10x impactful solution, or is it "slop"?
- [ ] **Law 2 (Conway's Law)**: Does the vision imply a structure that fits the agent's capabilities?
- [ ] **Law 6 (No-Go Zones)**: confirmed vision does NOT violate restricted topics (Malware, Hate Speech, etc.)

### 3.2 Constitutional Guardrails
- [ ] Vision aligns with Constitutional principles (Safe, Secure, Helpful)

## 4. EXIT CRITERIA VALIDATION

### 4.1 Mandatory Outputs
- [ ] `memory/PROJECT_STATE.md` updated
- [ ] `Goal` field in Project State populated with the explicit Vision Statement
- [ ] `Goal` is not generic (e.g., "Make app") but specific (e.g., "Create a CLI-based Pomodoro timer in Rust")

### 4.2 Quality Standards
- [ ] Vision Statement is concise (< 50 words recommended for the summary)
- [ ] Vision Statement is unambiguous

## PHASE VALIDATION SUMMARY

[[LLM: FINAL PHASE REPORT GENERATION
1. Phase Status: COMPLETE / INCOMPLETE / FAILED
2. Validation Results Table
3. Super-PM Gaps: (List missing Product Definitions)
4. Next Phase Readiness: READY / BLOCKED]]

### Validation Results
| Section | Status | Issues |
|---------|--------|--------|
| 1. Prerequisites | _TBD_ | |
| 2. Core Execution | _TBD_ | |
| 3. Quality Gates | _TBD_ | |
| 4. Exit Criteria | _TBD_ | |

### Phase Decision
- **PROCEED TO PHASE 2**: Vision is solid.
- **RETRY PHASE**: Vision is vague. Ask user for clarification.
