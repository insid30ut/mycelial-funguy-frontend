# Phase 1.5: Slopsquatting Detection (Package Verification)

> **Parent Workflow**: 01-Multi-Arc-Research
> **Phase Number**: 1.5
> **Objective**: Verify all recommended packages exist and are legitimate (Anti-Hallucination).

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: Ultra-Deep Research Protocol

---

## Instructions

### Step 1: Package Extraction
**Action**: Scan `docs/research/[feature]/deep_dive.md`.
**Action**: Extract list of all package recommendations (Name, Version, Registry).

### Step 2: Existence Verification (Anti-Hallucination)
**Action**: For EACH package, perform a web search or registry check:
*   **Query**: `[package-name] npm` or `[package-name] pypi`
*   **Check**: Does the registry page exist? (Status 200 vs 404)
*   **Result**:
    *   ❌ 404/Not Found = **SLOPSQUAT DETECTED** (Hallucination). Must remove or replace.
    *   ✅ Found = Proceed to Legitimacy Check.

### Step 3: Legitimacy Verification
**Action**: Check the following stats for existing packages:
*   **Downloads**: > 1000/week?
*   **Age**: > 6 months old?
*   **Maintainer**: Known entity or random?

### Step 4: Verification Report
**Action**: Append to `deep_dive.md` ("Dependencies" section):

```markdown
## Dependencies (Verified)
| Package | Version | Registry | Status |
|---------|---------|----------|--------|
| react | 18.2.0 | npm | ✅ Verified |
| some-lib | 1.0.0 | npm | ⚠️ Suspicious (low downloads) |
| fake-util | 2.0.0 | npm | ❌ SLOPSQUAT (does not exist) |
```

### Step 5: Decision Logic
*   **If ❌ SLOPSQUAT**: DO NOT proceed. Loop back to Phase 1 to find real alternative.
*   **If ⚠️ Suspicious**: Ask User for approval (Tier 2 Escalation).
*   **If ✅ Verified**: Proceed.

### Step 6: Phase Checklist
**Action**: Open `.agent/checklists/01-multi-arc-research/phase-1.5-slopsquatting-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ All packages checked.
- ✅ No SLOPSQUAT packages remain in `deep_dive.md`.
- ✅ User approved any suspicious packages.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 2: The Grand Unification
