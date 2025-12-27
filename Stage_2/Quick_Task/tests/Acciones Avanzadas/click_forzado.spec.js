import {test,expect} from '@playwright/test';

test.describe('Feature: Validar la accion click forzado en una pagina web', () => {
    test('Escenario: Ejecutar click forzado en 1 elemento web', async ({ page }) => {
        await page.goto('https://bonigarcia.dev/selenium-webdriver-java/get-user-media.html');
        const fieldbox = page.getByRole('button', { name: 'Start' });
        // Realizar click forzado en el botón "Permitir"
        await test.step('Hacer click forzado', async () => {
            await fieldbox.click({ force: true });
            
        })
        
        
    })
    





});