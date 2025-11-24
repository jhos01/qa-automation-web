import { test, expect } from '@playwright/test';
test.describe('Feature: Validar localizadores en la pagina dynamic pagination', () => {
    test('Escenario: Validar el pagination button', async ({ page }) => {
        //Step 1: Abrir la pagina dynamic-pagination
        await test.step('Abrir la pagina dynamic-pagination', async () => {
            await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');
        });
        // Step 2: Localizar pagination button 2 en la pagina
        await test.step('Hacer click en el pagination button 1 de la pagina', async () => {
            const paginationButton = page.getByRole('link', { name: '2' });
            await expect(paginationButton).toBeVisible();
            await paginationButton.click();
        })

        // Step 3: Validar que se muestra las siguientes 3 filas de datos correspondientes a la pagina 1
        await test.step('Validar que se muestra las siguientes 3 filas de datos correspondientes a la pagina 2', async () => {
            const showingMessage = page.getByText('Showing 4 to 6 of 10 entries', { exact: true });
            await expect(showingMessage).toBeVisible();
        })
        
    })
    

    
});
