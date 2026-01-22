
import { Homepage } from '../pages/homepage';
import { ElementsPage } from '../pages/elements';
import { TextBoxPage } from '../pages/textbox';
import { CheckBoxPage } from '../pages/checkbox';

import { test } from '@playwright/test';
import { text } from 'stream/consumers';


test.describe('Feature: Elements ; Validate each functionality of Elements View', () => {
    /** @type {import('../pages/homepage').Homepage} */
    let homepage;
    /** @type {import('../pages/elements').ElementsPagePage} */
    let elementsPage;
    /** @type {import('../pages/textbox').TextBoxPage} */
    let textBoxPage;
    /** @type {import('../pages/checkbox').checkBoxPage} */
    let checkBoxPage;
    /** @type {import('../pages/radiobutton').RadioButtonPage} */
    let radioButtonPage;
    /** @type {import('../pages/webtables').WebsTablePage} */
    let websTablePage;
    /** @type {import('../pages/buttons').ButtonsPagePage} */
    let buttonsPage;
    /** @type {import('../pages/links').LinksPagePage} */
    let linksPage;
    /** @type {import('../pages/broken-links').BrokenLinksPage} */
    let brokenLinksPage;
    /** @type {import('../pages/upload-download').UploadAndDownloadPage} */
    let uploadAndDownloadPage;
    /** @type {import('../pages/dynamic-properties').DynamicPropertiesPage} */
    let dynamicPropertiesPage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        elementsPage = new ElementsPage(page);
        textBoxPage = new TextBoxPage(page);
        checkBoxPage = new CheckBoxPage(page);
        radioButtonPage = new RadioButtonPage(page);
        websTablePage = new WebsTablePage(page);
        buttonsPage = new ButtonsPage(page);
        linksPage = new LinksPage(page);
        brokenLinksPage = new BrokenLinksPage(page);
        uploadAndDownloadPage = new UploadAndDownloadPage(page);
        dynamicPropertiesPage = new DynamicPropertiesPage(page);
        await homepage.navigate('https://demoqa.com/')

    })

    test.afterEach(async ({page}) => {
        await page.close();
    
    });
    
    /**Test 1: Validar textBox escenario y assertions
     * 
     */

    test('Test 1: Completar el formulario de la pagina TextBoxPage', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        });
        await test.step('Seleccionar Textbox section', async () => {
            await elementsPage.navigateToTextBox();
        });

        await test.step('Llenar el formulario de textbox page', async () => {
            await textBoxPage.enterFullName('Fulano');
            await textBoxPage.enterEmail('as@email.com');
            await textBoxPage.enterCurrentAddress('Address')
            await textBoxPage.enterPermanentAddress('Permanent Address');
            await textBoxPage.clickSubmit();
        })
        await test.step('validate the form was submitted ', async () => {
            await textBoxPage.verifyNameIsDisplayed('Fulano');
            await textBoxPage.verifyEmailIsDisplayed('as@email.com');
            await textBoxPage.verifyCurrentAddressIsDisplayed('Address');
            await textBoxPage.verifyPermanentAddressIsDisplayed('Permanent Address')            
        })
        
    });
    /**Test 2: Validar checkbox escenario y assertions
     * 
     */

    test('Test 2: Validar checkbox', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        })
        await test.step('Seleccionar Checkbox section', async () => {
            await elementsPage.navigateToCheckBox();
        });

        await test.step('Expandir checkbox elements', async () => {
            await checkBoxPage.clickExpandAll();
        })

        await test.step('Seleccionar CheckHome', async () => {
            await checkBoxPage.checkHome();
        })
        await test.step('validate checkbox was selected', async () => {
            await checkBoxPage.isHomeChecked();
        });
    });
        
    /**Test 3: Validar Radio Button escenario y assertions
     * 
     */
    test('Test3: Validar Radio Button', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        })
        await test.step('Seleccionar RadioButton section', async () => {
            await elementsPage.navigateToRadioButton();
        });
        await test.step('Select Yes', async () => {
            await radioButtonPage.selectYes();
        });
        await test.step('Validate message for selected radioButton', async () => {
            await radioButtonPage.verifyYesMessageIsValid();
        });
    });

    /**Test 4: Validar WebTables escenario y assertions
     * 
     */
    test('Test 4: Validar WebTables', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        });
        await test.step('Seleccionar RadioButton section', async () => {
            await elementsPage.navigateToWebTables();
        });        
        await test.step('Add new row information into the table', async () => {
            await websTablePage.addNewrowInformation(
                'Fulano',
                'Mendez',
                'fulano@email.com',
                42,
                4222,
                'Department A'    
            );
        })
        await test.step('Delete new row added', async () => {
            await websTablePage.selectDeleteButtonforNewRow();
        })
        

        await test.step('Validate row was removed', async () => {
            await websTablePage.verifyRowisRemoved()
        })
    });
    /**Test 5: Validar Buttons escenario y assertions
     * 
     */
    test('Test 5: Validar Buttons', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        });
        await test.step('Seleccionar Button section', async () => {
            await elementsPage.navigateToButtons();
        })
        await test.step('Select Double Click button', async () => {
            await buttonsPage.selectDoubleClickButton();
        })

        await test.step('Validate message displayed corresponds to Double Click button', async () => {
            await buttonsPage.verifydoubleClickMessageIsValid();
        })
        
    });
    /**Test 6: Validar Links escenario y assertions
     * 
     */
    test('Test 6: Validar Links', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        });
        await test.step('Seleccionar Links section', async () => {
            await elementsPage.navigateToLinks();
        })
        await test.step('Select Home link', async () => {
            await elementsPage.cliickHomeLink();
        })
        await test.step('Validate 1 new page is opened', async () => {
            await elementsPage.verifyHomeLinkOpensNewPage();
        })
    })
    /**Test 7: Validar Broken Links escenario y assertions
     * 
     */
    test('Test 7: Validar Broken Links', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        });
        await test.step('Seleccionar Broken Links section', async () => {
            await elementsPage.navigateToBrokenLinks();
        })       
    })
    /**Test 8: Validar upload escenario y assertions
     * 
     */
    test('Test 8: Validar Upload-Download', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        });
        await test.step('Seleccionar UploadAndDownload section', async () => {
            await elementsPage.navigateToUploadAndDownload();
        })
        await test.step('Upload a file', async () => {
            await uploadAndDownloadPage.uploadFile()
        })
        await test.step('Validate file was uploaded', async () => {
            await uploadAndDownloadPage.verifyUploadedFilePath()
        })  
    })

    /**Test 9: Validar Dynamic properties escenario y assertions
     * 
     */
    test('Test 9: Validar dynamic properties', async ({ page }) => {
        await test.step('Ingresar a la pagina Elements', async () => {
            await homepage.navigateToElements();
        });
        await test.step('Seleccionar DynamicProperties section', async () => {
            await elementsPage.navigateToDynamicProperties();
        })
        await test.step('Validate properties of the buttons', async () => {
            await dynamicPropertiesPage.verifyWillEnable5SecondsButtonisVisible();
            await dynamicPropertiesPage.verifyColorChangeButtonHasChangedColor();
            await dynamicPropertiesPage.verifyVisibleAfter5SecondsButtonIsVisible();
        })        
    }) 
        
});
    

