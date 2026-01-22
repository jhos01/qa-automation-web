export class SortablePage {
  constructor(page) {

    this.page = page;
    /* =========================
       Locators
    ========================== */
    this.listItems = page.locator('#demo-tabpane-list .list-group-item');
  }
    /* =========================
       Actions
    ========================== */
  async dragAndDropFirstToLast() {
    const count = await this.listItems.count();
    await this.listItems.nth(0).dragTo(this.listItems.nth(count - 1));
  }
    /* =========================
       Assertions
    ========================== */
  async assertItemMoved() {
    const firstItemText = await this.listItems.nth(0).textContent();
    return firstItemText.trim() !== "One"; // Cambió posición
  }
}
