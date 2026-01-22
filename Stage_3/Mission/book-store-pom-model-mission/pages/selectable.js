export class SelectablePage {
  constructor(page) {
    this.page = page;
    /* =========================
       Locators
    ========================== */
    this.firstItem = page.locator('#verticalListContainer .list-group-item').first();
  }
    /* =========================
       Actions
    ========================== */
  async selectFirstItem() {
    await this.firstItem.click();
  }

  /* =========================
       Assertions
    ========================== */
  async assertItemIsSelected() {
    await expect(this.firstItem).toHaveClass(/active/);
  }
}
