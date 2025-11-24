import {test, expect} from '@playwright/test';

test.describe('Feature: Validar localizadores en la pagina Inputs', () => {

    test('Escenario: Validar que el user puede ver Display Inputs fields en la pagina', async ({ page }) => {
        //Step 1: Abrir la pagina Inputs 
        await test.step('Abrir la pagina Inputs', async () => {
            await page.goto('https://practice.expandtesting.com/inputs');
        });

        // Step 2: Validar que el user puede ver Display Inputs fields en la pagina inputs
        await test.step('"Localizar Display Inputs fields', async () => {
            const inputNumber = page.getByRole('spinbutton', { name: 'Input: Number' });
            const inputText = page.getByRole('textbox', { name: 'Input: Text' });
            const inputPassword = page.getByRole('textbox', { name: 'Input: Password' });
            const inputDate = page.getByLabel('Input: Date');
            await expect(inputNumber).toBeVisible();        
            await expect(inputText).toBeVisible();    
            await expect(inputPassword).toBeVisible();
            await expect(inputDate).toBeVisible();

        })

    })

    test('Escenario: Validar que el boton cleear inputs remueve 4 fields agregados en la pantalla', async ({ page }) => {

        //Step 1: Abrir la pagina Inputs
        await test.step('Abrir la pagina Inputs', async () => {
            await page.goto('https://practice.expandtesting.com/inputs');
        });

        //Step 2: Seleccionar button Display Inputs para agregar 4 fields en la pantalla
        await test.step('Localizar y dar click en el boton Display Inputs', async () => {
            const displayInputsButton = page.getByRole('button', { name: 'Display Inputs' });
            await displayInputsButton.click();

        //Step 3: Seleccionar button Clear Inputs
        await test.step('Localizar el boton Clear Inputs', async () => {
            const clearInputsButton = page.getByRole('button', { name: 'Clear Inputs' });
            await expect(clearInputsButton).toBeVisible();
            await clearInputsButton.click();
        });    

        // Step 2: Validar que el boton clear inputs remueve 4 fields agregados en la pantalla
        await test.step('Localizar y dar click en el boton Clear Inputs', async () => {
            const outPutNumber = page.getByRole('strong');
            const outPutText = page.getByRole('strong');
            const outPutPassword = page.getByRole('strong');
            await expect(outPutNumber).not.toBeVisible();        
            await expect(outPutText).not.toBeVisible();    
            await expect(outPutPassword).not.toBeVisible();
        });

    })
    })

test('Escenario: Home link direcciona a Home page', async ({ page }) => {
    //Step 1: Abrir la pagina Inputs
    await test.step('Abrir la pagina Inputs', async () => {
        await page.goto('https://practice.expandtesting.com/inputs');
    });
    // Step 2: Validar que Home link direcciona a Home page
    await test.step('Localizar y dar click en el link Home', async () => {
        const homeLink = page.getByRole('link', { name: 'Home' });
        await homeLink.click();
        await expect(page).toHaveURL('https://practice.expandtesting.com');
    });
    
})


});
