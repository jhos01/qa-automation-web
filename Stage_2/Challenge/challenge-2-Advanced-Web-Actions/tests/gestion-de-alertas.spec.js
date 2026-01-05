import { test, expect, beforeEach, afterEach } from '@playwright/test';

test.describe('Feature: Validar alertas de 1 pagina web', () => {
    beforeEach(async ({ page }) => {
        // Ir a la pagina web
        await page.goto('https://demo.automationtesting.in/Alerts.html');
        
    });

    afterEach(async ({ page }) => {
        // Cerrar la pagina web
        await page.close();
    });

    test('Scenario: Validar 1 alerta simple', async ({ page }) => {
        // Hacer click en el boton que genera la alerta        
        await page.getByRole('button', { name: 'click the button to display an alert box' }).click();
        // Validar que la alerta se muestra
        page.once('dialog', dialog => {
            console.log('Dialog message Type:', dialog.type, 'message:', dialog.message());
        }); 

    });

    test('Scenario: Validar 1 alerta de confirmacion y aceptar(OK)', async ({ page }) => {
        await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
        page.once('dialog', async  dialog => {
            console.log('Dialog message Type:', dialog.type, 'message:', dialog.message());
             await dialog.accept();
        });
        await page.getByRole('button', { name: 'click the button to display a confirm box' }).click();
        // Esperar un momento para que el mensaje se actualice
        await page.waitForTimeout(500); 
        await expect(page.getByText('You Pressed Ok')).toBeVisible();
    });

    test('Scenario: Validar 1 alerta de confirmacion y cancelar(Cancel)', async ({ page }) => {   
        await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
        page.once('dialog', async dialog => {
            console.log('Dialog message Type:', dialog.type, 'message:', dialog.message());
            await dialog.dismiss();
        });
        await page.getByRole('button', { name: 'click the button to display a confirm box' }).click();
        // Esperar un momento para que el mensaje se actualice
        await page.waitForTimeout(500); 
        await expect(page.getByText('You Pressed Cancel')).toBeVisible();
    });

    test('Scenario: Validar 1 alerta de prompt', async ({ page }) => {
        // Hacer click en la pestaña de alerta de prompt
        await page.getByRole('link', { name: 'Alert with Textbox' }).click();
        const inputText = 'Texto de Prueba';
        page.once('dialog', async dialog => {
            console.log('Dialog message Type:', dialog.type, 'message:', dialog.message());
            await dialog.accept(inputText);
        });
        await page.getByRole('button', { name: 'click the button to demonstrate the prompt box' }).click();
        await expect(page.getByText('Hello ' + inputText + ' How are you today')).toBeVisible();
    });

});