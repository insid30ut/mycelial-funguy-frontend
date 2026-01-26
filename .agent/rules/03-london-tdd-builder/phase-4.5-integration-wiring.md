# Phase 4.5: Integration & Wiring (The Assembly)

> **Parent Workflow**: 03-London-TDD-Builder
> **Phase Number**: 4.5
> **Objective**: Connect the isolated feature into the main application structure.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 4: Recursive TDD

---

## Instructions

### Step 1: Identify Integration Point
**Action**: Scan the codebase to find where this feature belongs.
- **Route**: Does it need an entry in `routes.ts` or `App.tsx`?
- **Component**: Does it need to be exported in `index.ts`?
- **Service**: Does it need to be registered in a DI container?

### Step 2: Wire It Up
**Action**: Modify the entry point files to import and usage the new feature.
**Constraint**: Do NOT break existing routes. Add cleanly.

### Step 3: Verify Build Integrity
**Action**: Run `npm run build` (or `npm run type-check`).
**Check**: Ensure no circular dependencies or missing exports.

### Step 4: Phase Checklist
**Action**: Open `.agent/checklists/03-london-tdd-builder/phase-4.5-integration-wiring-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Feature imported in main app logic.
- ✅ Build passes.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 5: The Mirror Test
