# Semantic Telemetry Configuration (IDEA-017)

> **Purpose**: Define the schema for machine-parseable event logging to enable causal tracing and self-healing.
> **Location**: `memory/telemetry/events.jsonl`

## Event Schema (JSON Lines)

```json
{
  "event_id": "uuid-v4",
  "timestamp": "ISO-8601",
  "workflow": "00-solicitation | 01-research | ...",
  "phase": "Phase Number",
  "event_type": "DECISION | ACTION | OBSERVATION | REFLECTION | ERROR",
  "semantic_context": {
    "intent": "Why this action?",
    "confidence": 0.0-1.0,
    "causal_links": ["parent_event_id"],
    "tags": ["architecture", "security", "latency"]
  },
  "data": {
    "input": "...",
    "output": "...",
    "tool_call": "..."
  }
}
```

## Protocol
1.  **Emit Event**: Before and after major decisions, agents MUST append a line to `memory/telemetry/events.jsonl` (if tool supports append) or log structured output to `MEMORY_STREAM.md` with `[TELEMETRY]` prefix.
2.  **Causal Linking**: Trace `parent_event_id` to build a Directed Acyclic Graph (DAG) of reasoning.
