# E2E Test Summary: todo-flow.spec.js

## Test Coverage

- Logs in via `/login`
- Creates 3 todos
- Deletes one todo (`Call mom`)
- Verifies the item is removed from the list
- Checks filter logic still works
- Logs out

---

## Handling Flakiness

- Used Playwright's built-in **auto-waiting** (e.g. `expect(...).toHaveText(...)`).
- Avoided manual `waitForTimeout` calls.
- Interactions are scoped to visible elements using `locator`.

To further reduce flakiness:
- Set up retries in playwright.config.ts:  
  retries: 2
