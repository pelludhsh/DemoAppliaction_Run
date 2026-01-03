import{test,expect} from '@playwright/test'
test('handle RadionButton',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='male']").check();
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    //isChecked() method returns true or false 
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();
    await page.waitForTimeout(4000);
})