import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Student Registration Form', () => {

  test('Completar y enviar registro de estudiante', async ({ page }) => {
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

    // Fecha de nacimiento (Datepicker)
    await page.click('#dateOfBirthInput');

    await page.selectOption('.react-datepicker__month-select', { label: 'May' });
    await page.selectOption('.react-datepicker__year-select', { value: '1990' });
    await page.click('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)');

    // Subjects
    await page.fill('#subjectsInput', 'Maths');
    await page.keyboard.press('Enter');

    await page.fill('#subjectsInput', 'Physics');
    await page.keyboard.press('Enter');

    // Hobbies
    const checkboxSports = page.locator('label[for="hobbies-checkbox-1"]'); // Sports
    await checkboxSports.click();
    await expect(checkboxSports).toBeChecked();
    const checkboxReading = page.locator('label[for="hobbies-checkbox-2"]'); // Reading
    await checkboxReading.click();
    await expect(checkboxReading).toBeChecked();
    //
    // Upload picture
    const filePath = path.resolve('fixtures/sample-image.jpg');
    await page.setInputFiles('#uploadPicture', filePath);

    // Current Address
    await page.fill('#currentAddress', '123 Main Street, CityXYZ');

    // Select State and City from custom dropdowns
    const stateArrowIcon = page.locator('.css-tlfecz-indicatorContainer').nth(1);
    await stateArrowIcon.click();
    const stateOptionSelected = page.locator('.css-1uccc91-singleValue').nth(0);
    await stateOptionSelected.click();


    const cityArrowIcon = page.locator('.css-tlfecz-indicatorContainer').nth(2);
    await cityArrowIcon.click();
    const cityOptionSelected = page.locator('.css-1uccc91-singleValue').nth(1);
    await cityOptionSelected.click();

    // Enviar formulario
    await page.click('#submit');

    // Validar modal de confirmación
    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();

    // Validar datos dentro del modal
    await expect(modal.locator('td:has-text("Carlos Lopez")')).toBeVisible();
    await expect(modal.locator('td:has-text("carlos@testmail.com")')).toBeVisible();
    await expect(modal.locator('td:has-text("9876543210")')).toBeVisible();
    await expect(modal.locator('td:has-text("15 May,1990")')).toBeVisible();
    await expect(modal.locator('td:has-text("Maths, Physics")')).toBeVisible();
    await expect(modal.locator('td:has-text("Sports, Reading")')).toBeVisible();
    await expect(modal.locator('td:has-text("NCR Noida")')).toBeVisible();

    // Cerrar modal
    await page.click('#closeLargeModal');
  });

});
