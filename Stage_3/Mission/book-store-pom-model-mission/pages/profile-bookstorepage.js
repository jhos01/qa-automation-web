import { expect } from '@playwright/test';

export class ProfileBookStorePage {
  constructor(page) {
    this.page = page;
    this.profileHeader = page.locator('.main-header');
    this.bookList = page.locator('.rt-tbody .rt-tr-group');
    this.bookTitleWrapper = page.locator('#title-wrapper');
    this.backButton = page.locator('#addNewRecordButton'); // context-sensitive
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/profile');
  }

  async verifyLoginSuccessful() {
    await expect(this.page).toHaveURL('https://demoqa.com/profile');
    await expect(this.profileHeader).toHaveText('Profile');
  }

  async verifyBookInList(bookTitle) {
    await expect(this.bookList).toContainText(bookTitle);
  }

  async verifyBookDetails(bookTitle) {
    await expect(this.bookTitleWrapper).toBeVisible();
    await expect(this.bookTitleWrapper).toContainText(bookTitle);
  }

  async returnToProfile() {
    await this.backButton.click().catch(() => {});
    await this.navigate();
  }
}
