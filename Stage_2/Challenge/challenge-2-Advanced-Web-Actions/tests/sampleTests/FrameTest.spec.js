import { test, expect } from '@playwright/test';
import { openMenuAndSelect } from '../../utilsforSampleTests/menuUtils';

test.describe('Validación frame', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Interactura con frames', async ({ page }) => {
    await openMenuAndSelect(page, 'SwitchTo', 'Frames');
    const singleFrame = page.frameLocator('#singleframe');
    await singleFrame.getByRole('textbox').fill('Hola desde QAXpert');
    console.log('Frame accedido e input llenado correctamente.');
  });
});