import { expect } from '@playwright/test';

export class ModalsPage {
  constructor(page) {
    this.page = page;

    // ===== Locators =====
    this.smallModalButton = page.locator('#showSmallModal');
    this.modalTitle = page.locator('.modal-title');
    this.closeModalButton = page.locator('#closeSmallModal');
  }

  // ===== Actions =====
  async openSmallModal() {
    await this.smallModalButton.click();
  }

  async closeSmallModal() {
    await this.closeModalButton.click();
  }

  // ===== Assertions =====
  async assertModalOpened() {
    await expect(this.modalTitle).toHaveText('Small Modal');
  }

  async assertModalClosed() {
    await expect(this.modalTitle).toBeHidden();
  }
}
