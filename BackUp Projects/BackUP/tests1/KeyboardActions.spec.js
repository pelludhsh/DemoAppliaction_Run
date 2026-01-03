//for drag and drop we need identiy 2 elements source and target
import{test,expect} from '@playwright/test'
import { Script } from 'vm';
test('KeyboardActions',async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare');
    await page.getByRole('textbox', { name: 'Paste one version of the text here.' }).fill('Automation Script');


    await page.keyboard.press('Control+A');
     await page.keyboard.press('Control+C');
      await page.keyboard.down('Tab');
         await page.keyboard.up('Tab');//optional playwright will automatically release the 
       await page.keyboard.press('Control+V');


    await page.waitForTimeout(9000);
})
