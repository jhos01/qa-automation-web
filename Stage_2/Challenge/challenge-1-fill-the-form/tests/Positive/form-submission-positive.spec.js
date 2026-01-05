import { test, expect } from '@playwright/test';

const email = 'ninjaforTesting@qaxpert.com';
const firstName = 'Vicente';
const lastName = 'Lopez';
const address = 'Calle Automation N420, QAXpert City';
const phone = '3152938051';

test.describe('Feature: Realizar un registro completo en el formulario', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Index.html');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Completar la informacion del formulario exitosamente', async ({ page }) => {

    const formGroup = page.locator('.form-group');

    await test.step('Ingresar al formulario de registro', async () => {
      await page.locator('#email').fill(email);
      await page.locator('#enterimg').click();
      await page.waitForURL('https://demo.automationtesting.in/Register.html');
    });

    await test.step('Ingresar nombre y apellido', async () => {
      const fullNameSection = formGroup.filter({ hasText: 'Full Name' });
      await fullNameSection.getByRole('textbox').nth(0).fill(firstName);
      await fullNameSection.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    });

    await test.step('Ingresar Address', async () => {
      const addressSection = formGroup.filter({ hasText: 'Address' });
      await addressSection.locator('textarea').fill(address);
    });

    await test.step('Ingresar Email', async () => {
      await page.locator('.form-group')
        .filter({ has: page.locator('#eid') })
        .getByRole('textbox')
        .fill(email);
    });

    await test.step('Ingresar Teléfono', async () => {
      await formGroup.filter({ hasText: 'Phone' })
        .getByRole('textbox')
        .fill(phone);
    });

    await test.step('Seleccionar género', async () => {
      await page.locator('input[value="Male"]').check();
    });

    await test.step('Seleccionar hobbies', async () => {
      const hobbiesSection = formGroup.filter({ hasText: 'Hobbies' });
      await hobbiesSection.locator('input[type="checkbox"]').last().check();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
      await page.locator('#msdd').click();
      await page.getByText('English', { exact: true }).click();
      await page.getByText('Spanish', { exact: true }).click();
      await page.locator('body').click();
    });

    await test.step('Seleccionar Skills', async () => {
      await page.locator('#Skills').selectOption('Ruby');
    });

    await test.step('Seleccionar País', async () => {
      // await page.locator('#countries').selectOption('Argentina');
    });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        await page.getByLabel('', { exact: true }).click();
        await page.locator('input[type="search"]').fill('a');
        await page.getByRole('treeitem', { name: 'Denmark' }).click();
     
    });

    await test.step('Seleccionar fecha de nacimiento', async () => {
      const dateSection = formGroup.filter({ hasText: 'Date of Birth' });
      await dateSection.locator('#yearbox').selectOption('2000');
      await dateSection.locator('select[ng-model="monthbox"]').selectOption('May');
      await dateSection.locator('#daybox').selectOption('1');
    });

    await test.step('Ingresar Password', async () => {
      await page.locator('#firstpassword').fill('Qaxpert123*');
      await page.locator('#secondpassword').fill('Qaxpert123*');
    });

    await test.step('Enviar formulario', async () => {
      await page.locator('#submitbtn').click();
    });

  });

});