import{test,expect} from '@playwright/test'
test('MouseOverAction',async ({page})=>{

    await page.goto('https://www.flipkart.com/');


    await expect(page.getByAltText('Minutes')).toBeVisible();
    //span[contains(text(),'Fashion')]
    const fashion =await page.locator("//span[contains(text(),'Fashion')]");
    //a[@class='_1BJVlg _11MZbx']
       const fashion1 =await page.locator(" //a[@class='_1BJVlg _11MZbx']");
    
    await  fashion.hover();
    await  fashion1.click();

    await page.waitForTimeout(4000);
})
