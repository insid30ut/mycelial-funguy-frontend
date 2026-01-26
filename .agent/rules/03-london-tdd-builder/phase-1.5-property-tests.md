# Phase 1.5: Property-Based Testing Strategy (Generative Fuzzing)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 1.5
> **Objective**: Define invariants and generate property tests to catch edge cases.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: Test Scaffolding & SCoT Planning

---

## Instructions

### Step 1: Invariant Identification
**Action**: Analyze the feature. What MUST always be true regardless of input?
*   *Example*: "Sorting never changes array length."
*   *Example*: "Decoded(Encoded(x)) == x" (Round trip)
*   *Example*: "Price is never negative."

### Step 2: Property Test Generation
**Action**: Create a separate test file `__tests__/[feature].property.test.ts` (or similar).
**Constraint**: Use a fuzzing library (`fast-check` for JS/TS, `hypothesis` for Python, etc.) if available. If not, write a simple generative loop.

#### Example (Pseudocode):
```typescript
test('Transformation Invariants', () => {
  fc.assert(
    fc.property(fc.string(), (input) => {
      const result = transform(input);
      // Invariant 1
      expect(result.length).toBeLessThanOrEqual(input.length);
      // Invariant 2
      expect(isValid(result)).toBe(true);
    })
  );
});
```

### Step 3: Run the Fuzzer
**Action**: Run the property tests.
**Result**:
*   **Green**: Invariants hold for random inputs.
*   **Red**: Edge case found!
    *   **Fix**: Add the specific failing case to your standard unit tests (Phase 1).
    *   **Fix**: Update implementation to handle the edge case.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-1.5-property-tests-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ At least 1 Property Test defined (if applicable).
- ✅ Tests passed (or edge cases migrated to Unit Tests).
- ✅ Checklist verified.
