import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Validate form Title', () => {

  test('Validate form title', async ({ page }) => {
    await page.goto('/automation-practice-form');
    const formTitle = page.locator('img[src="/images/Toolsqa.jpg"]');
    await expect(formTitle).toBeVisible();

  });

});
