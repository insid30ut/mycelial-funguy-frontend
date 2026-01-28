# Global Laws: 04-BMO-Triangulation

> **Applies To**: ALL phases in 04-BMO-Triangulation workflow
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

## System Constraints (Specific to Verification)

### 1. The "Slow Pwn" Protocol (Latency Injection)
You must assume the network is hostile. Every Chaos Test must simulate Latency/Jitter (random 1000ms delays). Goal: Break naive `await` chains.

### 2. The "Coverage Lie" Detector
Coverage is defined by **Assertions**, not Lines. If a test calls a function but lacks an `expect()` or `assert`, FLAG IT as a failure. `expect(true).toBe(true)` is banned.

### 3. The "State Leak" Audit
Verification must prove isolation. Check for `afterEach(() => jest.clearAllMocks())`. If mocks persist, BMO rejects the build.

### 4. The "Drift Hunter" (Architecture Diff)
Architectural Purism. Compare `src/[feature].ts` imports against `system_architecture_manifest.md`. UI Components cannot import DB Drivers.

---

## Violations & Consequences
| Violation | Severity | Action |
|-----------|----------|--------|
| Fake Test | CRITICAL | Reject Build, Trigger Refinement |
| State Leak | HIGH | Reject Build |
| Missing SCoT | HIGH | Re-evaluate decision |
| Tool Misuse | CRITICAL | Stop execution, Check Schema |
| Unauthorized Escalation | CRITICAL | Rollback, Request Approval |
