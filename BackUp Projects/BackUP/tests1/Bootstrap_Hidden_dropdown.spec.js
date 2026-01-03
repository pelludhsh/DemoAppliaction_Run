//Bootstarp dropdown means the dropdown which dosen't have select tag

import{test,expect} from '@playwright/test'
import { Console } from 'console';
test('bootstarp',async({page})=>{
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  //page.getByRole()
  await page.getByRole('button',{name:'Login'}).click();

  await page.locator("//span[text()='PIM']").click();

 await page.locator("//label[text()='Job Title']/../following-sibling::div").click();

  const Option3 =await page.$$("//div[@role='listbox']//span");
  
for(const Option4 of Option3){
    let val =await Option4.textContent();
    console.log(val);
    if(val.includes('Account Assistant')){
        await Option4.click();
        break;
    }
 } 
await page.waitForTimeout(5000)
})