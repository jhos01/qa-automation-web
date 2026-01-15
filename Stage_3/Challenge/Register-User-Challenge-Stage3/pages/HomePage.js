import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
    this.txtEmail = page.locator('#email')
    this.btnEnter = page.locator('#enterimg')
  }

  async intoRegisterPage(email) {
    await this.writer(this.txtEmail, email);
    await this.doClick(this.btnEnter);
  }

  /* =========================
       Assertions HomePage
    ========================== */

    async isVisibleEmail() {
      return await this.isVisible(this.txtEmail);
    }

    async isVisibleEnterButton() {
      return await this.isVisible(this.btnEnter);
    }

  
}