import { test, expect } from '@playwright/test';
import { after, afterEach, beforeEach } from 'node:test';

test.describe('Feature: Navegar Switch To con Mouse Hover', () => {

    test('Scenario: Mouse over Switch To and Select Alerts', async ({ page }) => {

        await test.step('Go to Dynamic Page', async () => {
            await page.goto('https://demo.automationtesting.in/Dynamic.html');
        });

        await test.step('Mouse over Switch To', async () => {
            const menuSwitchTo = page.getByRole('link', { name: 'SwitchTo' });
            await menuSwitchTo.hover();
        });

        await test.step('Select first submenu: Alerts', async () => {
            const submenuAlerts = page.getByRole('link', { name: 'Alerts' });
            await submenuAlerts.click();
        });
        await test.step('Execute an action in the submenu Alerts', async () => {
            page.on('dialog', async dialog => {
                expect(dialog.message()).toBe('I am an alert box!');
                await dialog.accept();
            });
            await page.getByRole('button', { name: 'click the button to display an alert box:' }).click();
            await expect(page.getByRole('button', { name: 'click the button to display an alert box:' })).toBeVisible();
        });

        await test.step('Get back to the main page', async () => {
            await page.goBack('https://demo.automationtesting.in/Dynamic.html');
        });

    });

    test('Scenario: Mouse over Switch To and Select Windows', async ({ page }) => {
        await test.step('Locate Switch To', async () => {
            page.goto('https://demo.automationtesting.in/Dynamic.html');
            const menuSwitchTo = page.getByRole('link', { name: 'SwitchTo' });
            await menuSwitchTo.hover();
        });
        await test.step('Select Windows submenu', async () => {
            const submenuWindows = page.getByRole('link', { name: 'Windows' });
            await submenuWindows.click();
        });
        await test.step('Execute an action in the submenu Windows', async () => {
            const newTabPromise = page.context().waitForEvent('page');
            await page.getByRole('button', { name: 'click' }).click();
            const newTab = await newTabPromise;
            await newTab.waitForLoadState();
            expect(newTab.url()).toBe('https://www.selenium.dev/');
            await newTab.close();
        });

        await test.step('Get back to the main page', async () => {
            await page.goBack('https://demo.automationtesting.in/Dynamic.html');
        }); 
    });

    test('Scenario: Mouse over Switch To and Select Frames', async ({ page }) => {
        await test.step('Locate Switch To', async () => {
            page.goto('https://demo.automationtesting.in/Dynamic.html');
            const menuSwitchTo = page.getByRole('link', { name: 'SwitchTo' });
            await menuSwitchTo.hover();
        });
        await test.step('Select Frames submenu', async () => {
            const submenuFrames = page.getByRole('link', { name: 'Frames' });
            await submenuFrames.click();
        });

        await test.step('Execute and action or validate the current page', async () => {
            const iframeButton = page.getByRole('link', { name: 'Iframe with in an Iframe' });
            iframeButton.click();
            const outerFrame = page.frameLocator('iframe[src="MultipleFrames.html"]');
            const innerFrame = outerFrame.frameLocator('iframe[src="SingleFrame.html"]');
            await innerFrame.getByRole('textbox').fill('Testing Frames with Playwright');
            await expect(innerFrame.getByRole('textbox')).toHaveValue('Testing Frames with Playwright');
        });
        await test.step('Get back to the main page', async () => {
            await page.goBack('https://demo.automationtesting.in/Dynamic.html');
        }); 
    })


});

test.describe('Feature: Navegar Widgets con Mouse Over', () => {
    test('Scenario: Mouse over Widgets and Select Accordion', async ({ page }) => {
            await test.step('Go to Main Page', async () => {
            await page.goto('https://demo.automationtesting.in/Dynamic.html');
        });

        await test.step('Locate Widgets', async () => {
            const menuWidgets = page.getByRole('link', { name: 'Widgets' });
            await menuWidgets.hover();
        });

        await test.step('Select Accordion submenu', async () => {
            const submenuAccordion = page.getByRole('link', { name: 'Accordion' });
            await submenuAccordion.click();
        });
        await test.step('Execute an action in the Accordion page', async () => {
            const firstAccordionHeader = page.getByRole('heading', { name: 'Collapsible Group 1 - Readability' });
            await firstAccordionHeader.click();
            const firstAccordionContent = page.getByText('This Automation Testing API is very simple to read and understand. Every method in this is self explanatory. If a layman looks into this code/script can understand what is happening. You can read the automation script like manual test case');
            await expect(firstAccordionContent).toBeVisible();
        });

        await test.step('Get back to the main page', async () => {
            await page.goBack('https://demo.automationtesting.in/Dynamic.html');
        }); 
    }); 

    test('Scenario: Mouse over Widgets and Select AutoComplete', async ({ page }) => {
        await test.step('Go to Main Page', async () => {
            await page.goto('https://demo.automationtesting.in/Dynamic.html');
        });
        await test.step('Locate Widgets', async () => {
            const menuWidgets = page.getByRole('link', { name: 'Widgets' });
            await menuWidgets.hover();
        });

        await test.step('Select AutoComplete submenu', async () => {
            const submenuAutoComplete = page.getByRole('link', { name: 'AutoComplete' });
            await submenuAutoComplete.click();
        });
        await test.step('Execute an action in the AutoComplete page', async () => {
            const multiInput = page.locator('#searchbox');
            await multiInput.fill('Au');
            const optionToSelect = page.locator('text=Australia');
            await optionToSelect.click();
            //Validate the selected option is visible
            const seletedOption = page.locator('.ui-autocomplete-multiselect-item', { hasText: 'Australia' });
            await expect(seletedOption).toBeVisible();

        });
    });

    test('Scenario: Mouse over Widgets and Select Datepicker', async ({ page }) => {
        await test.step('Go to Main Page', async () => {
            await page.goto('https://demo.automationtesting.in/Dynamic.html');
        });
        await test.step('Locate Widgets', async () => {
            const menuWidgets = page.getByRole('link', { name: 'Widgets' });
            await menuWidgets.hover();
        });
        await test.step('Select Datepicker submenu', async () => {
            const submenuDatepicker = page.getByRole('link', { name: 'Datepicker' });
            await submenuDatepicker.click();
        });
        await test.step('Execute an action in the Datepicker page', async () => {
            const dateInput = page.locator('#datepicker2');
            await dateInput.click();
            //Select a date from the datepicker
            const dateToSelect = page.getByRole('link', { name: '15' });
            await dateToSelect.click();
            //Validate the selected date is in the input field
            await expect(dateInput).toHaveValue(/15/);
        });

    });

    test('Scenario: Mouse over Widgets and Select Slider', async ({ page }) => {
        await test.step('Go to Main Page', async () => {
            await page.goto('https://demo.automationtesting.in/Dynamic.html');
        });
        await test.step('Locate Widgets', async () => {
            const menuWidgets = page.getByRole('link', { name: 'Widgets' });
            await menuWidgets.hover();
        });
        await test.step('Select Slider submenu', async () => {
            const submenuSlider = page.getByRole('link', { name: 'Slider' });
            await submenuSlider.click();
        });
        await test.step('Execute an action in the Slider page', async () => {
            const sliderHandle = page.locator('.ui-slider-handle');
            await sliderHandle.hover();
            await page.mouse.down();
            await page.mouse.move(300, 0); // Move slider to the right
            await page.mouse.up();
        });

    });

});



    



