import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Validate empty fields are highlighted in red', () => {
    test('Validate Lastname is marked in red and failure', async ({ page }) => {
        await page.goto('/automation-practice-form');
        // Cerrar banners flotantes que bloquean campos
        await page.locator('#close-fixedban').click().catch(() => {});
        
        await page.locator('#firstName', 'Carlos');
        await page.locator('#lastName', ''); // Leave Lastname empty to test
        await page.locator('#submit').click();

        // Validate that the last name field is highlighted in red
        await expect(page.locator('#lastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');

  });

    test('Validate email is marked as failure', async ({ page }) => {
        await page.goto('/automation-practice-form');
        // Cerrar banners flotantes que bloquean campos
        await page.locator('#close-fixedban').click().catch(() => {});
        await page.locator('#firstName', 'Carlos');
        await page.locator('#lastName', 'Lopez');
        await page.locator('#userEmail', ''); // Leave Email empty to test
        await page.locator('#submit').click();

    // Validate that the email field is highlighted in red
        await expect(page.locator('#userEmail'),'Email field was not marked as empty/invalid').toHaveCSS('border-color', 'rgb(220, 53, 69)');

  });
    test('Validate mobile number is marked as failure', async ({ page }) => {
        await page.goto('/automation-practice-form');
        // Cerrar banners flotantes que bloquean campos
        await page.locator('#close-fixedban').click().catch(() => {});
        await page.locator('#firstName', 'Carlos');
        await page.locator('#lastName', 'Lopez');
        await page.locator('#userNumber', ''); // Leave Mobile number empty to test
        await page.locator('#submit').click();
        // Validate that the mobile number field is highlighted in red
        await expect(page.locator('#userNumber'),'Mobile number field was not marked as empty/invalid').toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Validate all empty fields are highlighted in red', async ({ page }) => {
        await page.goto('/automation-practice-form');
        // Cerrar banners flotantes que bloquean campos
        await page.locator('#close-fixedban').click().catch(() => {});
        await page.locator('#firstName', '');
        await page.locator('#lastName', '');
        await page.locator('#userEmail', '');
        await page.locator('#userNumber', '');
        await page.locator('#submit').click();
      
      // Validate that all empty fields are highlighted in red
      await expect(page.locator('#firstName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect(page.locator('#lastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect(page.locator('#userEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      await expect(page.locator('#userNumber')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })


});
