export class DragabblePage {
  constructor(page) {
    this.page = page;
    /* =========================
       Locators
    ========================== */
    this.draggable = page.locator('#dragBox');
  }
    /* =========================
       Actions
    ========================== */

  async dragBox() {
    const box = await this.draggable.boundingBox();
    await this.page.mouse.move(box.x + 5, box.y + 5);
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + 100, box.y + 100);
    await this.page.mouse.up();
  }
    /* =========================
       Assertions
    ========================== */

  async assertBoxMoved() {
    const newBox = await this.draggable.boundingBox();
    expect(newBox.x).toBeGreaterThan(0);
    expect(newBox.y).toBeGreaterThan(0);
  }
}
