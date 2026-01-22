export class BrowserWindowsPage {
  constructor(page) {
    this.page = page;

    // ===== Locators =====
    this.newTabButton = page.locator('#tabButton');
  }

  // ===== Actions =====
  async openNewTab() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.newTabButton.click()
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  // ===== Assertions =====
  async assertNewTabOpened(newPage) {
    const heading = newPage.locator('h1');
    await heading.waitFor();
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toHaveText('This is a sample page');
  }
}
