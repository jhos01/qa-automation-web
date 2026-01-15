export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async doClick(locator) { 
    console.log('Click en:', await locator.toString());
    await locator.click();
  }

  async writer(locator, value) {
    console.log('Escribir en:', await locator.toString(), 'el valor:', value);
    await locator.fill(value);
  }

  async getTitle() {
    return this.page.title();
  }

  /* =========================
       Assertions BasePage
    ========================== */

  async isVisible(locator) {
    return await locator.isVisible();
  }

 }