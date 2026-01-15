import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';


/**
 * 🎯 Test Suite: Registro de Usuario
 * 
 * describe.configure: Configuración para este grupo de tests
 */
test.describe('Validar Registro de Usuario', () => {
 // ========================================
  // Instanciación de la página de registro 
  // ========================================
    let registerPage;
    let homePage;
   /**
   * 🎬 Hook: Before Each
   * Se ejecuta ANTES de cada test
   * Útil para preparar el estado inicial
   */
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    await homePage.navigate('/Index.html');
  });

  /**
   * 🧹 Hook: After Each
   * Se ejecuta DESPUÉS de cada test
   * Útil para limpieza
   */

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  // ========================================
  // ✅ TESTS DE CASOS POSITIVOS (Happy Path)
  // ========================================

  /**
   * Test 1: Registro exitoso completando todos los campos requeridos
   * 
   * Escenario: Usuario completa el formulario correctamente
   * Resultado esperado: Registro exitoso
   */

  test('Validar que el usuario puede enviar satisfactoriamente el formulario llenado correctamente', async ({ page }) => {
    const user = {
        email: 'usuario3@test.com',
        firstName: 'Carlos',
        lastName: '',
        address: 'Calle 789',
        phone: '3000000003',
        password: 'Valid123!',
        confirmPassword: 'Valid123!'
    }
    await test.step('Ingresar al formulario de registro', async () => {
      await homePage.intoRegisterPage(user.email)
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await registerPage.writerFullName(user.firstName, user.lastName);
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(user.address);
    });

    await test.step('Ingresar datos de contacto', async () => {
      await registerPage.writerContactInfo(user.email, user.phone);
    });

    await test.step('Seleccionar género', async () => {
       await registerPage.selectGenderMale();
    });

    await test.step('Seleccionar hobbies', async () => {
       await  registerPage.selectLastHobby();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
        //  Completar esta acción
    });

    await test.step('Seleccionar Skills', async () => {
        //  Completar esta acción
    });
    await test.step('Seleccionar País', async () => {
        //  Completar esta acción
    });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        //  Completar esta acción
    });
    await test.step('Seleccionar fecha de nacimiento', async () => {
        //  Completar esta acción
    });
    await test.step('Ingresar Password', async () => {
        //  Completar esta acción
    });

    await test.step('Enviar formulario', async () => {
         //  Completar esta acción
    });

    await test.step('Verificar que el formulario fue enviado exitosamente', async () => {
        const isSubmitted = await registerPage.formIsSubmitted();
        test.expect(isSubmitted).toBeTruthy();
    });

  });
  test('Validar que el usuario no puede enviar el formulario con invalid Password Confirmation', async ({ page }) => {
    const user = {
        email: 'usuario3@test.com',
        firstName: 'Carlos',
        lastName: '',
        address: 'Calle 789',
        phone: '3000000003',
        password: 'Valid123!',
        confirmPassword: 'InvalidPassword123!'
    }

    await test.step('Ingresar al formulario de registro', async () => {
      await homePage.intoRegisterPage(user.email)
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await registerPage.writerFullName(user.firstName, user.lastName);
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(user.address);
    });

    await test.step('Ingresar datos de contacto', async () => {
      await registerPage.writerContactInfo(user.email, user.phone);
    });

    await test.step('Seleccionar género', async () => {
       await registerPage.selectGenderMale();
    });

    await test.step('Seleccionar hobbies', async () => {
       await  registerPage.selectLastHobby();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
        //  Completar esta acción
    });

    await test.step('Seleccionar Skills', async () => {
        //  Completar esta acción
    });
    await test.step('Seleccionar País', async () => {
        //  Completar esta acción
    });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        //  Completar esta acción
    });
    await test.step('Seleccionar fecha de nacimiento', async () => {
        //  Completar esta acción
    });
    await test.step('Ingresar Password', async () => {
        //  Completar esta acción
    });

    await test.step('Enviar formulario', async () => {
         //  Completar esta acción
    });

    await test.step('Verificar que las contraseñas no coinciden', async () => {
        const passwordsMatch = await registerPage.passwordsMatch();
        test.expect(passwordsMatch).toBeFalsy();
    });

 });

 test('Validar que el usuario no puede enviar el formulario con campos obligatorios vacios como Last Name', async ({ page }) => {
    const user = {
        email: 'usuario3@test.com',
        firstName: 'Carlos',
        lastName: '',
        address: 'Calle 789',
        phone: '3000000003',
        password: 'Valid123!',
        confirmPassword: 'Valid123!'
    }


    await test.step('Ingresar al formulario de registro', async () => {
    await homePage.intoRegisterPage(user.email)
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await registerPage.writerFullName(user.firstName, user.lastName);
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(user.address);
    });

    await test.step('Ingresar datos de contacto', async () => {
      await registerPage.writerContactInfo(user.email, user.phone);
    });

    await test.step('Seleccionar género', async () => {
       await registerPage.selectGenderMale();
    });

    await test.step('Seleccionar hobbies', async () => {
       await  registerPage.selectLastHobby();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
        //  Completar esta acción
    });

    await test.step('Seleccionar Skills', async () => {
        //  Completar esta acción
    });
    await test.step('Seleccionar País', async () => {
        //  Completar esta acción
    });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        //  Completar esta acción
    });
    await test.step('Seleccionar fecha de nacimiento', async () => {
        //  Completar esta acción
    });
    await test.step('Ingresar Password', async () => {
        //  Completar esta acción
    });

    await test.step('Enviar formulario', async () => {
         //  Completar esta acción
    });
    
 })
 test('Validar que el usuario no puede enviar el formulario vacio', async ({ page }) => {
    const user = {
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }
    await test.step('Ingresar al formulario de registro', async () => {
    await homePage.intoRegisterPage(user.email)
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await registerPage.writerFullName(user.firstName, user.lastName);
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(user.address);
    });

    await test.step('Ingresar datos de contacto', async () => {
      await registerPage.writerContactInfo(user.email, user.phone);
    });

    await test.step('Seleccionar género', async () => {
       await registerPage.selectGenderMale();
    });

    await test.step('Seleccionar hobbies', async () => {
       await  registerPage.selectLastHobby();
    });

    await test.step('Seleccionar lenguaje(s)', async () => {
        //  Completar esta acción
    });

    await test.step('Seleccionar Skills', async () => {
        //  Completar esta acción
    });
    await test.step('Seleccionar País', async () => {
        //  Completar esta acción
    });

    await test.step('Seleccionar País (buscador avanzado)', async () => {
        //  Completar esta acción
    });
    await test.step('Seleccionar fecha de nacimiento', async () => {
        //  Completar esta acción
    });
    await test.step('Ingresar Password', async () => {
        //  Completar esta acción
    });

    await test.step('Enviar formulario', async () => {
         //  Completar esta acción
    });

    await test.step('Verificar que el botón de submit no es visible', async () => {
        const isSubmitVisible = await registerPage.isSubmitButtonNotVisible();
        test.expect(isSubmitVisible).toBeFalsy();
    });
  });
});