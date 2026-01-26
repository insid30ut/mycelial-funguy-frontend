# Context Token Budget

> **Purpose**: Tracks token usage and compaction events to prevent overflow.
> **Rule**: Log major context loading/unloading events.

| Timestamp | Event | Size (Est. Tokens) | Action Taken |
| :--- | :--- | :--- | :--- |
| [ISO8601] | Session Start | ~2000 | Loaded base context |
