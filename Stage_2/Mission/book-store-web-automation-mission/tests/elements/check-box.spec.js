import { test, expect } from '@playwright/test';

test.describe('Interact with check Box elements', () => {
  test('Select and validate checkboxes', async ({ page }) => {
    await test.step('Go the the page', async () => {
      await page.goto('/checkbox');
    })
    await test.step('Select the Home checkbox', async () => {
      const homeCheckbox = page.locator('.rct-checkbox').first();
      await homeCheckbox.check();
      await expect(homeCheckbox).toBeChecked();
   });
    await test.step('Validate that all child checkboxes are selected', async () => {
      const arrowIcon = page.locator('.rct-icon.rct-icon-expand-close');
      await arrowIcon.click();
      const childCheckboxes = page.locator('.rct-checkbox');
      const count = await childCheckboxes.count();
      for (let i = 0; i < count; i++) {
        await expect(childCheckboxes.nth(i)).toBeChecked();
      }
    });
    
    // Select Desktop and Downloads
    //await page.click('label[for="tree-node-desktop"]');
    //await page.click('label[for="tree-node-downloads"]');

    // Validate partial selection state
    //await expect(page.locator('label[for="tree-node-home"] .rct-icon')).toHaveClass(/rct-icon-half-check/);

  });
  test('Select partially Desktop and Downloads', async ({ page }) => {
    await test.step('Go to the page', async () => {
      await page.goto('/checkbox');
    });
    await test.step('Unselect Home', async () => {
      const homeCheckbox = page.locator('.rct-checkbox').first();
      await homeCheckbox.uncheck();
      await expect(homeCheckbox).not.toBeChecked();
    })
    
    await test.step('Select Desktop and Downloads', async () => {
      const arrowIcon = page.locator('.rct-icon.rct-icon-expand-close');
      await arrowIcon.click();
      const desktopCheckbox = page.locator('.rct-checkbox').nth(1); // Desktop
      await desktopCheckbox.check();
      await expect(desktopCheckbox).toBeChecked();
      const downloadsCheckbox = page.locator('.rct-checkbox').nth(3); // Downloads
      await downloadsCheckbox.check();
      await expect(downloadsCheckbox).toBeChecked();
    });
    
  })

}); 