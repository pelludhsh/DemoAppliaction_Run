import{test,expect} from '@playwright/test'
test('MouseRightClick',async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo/fontawesome-icons.html');


   // const maa= await page.locator('span:has-text("right click me")');
    //await maa.click({button:'right'});
    //await maa.click({button:'left'});

    await page.locator('span:has-text("right click me")').click({button:'right'});
    await page.waitForTimeout(9000);
})
