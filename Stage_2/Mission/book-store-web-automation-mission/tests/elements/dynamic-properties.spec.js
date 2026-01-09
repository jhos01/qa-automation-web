import { test, expect } from '@playwright/test';
import { exec } from 'node:child_process';

test.describe('Dynamic Properties', () => {
  test('Wait for buttons to become enabled/visible', async ({ page }) => {
    await page.goto('/dynamic-properties');
    await page.waitForTimeout(5500); // Small wait to ensure page loads
    await expect(page.locator('#enableAfter')).toBeEnabled();
    await expect(page.locator('#colorChange')).toBeEnabled({ timeout: 6000 });
    await expect(page.locator('#colorChange')).toHaveClass(/text-danger/);

    await expect(page.locator('#visibleAfter')).toBeVisible({ timeout: 6000 });
  });
});
