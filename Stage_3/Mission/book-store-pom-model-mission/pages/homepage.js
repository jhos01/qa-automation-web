
export class Homepage { 
  // Homepage page object model implementation
  constructor(page) {
    this.page = page        ;
    /* =========================
     Locators
     ========================== */
    this.elementsOption = page.getByRole('heading', { name: 'Elements' });
    this.formsOption = page.getByRole('heading', { name: 'Forms' });
    this.alertsOption = page.getByRole('heading', { name: 'Alerts' });
    this.interactionsOption = page.getByRole('heading', { name: 'Interactions' });
    this.bookStoreOption = page.getByRole('heading', { name: 'Book Store Application' });
  }
    /* =========================
     Actions
     ========================== */

  async navigateToElements() {
    await this.elementsOption.click();
  }

  async navigateToForms() {
    await this.formsOption.click();
  }

  async navigateToAlerts() {
    await this.alertsOption.click();
  }

  async navigateToInteractions() {
    await this.interactionsOption.click();
  }

  async navigateToBookStore() {
    await this.bookStoreOption.click();
  }


};