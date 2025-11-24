import { test, expect } from '@playwright/test';
test.describe('Feature: Validar localizadores en la pagina  otp-login', () => {

    test('Escenario: Validar que la pagina despliega el titulo apropipiado', async ({ page }) => {
        //Step 1: Abrir la pagina otp-login
        await test.step('Abrir la pagina otp-login', async () => {
            await page.goto('https://practice.expandtesting.com/otp-login');
        });
        // Step 2: Validar que la pagina despliega el titulo apropipiado
        await test.step('Localizar el titulo en la pagina', async () => {
            const otpLoginTitle = page.getByRole('heading', { name: 'OTP Login' });
            await expect(otpLoginTitle).toBeVisible();        
        })
        
    })
    
    
})
