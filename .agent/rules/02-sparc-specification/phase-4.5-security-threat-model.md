# Phase 4.5: Security Threat Model

> **Parent Workflow**: 02-SPARC-Specification
> **Phase Number**: 4.5
> **Objective**: Systematically identify and document security risks using STRIDE.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 4: Adversarial SCoT

---

## Instructions

### Step 1: Applicability Check
**Action**: Determine if this phase is required.
*   Does this feature handle authentication?
*   Does this feature call external APIs?
*   Does this feature store/process PII (User Data)?
*   **IF NO to ALL**: LOG "Skipping Security Phase (Not Applicable)" and EXIT Phase.
*   **IF YES to ANY**: PROCEED.

### Step 2: STRIDE Analysis
**Action**: Analyze the feature inputs against STRIDE categories:
1.  **S**poofing: Can identity be faked?
2.  **T**ampering: Can data be modified illicitly?
3.  **R**epudiation: Can actions be denied?
4.  **I**nformation Disclosure: Can data leak?
5.  **D**enial of Service: Can service be blocked?
6.  **E**levation of Privilege: Can access be escalated?

### Step 3: Create Threat Model
**Action**: Create `docs/specs/[feature]/threat_model.md`:

```markdown
# Threat Model: [Feature]

## Attack Surface
- [Endpoint/Input 1]: [Risk Level]
- [Endpoint/Input 2]: [Risk Level]

## STRIDE Analysis
| Threat | Applies? | Mitigation |
|--------|----------|------------|
| Spoofing | Yes/No | [Plan] |
...

## Required Security Controls
- [ ] [Control 1]
- [ ] [Control 2]
```

### Step 4: Edge Case Integration
**Action**: If new threats are found, append them to `docs/specs/[feature]/edge_cases.md`.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/02-sparc-specification/phase-4.5-security-threat-model-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Applicability checked.
- ✅ Threat Model created (if applicable).
- ✅ New edge cases captured.
- ✅ Checklist verified.
