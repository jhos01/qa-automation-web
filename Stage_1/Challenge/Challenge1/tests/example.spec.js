// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Feature Go to Inputs page', () => {
  test('should navigate to Inputs page and verify header', async ({ page }) => {
    // Navigate to the home page

    await test.step('Dado que ingreso a la pagina Inputs', async () => {
      await page.goto('https://practice.expandtesting.com/inputs');
      
    })
    await test.step('Cuando hago click al elemento Input Display', async () => {
      await page.getByRole('button', { name: 'Display Inputs' }).click();
    })
    
    

  
  });
});

