export class DroppablePage {
  constructor(page) {
    this.page = page;
    /* =========================
       Locators
    ========================== */
    this.draggable = page.locator('#draggable');
    this.droppable = page.locator('#droppable');
  }
    /* =========================
       Actions
    ========================== */
  async performDragAndDrop() {
    await this.draggable.dragTo(this.droppable);
  }
    /* =========================
       Assertions
    ========================== */

  async assertDropped() {
    await expect(this.droppable).toContainText('Dropped!');
  }
}
