import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Validate Student Registration Form', () => {

  test('Validate page title', async ({ page }) => {
    await test.step('Go to the page', async () => {
      await page.goto('/automation-practice-form');
    })

    await test.step('Locate page title and validate the text', async () => {
      const title = page.locator('img[src="/images/Toolsqa.jpg"]');
      await expect(title).toBeVisible();
    });

  });
    
    
    
  });
