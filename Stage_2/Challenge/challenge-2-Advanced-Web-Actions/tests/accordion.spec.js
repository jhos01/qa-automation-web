import { test, expect } from '@playwright/test';
test.describe('Interact with Accordion', () => {
    test('Scenario: Open and close accordion sections', async ({ page }) => {
            await test.step('Go to Main Page', async () => {
            await page.goto('https://demo.automationtesting.in/Accordion.html');
        });
        await test.step('Expand first accordion panel', async () => {
            const firstAccordionHeader = page.getByRole('heading', { name: 'Collapsible Group 1 - Readability' });
            await firstAccordionHeader.click();
            const firstAccordionContent = page.getByText('This Automation Testing API is very simple to read and understand. Every method in this is self explanatory. If a layman looks into this code/script can understand what is happening. You can read the automation script like manual test case');
            await expect(firstAccordionContent).toBeVisible();
            await firstAccordionContent.click();
        });
        await test.step('Collapse second accordion panel', async () => {
            const secondAccordionHeader = page.getByRole('heading', { name: 'Collapsible Group 2 - Single Line Coding' });
            await secondAccordionHeader.click();
            const secondAccordionContent = page.getByText('In this Automation tool, each and every functionality will be achieved by Single line code. i.e. Selecting a Value from dropdown, Switching between windows and Drag and Drop functionality etc...');
            await expect(secondAccordionContent).toBeVisible();
            await secondAccordionHeader.click();
        });

        await test.step('Expand third accordion panel', async () => {
            const thirdAccordionHeader = page.getByRole('heading', { name: 'Collapsible Group 3 - Methhod Chaining' });
            await thirdAccordionHeader.click();
            const thirdAccordionContent = page.getByText('As the name indicates, you can chain the methods without breaking the code i.e. you can write the code for each element continuously.');
            await expect(thirdAccordionContent).toBeVisible();
            await thirdAccordionContent.click();
        });

        await test.step('Expand fourth accordion panel', async () => {
            const fourthAccordionHeader = page.getByRole('heading', { name: 'Collapsible Group 4 - Cross Browser Testing' });
            await fourthAccordionHeader.click();
            const fourthAccordionContent = page.getByText('NTest your web application across the most popular browsers including Firefox,Chrome and Internet Explorer to validate the functionality. You can easily switch between the browsers without changing the code.');
            await expect(fourthAccordionContent).toBeVisible();
            await fourthAccordionContent.click();
        });
    });
});