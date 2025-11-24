import { test } from '@playwright/test';
import RegisterPage from '../pages/RegisterPage.js';
import users from '../data/users.json' assert { type: 'json' };

test('Registrar un nuevo usuario', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    // 1. Navegar al formulario de registro
    await registerPage.navigate();

    // 2. Completar formulario con el usuario validUser
    await registerPage.register(users.validUser);

    // 3. Validar resultado
    await registerPage.expectSuccess();
});
