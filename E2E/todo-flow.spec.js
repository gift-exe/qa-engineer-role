import { test, expect } from '@playwright/test'

test.describe('Todo App E2E Flow', () => {
  test('Full flow: login, add/delete todos, logout', async ({ page }) => {
    await page.goto('http://localhost:5173/login')

    // Login
    await page.fill('input[name="username"]', 'testuser')
    await page.fill('input[name="password"]', 'password123')
    await page.click('button[type="submit"]')

    // Confirm navigation to main todo page
    await expect(page).toHaveURL(/\/todos/)

    // Add 3 todos
    const todos = ['Buy milk', 'Call mom', 'Read book']
    for (const todo of todos) {
      await page.fill('input[placeholder="Add a todo"]', todo)
      await page.press('input[placeholder="Add a todo"]', 'Enter')
    }

    // Assert all 3 appear
    for (const todo of todos) {
      await expect(page.locator('li')).toContainText(todo)
    }

    // Delete one todo (e.g. "Call mom")
    const deleteButton = page.locator('li', { hasText: 'Call mom' }).locator('button')
    await deleteButton.click()

    // Ensure it's gone
    await expect(page.locator('li')).not.toContainText('Call mom')

    // Check filters still work (e.g., "All", "Short", "Long")
    await page.selectOption('select', 'short')
    await expect(page.locator('li')).toHaveCount(2)

    // Logout
    await page.click('button:has-text("Logout")')
    await expect(page).toHaveURL(/\/login/)
  })
})
