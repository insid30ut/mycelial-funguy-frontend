# PROJECT STATE (The Database)

> **ROLE**: This file is the Single Source of Truth for the project's macro-state.
> **RULE**: Agents must READ this at the start of a session and UPDATE it at the end of a major phase.
> **RULE**: Do NOT use this for temporary thinking (use MEMORY_STREAM.md).

## 1. Project Metadata
| Key | Value |
| :--- | :--- |
| **Project Name** | [TBD - Defined in Solicitation] |
| **Vision** | [TBD - Defined in Solicitation] |
| **Current Phase** | 00-Solicitation |
| **Last Updated** | 2026-01-01 |

## 2. Tech Stack & Constraints
> **Strict Constraints**: [TBD - Defined in Solicitation]
> **Frameworks**: [TBD - Defined in Solicitation]

| Category | Selection | Rationale |
| :--- | :--- | :--- |
| **Frontend** | [TBD] | |
| **Styling** | [TBD] | |
| **State Mgmt** | [TBD] | |
| **Testing** | [TBD] | |

## 3. Anti-Goals (Do NOT Implement)
> **Critical**: These are explicit boundaries.
- [ ] [Add more during Solicitation]

## 4. Feature Roadmap (Kanban)
**Legend**:
- `( )` Scoping/Backlog
- `(/)` In Progress (Active)
- `(*)` Completed & Verified (BMO Passed)
- `(!)` Failed / Needs Refinement

### A. Core Foundation
- ( ) Project Scaffold & Config
- ( ) Shared Component Library

### B. User Features
- ( ) [Features to be added Solicitations]

## 5. Evolution Configuration
| Key | Value | Description |
| :--- | :--- | :--- |
| **Evolution Mode** | `Semi-Auto` | Options: `Off`, `Semi-Auto`, `Fully Auto`. Default: `Semi-Auto`. |

## 6. File Registry (Key Artifacts)
| Document Type | Path | Status |
| :--- | :--- | :--- |
| **Brief** | `docs/project_brief.md` | ( ) |
| **Research** | `docs/research/` | ( ) |
| **Specs** | `docs/specs/` | ( ) |
| **System Model** | `docs/bmo/system_model.md` | ( ) |

## 6. Operational Tracks (Scale-Adaptive)
> **Goal**: Match effort to complexity.
- **Track A (Hotfix)**: Direct Edit.
    - *Trigger*: Bug fixes, typos, critical errors.
    - *Flow*: `05-refinement` (Targeted Fix).
- **Track B (Feature)**: Standard Flow.
    - *Trigger*: New sub-features, user stories.
    - *Flow*: `01-research` -> `02-sparc` (Proposal) -> `03-builder`.
- **Track C (System)**: Architecture First.
    - *Trigger*: Major refactors, new capabilities, cross-cutting concerns.
    - *Flow*: `01-research` -> ADR Creation -> `02-sparc` (Proposal) -> Gate Check -> `03-builder`.
