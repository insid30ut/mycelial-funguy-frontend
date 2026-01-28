# Tool Registry

> **Purpose**: Canonical list of available tools with parameter schemas.
> **Rule**: Agents MUST validate against this before tool invocation.

## File Operations

### read_file
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | Absolute path to file |
| encoding | string | No | Default: utf-8 |

**Safety Level**: LOW (read-only)

### write_file
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | Absolute path to file |
| content | string | Yes | Content to write |
| overwrite | boolean | No | Default: false |

**Safety Level**: MEDIUM (creates/modifies files)
**Requires Confirmation**: If `overwrite: true`

## Search Operations

### search_web
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | string | Yes | Search query |
| year_filter | string | No | e.g., "2025" |

**Safety Level**: LOW (read-only external)

## Dangerous Operations

### run_command
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | string | Yes | Shell command |
| cwd | string | No | Working directory |

**Safety Level**: HIGH (system modification)
**Requires Confirmation**: ALWAYS (unless in allowlist)
