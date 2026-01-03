//for drag and drop we need identiy 2 elements source and target
import{test,expect} from '@playwright/test'
test('Drag&Drop',async ({page})=>{

    await page.goto('https://www.htmlgoodies.com/scripts/drag-drop-custom/');

    const rome =await page.locator('#field1') //source element
    const Italy =await page.locator('#field1') //target element

    await rome.dragTo(Italy);
    

    await page.waitForTimeout(9000);
})
