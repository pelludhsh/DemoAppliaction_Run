
//Playwright by default will handel the alert boxes, we need to handel mannualy only when we want to do any validations on aler boxes

import{test,expect} from '@playwright/test'
test.skip('HanleAlert',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //triggering dailog window handler befor clicking the alert button
    page.on('dialog',async dialog=>{ // Page.on('Keyword',async Variabel=>{})  // both keyword and variable should be same (Dialog)
       await expect(dialog.type()).toContain('alert');
       await expect(dialog.message()).toContain("I am an alert box!");
       await dialog.accept();
    })
    await page.getByRole('button', { name: 'Simple Alert' }).click();
    
    await page.waitForTimeout(4000);
})



test.skip('Confimation Alert',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //triggering dailog window handler befor clicking the alert button
    page.on('dialog',async dialog=>{ // Page.on('Keyword',async Variabel=>{})
       await expect(dialog.type()).toContain('confirm');
       await expect(dialog.message()).toContain("Press a button!");
       await dialog.accept();
       //await dialog.dismiss();
    })
    await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    //await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
     await expect(page.getByText('You pressed OK!', { exact: true })).toBeTruthy();
    
    await page.waitForTimeout(4000);
})

test('Prompt Alert',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //triggering dailog window handler befor clicking the alert button
    page.on('dialog',async dialog=>{ // Page.on('Keyword',async Variabel=>{})
       await expect(dialog.type()).toContain('prompt');
       await expect(dialog.message()).toContain("Please enter your name:");
       await expect(dialog.defaultValue()).toContain('Harry Potter');
       await dialog.accept('john');
       //await dialog.dismiss();
    })
    await page.getByRole('button', { name: 'Prompt Alert' }).click();
    //await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
     await expect(page.getByText('Hello john! How are you today?', { exact: true })).toBeTruthy();
    
    await page.waitForTimeout(4000);
})