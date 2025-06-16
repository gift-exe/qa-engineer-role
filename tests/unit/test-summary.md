# QA Task 2: Unit Tests for Todo.vue

## Test Summary

This test suite uses `@vue/test-utils` and `vitest` to test the `Todo.vue` component.

### Tests Implemented:

1. **Computed Property**:  
   - `filteredTodos` returns correct results for `filter = "short"`.

2. **User Interaction**:  
   - Adding a valid todo via `Enter` key adds it to the list.

3. **Edge Case**:  
   - Submitting empty input shows error message and does not add todo.

---

## Mocking

No special mocking was needed.  
- We used `setData` to simulate component state for computed property testing.
- For user events, we simulated DOM interaction with `setValue` and `trigger('keydown.enter')`.

---

## Failing Test: Edge Case

Initially, we tested the error message like this:

```js
expect(wrapper.find('.error').exists()).toBe(true)
