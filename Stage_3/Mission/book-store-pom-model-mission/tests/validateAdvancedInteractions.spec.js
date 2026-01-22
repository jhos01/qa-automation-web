import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homepage';
import { ElementsPage } from '../pages/elements';
import { SortablePage } from '../pages/sortable';
import { SelectablePage } from '../pages/selectable';
import { ResizablePage } from '../pages/resizable';
import { DroppablePage } from '../pages/droppable';
import { DragabblePage } from '../pages/dragabble';

test.describe('Feature: Validar Interacciones Avanzadas', () => {
  let page, homepage, elementsPage;
  let sortablePage, selectablePage, resizablePage, droppablePage, dragabblePage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    homepage = new Homepage(page);
    elementsPage = new ElementsPage(page);
    sortablePage = new SortablePage(page);
    selectablePage = new SelectablePage(page);
    resizablePage = new ResizablePage(page);
    droppablePage = new DroppablePage(page);
    dragabblePage = new DragabblePage(page);
    await homepage.navigate('https://demoqa.com/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Sortable: Reordenar elementos', async () => {
    await homepage.navigateToInteractions();
    await elementsPage.navigateToSortable();
    await sortablePage.dragAndDropFirstToLast();
    const moved = await sortablePage.assertItemMoved();
    expect(moved).toBe(true);
  });

  test('Selectable: Seleccionar un elemento', async () => {
    await homepage.navigateToInteractions();
    await elementsPage.navigateToSelectable();
    await selectablePage.selectFirstItem();
    await selectablePage.assertItemIsSelected();
  });

  test('Resizable: Redimensionar caja', async () => {
    await homepage.navigateToInteractions();
    await elementsPage.navigateToResizable();
    await resizablePage.resizeBox();
    await resizablePage.assertBoxResized();
  });

  test('Droppable: Soltar el elemento', async () => {
    await homepage.navigateToInteractions();
    await elementsPage.navigateToDroppable();
    await droppablePage.performDragAndDrop();
    await droppablePage.assertDropped();
  });

  test('Dragabble: Mover el elemento', async () => {
    await homepage.navigateToInteractions();
    await elementsPage.navigateToDragabble();
    await dragabblePage.dragBox();
    await dragabblePage.assertBoxMoved();
  });
});
