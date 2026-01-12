import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Validate form', () => {

  test('Validate form is visible', async ({ page }) => {
    await page.goto('/automation-practice-form');
    const form = page.locator('.col-12 mt-4 col-md-6');
    expect(form).not.toBeNull();
    page.close();

  });

});
