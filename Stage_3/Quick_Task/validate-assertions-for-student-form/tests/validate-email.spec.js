import { test, expect } from '@playwright/test';
import path from 'path';
import { setTimeout } from 'timers';

test.describe('Student Registration Form', () => {

  test('Validate email format', async ({ page }) => {
    await page.goto('/automation-practice-form');
    
    // Cerrar banners flotantes que bloquean campos
    await page.locator('#close-fixedban').click().catch(() => {});

    // Llenar campos básicos
    await page.fill('#firstName', 'Carlos');
    await page.fill('#lastName', 'Lopez');
    await page.fill('#userEmail', 'carlos@testmail.com');

    // Seleccionar género
    await page.click('label[for="gender-radio-1"]'); // Male

    // Número de móvil
    await page.fill('#userNumber', '9876543210');
    
    //Localizar submit button
    const submitButton = page.locator('#submit');
    submitButton.click();

    // Validar modal de confirmación
    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();

    // Validar email es valido dentro del modal
    await expect(modal.locator('td:has-text("carlos@testmail.com")')).toContainText('@')
    await expect(modal.locator('td:has-text("carlos@testmail.com")')).toContainText('.com')
    page.close();


  });

});
