import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Interact with Upload and Download', () => {
  test('should upload and download file', async ({ page, browser }) => {
    await page.goto('/upload-download');

    const filePath = path.resolve('fixtures/sample.txt');
    await page.setInputFiles('#uploadFile', filePath);
    await expect(page.locator('#uploadedFilePath')).toContainText('sample.txt');

    const [ download ] = await Promise.all([
      page.waitForEvent('download'),
      page.click('#downloadButton')
    ]);
    const downloadPath = path.resolve('downloads','sample-downloaded.txt');
    await download.saveAs(downloadPath);
    expect(downloadPath).not.toBeNull();
  });
});
