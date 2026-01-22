export class ResizablePage {
  constructor(page) {
    /* =========================
       Locators
    ========================== */
    this.page = page;
    this.box = page.locator('#resizableBoxWithRestriction');
    this.handle = page.locator('#resizableBoxWithRestriction .react-resizable-handle');
  }
    /* =========================
       Actions
    ========================== */
  async resizeBox() {
    await this.handle.hover();
    await this.page.mouse.down();
    await this.page.mouse.move(100, 100); // arrastra
    await this.page.mouse.up();
  }
    /* =========================
       Assertions
    ========================== */
  async assertBoxResized() {
    const boxSize = await this.box.boundingBox();
    expect(boxSize.width).toBeGreaterThan(200);
    expect(boxSize.height).toBeGreaterThan(200);
  }
}
