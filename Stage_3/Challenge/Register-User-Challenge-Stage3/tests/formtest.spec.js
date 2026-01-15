import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';

const email = 'ninjaforTesting@qaxpert.com';
const firstName = 'Vicente';
const lastName = 'Lopez';
const address = 'Calle Automation N420, QAXpert City';
const phone = '3152938051';

/**
 * 🎯 Test Suite: Registro de Usuario
 * 
 * describe.configure: Configuración para este grupo de tests
 */
test.describe('Feature: Realizar un registro completo en el formulario', () => {
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
   * Test 1: Registro exitoso con datos válidos
   * 
   * Escenario: Usuario completa el formulario correctamente
   * Resultado esperado: Registro exitoso
   */

  test('Completar la informacion del formulario exitosamente', async ({ page }) => {

    await test.step('Ingresar al formulario de registro', async () => {
      await homePage.intoRegisterPage(email)
    });

    await test.step('Ingresar nombre y apellido', async () => {
      await registerPage.writerFullName(firstName, lastName);
    });

    await test.step('Ingresar Address', async () => {
      await registerPage.writerAddress(address);
    });

    await test.step('Ingresar datos de contacto', async () => {
      await registerPage.writerContactInfo(email, phone);
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

  });

});