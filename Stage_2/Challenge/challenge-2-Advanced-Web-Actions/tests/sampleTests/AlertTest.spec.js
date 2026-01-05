import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../../utilsforSampleTests/menuUtils';

test.describe('Validación popup', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Interactuar con Alerts', async ({ page }) => {
    // Hacer hover en el menú SwitchTo
    await openMenuAndSelect(page, 'SwitchTo', 'Alerts');
    // Escuchar el alert ANTES del click
    page.on('dialog', dialog => dialog.accept());
    const alertEvent = page.waitForEvent('dialog');
    await page.getByRole('button', { name: 'click the button to display' }).click();
    const alert = await alertEvent;
    console.log('Texto del alert:', alert.message());
    console.log('Menú SwitchTo abierto y opción Alerts seleccionada correctamente.');
  });
});