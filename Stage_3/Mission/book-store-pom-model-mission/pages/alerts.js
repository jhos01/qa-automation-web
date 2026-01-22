import { expect } from '@playwright/test';

export class AlertsPage {
  constructor(page) {
    this.page = page;

    // ===== Locators =====
    this.alertButton = page.locator('#alertButton');
  }

  // ===== Actions =====
  async triggerAlert() {
    await this.alertButton.click();
  }

  // ===== Assertions =====
  async assertAlertIsHandled() {
    this.page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('You clicked a button');
      await dialog.accept();
    });
  }
}
