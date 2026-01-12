import { test, expect } from '@playwright/test';
import path from 'path';
import { setTimeout } from 'timers';

test.describe('Student Registration Form', () => {

  test('Validate last-name field is editable', async ({ page }) => {
    await page.goto('/automation-practice-form');
    // Cerrar banners flotantes que bloquean campos
    await page.locator('#close-fixedban').click().catch(() => {});
    await expect(page.locator('#lastName')).toBeEditable();
    page.close();
    
  });  
});
