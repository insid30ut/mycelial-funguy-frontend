# OpenSpec Configuration

## 1. Directory Structure
- **Proposals**: `memory/openspec/changes/[feature]/`
- **Truth**: `docs/specs/[feature]/`

## 2. Workflow
1.  **Draft**: Agent creates `memory/openspec/changes/[feature]/proposal.md`.
2.  **Spec**: Agent drafts `specs/*.md` inside the change folder.
3.  **Approve**: Gatekeeper (Phase 8 of SPARC) verifies coverage.
4.  **Promote**: Agent copies specs to `docs/specs/` and marks status `(S)`.

## 3. Strict Rules
- No coding without a `readiness_report.md` in the change folder.
- All Requirements MUST have `#### Scenario:`.
