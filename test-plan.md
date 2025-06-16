# QA Task 1: Test Plan & Test Cases for `Todo.vue` Component

## Overview
The `Todo.vue` component allows users to add, delete, and filter a list of todo items.  
This test plan outlines the test strategy and includes detailed test cases to ensure the component behaves as expected.

---

## Test Plan

### Types of tests to carry out

| Test Type      | Description                                                                 | Priority |
|----------------|-----------------------------------------------------------------------------|----------|
| **Unit Tests** | Test individual functions (e.g., `addTodo`, `deleteTodo`, `filteredTodos`)  | High     |
| **Integration**| Test how input, error messages, filters, and todo list work together        | High     |
| **E2E Tests**  | Simulate full user interactions (e.g., typing a todo, filtering, deleting)  | Medium   |

---

### Testing Priorities

1. **Validation Logic**: Ensure empty todos show an error.
2. **Todo List Management**: Confirm todos are added/removed correctly.
3. **Filtering**: Check that filter options correctly display short/long todos.
4. **UI Feedback**: Verify the error message is shown only when appropriate.
5. **State Reset**: Ensure input resets after adding a todo.

---

## Test Cases

---

### Test Case 1: Add Valid Todo

- **Description**: Verify that a valid todo is added to the list.
- **Preconditions**: Component is mounted.
- **Steps**:
  1. Type `Buy milk` in the input field.
  2. Press `Enter`.
- **Expected Result**: 
  - `Buy milk` is added to the list.
  - Input field is cleared.
  - No error is shown.

---

### Test Case 2: Add Empty Todo

- **Description**: Ensure that empty todos cannot be added and an error is shown.
- **Preconditions**: Component is mounted.
- **Steps**:
  1. Ensure input is empty.
  2. Press `Enter`.
- **Expected Result**: 
  - Error message `Todo cannot be empty` is displayed.
  - No new todo is added.

---

### Test Case 3: Delete a Todo

- **Description**: Validate that a todo can be deleted from the list.
- **Preconditions**: At least one todo (`Buy milk`) is present.
- **Steps**:
  1. Click the `Delete` button next to `Buy milk`.
- **Expected Result**: 
  - `Buy milk` is removed from the list.

---

### Test Case 4: Filter Short Todos

- **Description**: Test filtering to show only short todos (≤ 10 characters).
- **Preconditions**: Todos: `Buy`, `Clean the house`.
- **Steps**:
  1. Select the filter option: `Short (≤ 10 chars)`.
- **Expected Result**: 
  - Only `Buy` is shown.
  - `Clean the house` is hidden.

---

### Test Case 5: Filter Long Todos

- **Description**: Test filtering to show only long todos (> 10 characters).
- **Preconditions**: Todos: `Read`, `Finish the Vue workshop`.
- **Steps**:
  1. Select the filter option: `Long (> 10 chars)`.
- **Expected Result**: 
  - Only `Finish the Vue workshop` is shown.
