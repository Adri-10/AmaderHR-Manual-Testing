import { test, expect } from '@playwright/test';

test.describe('AmaderHR smoke checks', () => {
  test('homepage responds and has a title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });

  test('login form has username and password controls', async ({ page }) => {
    await page.goto('/login');

    await expect(page.getByRole('textbox').first()).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
  });
});
