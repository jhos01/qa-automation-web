import { expect, test } from '@playwright/test';
import { afterEach, beforeEach } from 'node:test';

test.describe('Feature: Mover elementos con precision', () => {
    afterEach(async ({ page }) => {
        // Cerrar la pagina web
        await page.close();
    });

    test('Scenario: Hacer 1 drag and drop estatico', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Static.html');
        const draggableElement1 = page.locator('#angular');
        const draggableElement2 = page.locator('#mongo');
        const draggableElement3 = page.locator('#node');
        const dropZone = page.locator('#droparea');
        await draggableElement1.dragTo(dropZone);
        await draggableElement2.dragTo(dropZone);
        await draggableElement3.dragTo(dropZone);
        await expect(dropZone.locator('#angular')).toBeVisible();
        await expect(dropZone.locator('#mongo')).toBeVisible();
        await expect(dropZone.locator('#node')).toBeVisible();

        
    })

    test('Scenario: Hacer 1 drag and drop dinamico', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Dynamic.html');
        const draggableElement1 = page.locator('#angular');
        const draggableElement2 = page.locator('#mongo');
        const draggableElement3 = page.locator('#node');
        const dropZone = page.locator('#droparea');
        await draggableElement1.dragTo(dropZone);
        await draggableElement2.dragTo(dropZone);
        await draggableElement3.dragTo(dropZone);
        await expect(dropZone.locator('#angular')).toBeVisible();
        await expect(dropZone.locator('#mongo')).toBeVisible();
        await expect(dropZone.locator('#node')).toBeVisible();

    })
    
    
    
})
