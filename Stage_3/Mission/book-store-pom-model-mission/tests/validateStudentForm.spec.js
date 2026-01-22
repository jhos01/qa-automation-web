import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homepage';
import { ElementsPage } from '../pages/elements';
import { StudentFormPage } from '../pages/student-form';

test.describe('Feature: Forms | Validar envío exitoso del formulario de registro de estudiante', () => {
  let homepage;
  let elementsPage;
  let studentFormPage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    elementsPage = new ElementsPage(page);
    studentFormPage = new StudentFormPage(page);

    await page.goto('https://demoqa.com');
    await homepage.navigateToForms();
    await studentFormPage.navigate();
  });

  test('Completar y validar el formulario de estudiante', async () => {
    const formData = {
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan.perez@test.com',
      gender: 1,
      mobile: '1234567890',
      dob: '24 Jan 2000',
      subjects: ['Maths', 'English'],
      hobbies: [1, 2],
      picturePath: 'fixtures/sample-downloaded.txt',
      address: 'Calle Falsa 123',
      state: 'NCR',
      city: 'Delhi',
    };

    await test.step('Completar formulario', async () => {
      await studentFormPage.fillStudentForm(formData);
    });

    await test.step('Verificar modal de confirmación', async () => {
      await studentFormPage.verifyFormSubmitted();
    });

    await test.step('Verificar contenido del formulario', async () => {
      await studentFormPage.verifySubmittedField('Student Name', `${formData.firstName} ${formData.lastName}`);
      await studentFormPage.verifySubmittedField('Student Email', formData.email);
      await studentFormPage.verifySubmittedField('Gender', 'Male');
      await studentFormPage.verifySubmittedField('Mobile', formData.mobile);
    });
  });
});
