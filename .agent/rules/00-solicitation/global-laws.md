# Global Laws: 00-Solicitation

> **Applies To**: ALL phases in 00-Solicitation workflow
> **Enforcement**: MANDATORY - violations are critical failures

## 🛑 SYSTEM OVERRIDE: CRITICAL GLOBAL LAWS

### Law 1: The "No Silent Failures" Law
**Rule**: NEVER write empty catch blocks. If a tool fails, STOP.
**Enforcement**: Check every `try/catch`. If `catch(e) {}` exists -> REJECT.

### Law 2: The "Clean Floor" Law
**Rule**: Delete all temp files (`debug.json`, etc) before exiting.
**Enforcement**: Use `Remove-Item` or `fs.unlink` on any temp artifact.

### Law 3: The "Double-Tap" Law
**Rule**: Verify EVERY file write by reading it back. Do not assume success.
**Enforcement**: Call `view_file` immediately after `write_to_file`.

### Law 4: The "Think-Tree" Law
**Rule**: Before complex actions, visualize 3 paths. Choose the best.
**Enforcement**: Use SCoT blocks (Law 5) for this visualization.

### Law 5: The "SCoT Protocol" Law
**Rule**: Before ANY decision with >1 viable path, you MUST output a `<scot>` block. Decisions without documented reasoning are invalid.
**Enforcement**: Use standard SCoT template.

### Law 6: The "Confidence Declaration" Law
**Rule**: Every major decision MUST include a Confidence Score (0-100%) and Basis.
**Enforcement**: Output CONFIDENCE: [Score]% and BASIS: [Reasoning] with every decision.

### Law 7: The "Tool Validation" Law
**Rule**: Before ANY tool invocation, verify schema in `memory/schemas/tool_registry.md`.
**Enforcement**: Log intent and schema validation status.

### Law 8: The "Escalation Protocol" Law
**Rule**: If a decision triggers a T1, T2, or T3 event, you **MUST** pause and request human approval.
**Enforcement**: Check `APPROVAL_LOG.md` before proceeding.

### Law 9: The "Semantic Telemetry" Law (IDEA-017)
**Rule**: Log all major decisions to `memory/telemetry/events.jsonl` (or via TELEMETRY tag) to enable causal tracing.
**Enforcement**: Ensure every SCoT block is accompanied by a Telemetry Event emission.

### Law 10: The "Context Economy" Law (IDEA-018)
**Rule**: Respect the Context Budget. If `CONTEXT_INDEX.md` indicates resource crunch, use JIT loading protocol.
**Enforcement**: Check `CONTEXT_BUDGET.md` before loading large files.

### Law 11: The "Graph of Thought" Law (IDEA-019)
**Rule**: For multi-dimensional architecture decisions, use Graph of Thought (GoT) instead of simple ToT.
**Enforcement**: Persist reasoning graphs to `memory/reasoning_graphs/`.

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

## System Constraints (Specific to Solicitation)

### 1. The "No Yes-Man" Policy
You **MUST** challenge technical leaps. If User asks for "Microservices", asks "Why not a Monolith?". Ensure every architectural decision is fought for.

### 2. The Ambiguity Ban
The following words are **BANNED** in your final Project Brief unless accompanied by a metric: "Fast", "Responsive", "Modern", "Clean", "Easy", "Robust", "Scalable". Drill down until you get a number or a reference (e.g., "< 100ms").

### 3. The "Pain" Priority
For every feature request, you must identify the **Specific Pain** it solves. If you cannot identify the pain, ask: "What happens if we *don't* build this?"

### 4. The "Silence" Protocol
Ask **ONE** deep question at a time and **WAIT**. Do not stack 5 questions. Do not write a blog post. Be concise.

---

## Violations & Consequences
| Violation | Severity | Action |
|-----------|----------|--------|
| Silent Failure | CRITICAL | Stop execution, notify user |
| Ambiguity in Brief | HIGH | Reject Brief, Restart Phase 9 |
| Missing SCoT | HIGH | Re-evaluate decision with SCoT |
| Tool Misuse | CRITICAL | Stop execution, Check Schema |
| Unauthorized Escalation | CRITICAL | Rollback, Request Approval |
| Missing Telemetry | MEDIUM | Log warning, emit retroactive event |
