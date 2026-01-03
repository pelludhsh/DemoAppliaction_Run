import{test,expect} from '@playwright/test'
test('MouseDoubleClick',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');


    await page.getByRole('button', { name: 'Copy Text' }).dblclick()

    const InputFeild =await page.locator('#field2')
    await expect(InputFeild).toHaveValue('Hello World!')

    await page.waitForTimeout(9000);
})
