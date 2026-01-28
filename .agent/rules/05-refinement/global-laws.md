# Global Laws: 05-Refinement

> **Applies To**: ALL phases in 05-Refinement workflow
> **Enforcement**: MANDATORY - violations are critical failures

## 🛑 SYSTEM OVERRIDE: CRITICAL GLOBAL LAWS

### Law 1: The "No Silent Failures" Law
**Rule**: NEVER write empty catch blocks. If a tool fails, STOP.
**Enforcement**: Check every `try/catch`. If `catch(e) {}` exists -> REJECT.

### Law 2: The "Clean Floor" Law
**Rule**: Delete all temp files (`debug.json`, etc) before exiting.
**Enforcement**: Use `Remove-Item` or `fs.unlink` on any temp artifacts.

### Law 3: The "Double-Tap" Law
**Rule**: Verify EVERY file write by reading it back. Do not assume success.
**Enforcement**: Call `view_file` immediately after `write_to_file`.

### Law 4: The "Think-Tree" Law
**Rule**: Before complex actions, visualize 3 paths. Choose the best.
**Enforcement**: Use SCoT blocks (Law 5) for this visualization.

### Law 5: The "SCoT Protocol" Law
**Rule**: Before ANY decision with >1 viable path, you MUST output a `<scot>` block. Decisions without documented reasoning are invalid.
**Enforcement**:
```markdown
<scot>
**📍 SITUATION**: ...
**🎯 GOAL**: ...
**🔀 OPTIONS**: ...
**🧪 ANALYSIS**: ...
**✅ DECISION**: ...
</scot>
```

### Law 6: The "Confidence Declaration" Law
**Rule**: Every major decision MUST include a Confidence Score (0-100%) and Basis.
**Enforcement**: Output CONFIDENCE: [Score]% and BASIS: [Reasoning] with every decision.

### Law 7: The "Tool Validation" Law
**Rule**: Before ANY tool invocation, verify schema in `memory/schemas/tool_registry.md`.
**Enforcement**: Log intent and schema validation status.

### Law 8: The "Escalation Protocol" Law
**Rule**: If a decision triggers a T1, T2, or T3 event (see KNOWLEDGE_BASE/Escalation), you **MUST** pause and request human approval.
**Enforcement**: Check `APPROVAL_LOG.md` before proceeding. If blocked, use `notify_user`.

### Law 12: The "Autonomy Protocol" Law
**Rule**: Adhere to `PROJECT_STATE.Config.Autonomy`.
- **Manual**: Stop & Ask before EVERY file write/command. (User acts as Human-in-the-Loop).
- **Semi-Guided**: Stop & Ask for Architectural Decisions (SCoT) or Critical Law warnings. Auto-proceed for routine.
- **Fully Auto**: Auto-proceed unless AGI-level danger. Auto-Push.
**Enforcement**: Check `PROJECT_STATE.md` at start of session.

### Law 13: The "Evolution Imperative" Law
**Rule**: If a tool fails 3+ times OR you identify a recurring anti-pattern, you **MUST** trigger the Evolution Protocol.
**Enforcement**:
1. Log to `memory/failure_log.md`.
2. Check `PROJECT_STATE.EvolutionMode`.
   - **Off**: Do nothing.
   - **Semi/Full**: Consult `.agent/rules/EVOLUTION_PROTOCOL.md` to propose/execute a rule update.

---

## System Constraints (Specific to Refinement)

### 1. The "Band-Aid" Ban
You cannot suppress a crash. You cannot add `if (!x) return` without proving *why* `x` is null. If `x` should be valid, throwing an Error is better than a silent return.

### 2. The "Shotgun Debugging" Prohibition
Apply **ONE** logical fix at a time. Hypothesize -> Apply -> Test. Do NOT apply 3 random fixes.

### 3. The "Regression Tax"
Every Fix costs a Test. For every bug you fix, you MUST add a new "Regression Test" to ensure it never returns.

### 4. The "Log-and-Throw" Pattern
If you wrap code in try/catch, you **MUST** attach the original error: `throw new Error("Ctx", { cause: err })`. Preserve the stack.

### 5. The "No AI Slop" Manifesto
> **These patterns are BANNED. Detection = Immediate Refactor.**

#### Variable Naming
❌ BANNED: `data`, `item`, `result`, `temp`, `foo`, `bar`, `x`, `y`
✅ REQUIRED: Semantic names reflecting purpose (e.g., `userProfile`, `fetchedPosts`)

#### Comments
❌ BANNED: `// TODO`, `// FIXME`, `// implement this`, `// code goes here`, `// ...`
✅ REQUIRED: If you can't implement it, STOP. Do not leave placeholders.

#### Functions
❌ BANNED: Functions > 50 lines
❌ BANNED: Functions with > 3 parameters (use object destructuring)
❌ BANNED: Nesting > 3 levels deep
✅ REQUIRED: Single responsibility, descriptive names, early returns

#### Error Handling
❌ BANNED: Empty catch blocks (`catch (e) {}`)
❌ BANNED: Generic error messages ("An error occurred")
✅ REQUIRED: Specific error context, preserve stack traces

#### Types (TypeScript)
❌ BANNED: `any` type in application code
❌ BANNED: Type assertions (`as any`, `as unknown`)
✅ REQUIRED: Explicit interfaces, generics where appropriate

#### Dead Code
❌ BANNED: Commented-out code blocks
❌ BANNED: Unused imports, variables, functions
✅ REQUIRED: Delete, don't comment. Git has history.

#### Magic Values
❌ BANNED: Naked literals in logic (`if (status === 4)`)
✅ REQUIRED: Named constants or enums (`if (status === StatusCode.PROCESSING)`)

---

## Violations & Consequences
| Violation | Severity | Action |
|-----------|----------|--------|
| Band-Aid Fix | CRITICAL | Revert Fix, Restart Phase 1 |
| No Regression Test | HIGH | Reject Fix |
| AI Slop Detected | HIGH | Revert, issue Refactor Order |
| Missing SCoT | HIGH | Re-evaluate decision |
| Tool Misuse | CRITICAL | Stop execution, Check Schema |
| Unauthorized Escalation | CRITICAL | Rollback, Request Approval |
