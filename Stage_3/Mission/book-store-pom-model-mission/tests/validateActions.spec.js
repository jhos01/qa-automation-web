import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homepage';
import { ElementsPage } from '../pages/elements';
import { BrowserWindowsPage } from '../pages/browser-windows';
import { AlertsPage } from '../pages/alerts';
import { ModalsPage } from '../pages/modals';

test.describe('Feature: Validar acciones principales en 3 páginas', () => {
  let homepage;
  let elementsPage;
  let browserWindowsPage;
  let alertsPage;
  let modalsPage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    elementsPage = new ElementsPage(page);
    browserWindowsPage = new BrowserWindowsPage(page);
    alertsPage = new AlertsPage(page);
    modalsPage = new ModalsPage(page);
    await page.goto('https://demoqa.com');
  });

  test('Abrir nueva pestaña desde Browser Windows', async ({ page }) => {
    await test.step('Navegar a Alerts, Frame & Windows > Browser Windows', async () => {
      await homepage.navigateToAlerts(); // ← ya está creado en tu homepage.js
      await page.click('span:text("Browser Windows")');
    });

    await test.step('Hacer clic en "New Tab"', async () => {
      const newPage = await browserWindowsPage.openNewTab();
      await browserWindowsPage.assertNewTabOpened(newPage);
    });
  });

  test('Disparar y aceptar alerta', async ({ page }) => {
    await test.step('Navegar a Alerts, Frame & Windows > Alerts', async () => {
      await homepage.navigateToAlerts();
      await page.click('span:text("Alerts")');
    });

    await test.step('Disparar alerta y validarla', async () => {
      await alertsPage.assertAlertIsHandled(); // escuchar el diálogo
      await alertsPage.triggerAlert();
    });
  });

  test('Abrir y cerrar modal en Modals', async ({ page }) => {
    await test.step('Navegar a Alerts, Frame & Windows > Modal Dialogs', async () => {
      await homepage.navigateToAlerts();
      await page.click('span:text("Modal Dialogs")');
    });

    await test.step('Abrir y cerrar el modal pequeño', async () => {
      await modalsPage.openSmallModal();
      await modalsPage.assertModalOpened();
      await modalsPage.closeSmallModal();
      await modalsPage.assertModalClosed();
    });
  });
});
