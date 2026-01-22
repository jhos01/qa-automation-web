import { expect } from '@playwright/test';

export class BookStorePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#searchBox');
    this.booksRows = page.locator('.rt-tbody .rt-tr-group');
    this.firstBookLink = this.booksRows.first().locator('a');
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/books');
  }

  async searchBook(keyword) {
    await this.searchBox.fill(keyword);
  }

  async verifySearchResultsContain(keyword) {
    await expect(this.booksRows).toContainText(keyword);
  }

  async openFirstBookFromResults() {
    const title = (await this.firstBookLink.textContent()).trim();
    await this.firstBookLink.click();
    return title;
  }
}
