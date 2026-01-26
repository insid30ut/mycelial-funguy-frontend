# Context Index (IDEA-018)

> **Purpose**: Track available context resources, their relevance scores, and token costs for JIT assembly.
> **Location**: `memory/CONTEXT_INDEX.md`

## Resource Index

| Resource ID | Type | Path | Token Est. | Semantic Tags | Last Accessed | Decay Factor |
|-------------|------|------|------------|---------------|---------------|--------------|
| RES-001 | CORE | memory/PROJECT_STATE.md | 500 | state, critical | [Now] | 1.0 (Fixed) |
| RES-002 | LOG | memory/failure_log.md | 2000 | errors, learning | [Date] | 0.9 |
| RES-003 | SPEC | docs/specs/auth_spec.md | 1500 | auth, login, security | [Date] | 0.8 |

## JIT Assembly Protocol
1.  **Define Budget**: e.g., "I have 4000 tokens for this decision."
2.  **Query**: "I need context on [Auth] and [Database]."
3.  **Score**: Telemetry agent calculates score = `(TagMatch * 0.5) + (Recency * 0.3) + (Usage * 0.2)`.
4.  **Load**: Sort by score desc, load until budget full.
