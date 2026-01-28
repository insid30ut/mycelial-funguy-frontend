# Evolution Protocol

> **Purpose**: Instructions for the agent on how to safely edit its own rule files.
> **Safety Level**: CRITICAL
> **Applies To**: Global Laws (The Evolution Imperative), Phase 5 (BMO)

---

## 🛑 Safety Checks (MANDATORY)

Before determining WHAT to change, you must verify IF you can change it.

### 1. Check Evolution Mode
Read `memory/PROJECT_STATE.md` (or check current context).
- **Off (Speed Mode)**: 🛑 STOP. Do not evolve. Log logic to `memory/failure_log.md` only.
- **Semi-Auto**: ⚠️ ASK. You must call `notify_user` to request permission before executing the change.
- **Fully Auto**: 🟢 PROCEED. You may execute *additive* changes automatically.

### 2. Check Change Type
- **Additive (New Rule/Phase)**: 🟢 SAFE. Adding a new check or law is encouraged.
- **Modification (Changing Logic)**: ⚠️ RISK. Only allowed if strictly necessary to fix a bug. If `Semi-Auto`, MUST explain why.
- **Deletion (Removing Rules)**: 🛑 DANGER. **NEVER** delete a rule/phase without explicit user approval (even in Fully Auto).

---

## 🛠️ Execution Instructions

Since you cannot directly edit the `.agent/rules` files (they are read-only to prevent accidents), you must use the **Temp-Swap Pattern**.

### Step 1: Read Target File
- Use `view_file` to get the **exact** current content of the rule file you want to evolve.
- *Example*: `.agent/rules/00-solicitation/global-laws.md`

### Step 2: Create Temporary File
- Use `write_to_file` to create a COPY of the file with your **added** rule/logic.
- **Path**: `temp/[filename]` (e.g., `temp_evolution/global-laws.md`).
- **Content**: The FULL content of the original file + your new rule.

### Step 3: Atomic Swap (PowerShell)
- Use `run_command` to force-move the temp file over the original.
- **Command**:
  ```powershell
  $Source = "c:\absolute\path\to\temp_evolution\global-laws.md"
  $Dest = "c:\absolute\path\to\rules\00-solicitation\global-laws.md"
  Move-Item -Force $Source $Dest
  Remove-Item "c:\absolute\path\to\temp_evolution" -Recurse -Force -ErrorAction SilentlyContinue
  ```

### Step 4: Verify
- Use `view_file` on the destination to confirm the change exists.

### Step 5: Log Event
- Append the event to `memory/EVOLUTION_LOG.md`:
  `| [Date] | [Type] | [Description] | [Impact] |`

---

## 🧠 Evolution Heuristics

**When to Evolve?**
1.  **Metric Failure**: If BMO Triangulation score < 80% consistently.
2.  **Recurring Bug**: If `failure_log.md` shows the same error 3+ times.
3.  **Human Feedback**: If the User explicitly corrects a behavior.

**How to Evolve?**
- **Draft a Law**: "The [Name] Law". Format: **Rule** + **Enforcement**.
- **Scope it**: Does this apply to ALL workflows (update all `global-laws.md`) or just ONE (update specific `global-laws.md`)?
