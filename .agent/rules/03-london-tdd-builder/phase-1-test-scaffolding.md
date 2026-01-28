# Phase 1: Test Scaffolding & SCoT Planning (The Red Stage)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 1
> **Objective**: Plan the mocks and INVARIANTS before coding.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 0: Ancestral Audit & Job Hunt
- ✅ Phase 0.6: Package Audit

**MUST have access to**:
- `docs/specs/[feature]/functional_spec.md`
- `docs/specs/[feature]/pseudocode.md`

---

## Instructions

### Step 1: Read Specs
**Action**: Read the functional spec and pseudocode for the target feature.

### Step 2: Dependency SCoT
**Action**: Execute the SCoT Protocol to map dependencies.
- **Visualize**: "If I test Component A, it imports B and C."
- **Plan**: "I must create a mock for B. I must create a mock for C."
- **Output**: Write the Mock Strategy into `memory/MEMORY_STREAM.md` before coding.

### Step 3: Create Test File
**Action**: Create the test file `src/__tests__/[feature].test.ts`.

### Step 4: Implement Mocks
**Action**: Implement the Planned Mocks in the test file.

### Step 5: Write First Test (Property-Based)
**Action**: You MUST write at least one **Property-Based Test (PBT)** Invariant using `fast-check` (or `hypothesis` equivalent).
*   *Why*: Example-based tests miss edge cases. PBT tests invariants.
*   *Pattern*: `fc.assert(fc.property(Arbitrary, (data) => { expect(invariant).toBeTrue() }))`
*   *Fallback*: If PBT is impossible, document WHY in comments and write a highly parametric standard test.

### Step 6: Write Standard Scenarios
**Action**: Write tests for the OpenSpec stories (`#### Scenario:`).

### Step 7: Confirm Red
**Action**: Run the test to confirm it fails (Red).

### Step 8: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-1-test-scaffolding-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Mock Strategy documented.
- ✅ Test file created.
- ✅ **At least one PBT Invariant defined** (or waiver documented).
- ✅ Tests fail (Red state verified).
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 2: Implementation (The Green Stage)
