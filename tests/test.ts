import { expect, test } from '@playwright/test';

test('index page has expected header', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Tucker Gordon')).toBeVisible();
});
