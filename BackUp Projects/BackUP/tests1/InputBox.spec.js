import{test,expect} from '@playwright/test'
test('handle InputBox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const box = await page.locator("//label[text()='Name:']/../input[@placeholder='Enter Name']");
    await expect(box).toBeVisible();
    await expect(box).toBeEditable();
    await expect(box).toBeEmpty();
    await expect(box).toBeEnabled();
    await (box).fill('Akshay');
    await page.waitForTimeout(4000);
})