# Phase 0: Ancestral Audit & System Onboarding

> **Parent Workflow**: 00-Solicitation
> **Phase Number**: 0
> **Objective**: Learn from the past AND Configure the Autonomy Level/Git Strategy.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase -0.6: Constitutional Compliance Check

**MUST have access to**:
- `memory/failure_log.md`
- `memory/PROJECT_STATE.md`
- Git Environment

---

## Instructions

### Step 1: Wisdom Retrieval
**Action**: Read `memory/failure_log.md` and `memory/PROJECT_STATE.md`.
**Branch 1 (Fresh Start)**:
- IF `failure_log.md` is MISSING OR contains `Failures: None`:
    - **Action**: Output "🆕 **Fresh Start Detected**: Starting with a clean slate (No failures recorded)."
    - **Note**: Proceed directly to setup.
**Branch 2 (Ongoing)**:
- IF failures exist:
    - **Prompt**: "Review the `failure_log.md`. What specific mistake did the previous agent make? List 3 constrained rules to avoid repeating it."

### Step 2: The Handshake & Tour Guide
**Action**: You MUST output the following welcome message to orient the user:

"👋 **Welcome to the Antigravity Atomic Swarm!**

I am your AI Co-Founder. Together, we are going to build something amazing.
Before we start building, I need to know how you want to work together. Think of this as setting up our office rules.

**First: The 'Save System' (Git)**
I am going to check if this folder is connected to **Git** (GitHub/GitLab).
*   **Why?** Git acts like a 'Save Game' for code. If I break something, we can instantly rewind. It also lets us save our progress safely to the cloud.
*   **Recommendation**: I highly recommend we use it.
*   **Check**: I'm running a quick check now..."

**Action**: Run `git remote -v`.

**Scenario A: Remote Found**
"✅ **Great news!** I found a Git remote at `[URL]`.
*   Will you allow me to 'Auto-Push' my work to the cloud so you never lose progress?
*   [Y] Yes, secure my work automatically.
*   [N] No, I'll push manually."

**Scenario B: No Remote Found**
"⚠️ **No Git detected.**
I didn't find a repository. We have two options:
1.  **Initialize New Repo**: I can set one up right here. You'll have local 'Undo' buttons, but we won't be pushing to the cloud yet.
2.  **Fly Without a Net**: We can work without Git, but if files get deleted, they are gone forever.
*   What would you like to do? [Init / Skip]"

### Step 3: Configure Your Agent's Personality

**1. Operational Autonomy**
"Next, how much control do you want over the **day-to-day coding**? This determines how often I stop to ask for your permission."
- **[1] Fully Autonomous (Captain Mode)**: "I take full ownership. I will make decisions, write code, and push changes automatically. I only stop for critical system failures. Best for speed."
- **[2] Semi-Autonomous (Co-Pilot Mode)**: "We work as partners. I will handle routine tasks automatically, but I will stop and ask you before making major architectural decisions or pushing code. Best for collaboration."
- **[3] Manual Control (Navigator Mode)**: "You are in charge. I will not write a single file or run a command without your explicit approval. Best for precision and sensitive refactors."

**2. Self-Evolution Strategy**
"Finally, how should I handle **mistakes and learning**? When I find a bug or a better way to do things, do you want me to update my own internal rulebook?"
- **[1] Fully Independent Evolution**: "I will proactively safeguard the project. If I make a mistake, I will instantly write a new rule to ensure I never make it again. I will optimize my own behavior in the background."
- **[2] Collaborative Evolution**: "I will spot patterns and propose improvements. If I mess up, I'll draft a new rule and ask: 'Boss, should I add this to our Global Laws?' You decide."
- **[3] Static Mode (No Evolution)**: "I will stick to the script. I won't update any rules or strategies, prioritizing raw execution speed over long-term system optimization."

### Step 4: Update State
**Action**: Update `memory/PROJECT_STATE.md` with:
- `Config: { Autonomy: "...", EvolutionMode: "...", GitPush: boolean, Repo: "..." }`.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/00-solicitation/phase-0-ancestral-audit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Autonomy level configured.
- ✅ Evolution mode configured.
- ✅ Git strategy configured.
- ✅ Project State updated.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 1: The Vision Statement
