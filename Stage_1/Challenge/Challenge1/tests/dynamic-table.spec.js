import { test, expect } from '@playwright/test';
test.describe('Feature: Validar los localizadores de la pagina dynamic-table', () => {
    test('Escenario: Validar que el user puede desplegar contenido de las siguientes paginas', async ({ page }) => {
        //Step 1: Abrir la pagina dynamic-table
        await test.step('Abrir la pagina dynamic-table', async () => {
            await page.goto('https://practice.expandtesting.com/dynamic-table');
        });
        // Step 2: Validar que el user puede ver la columna "Network" en la tabla
        await test.step('Localizar la columna "Network" en la tabla', async () => {
            const networkColumn = page.getByText('Network', { exact: true });
            await expect(networkColumn).toBeVisible();      
        })
    })

    
    
})
