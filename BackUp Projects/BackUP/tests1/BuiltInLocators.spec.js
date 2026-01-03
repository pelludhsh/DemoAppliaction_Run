/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import { test, expect } from '@playwright/test';
test('builtInLocators', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  //page.getByAltText() 
  const logo = await page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

  //page.getByPlaceholder()
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  //page.getByRole()
  await page.getByRole('button',{name:'Login'}).click();

  //page.getByText() 
  //await page.waitForSelector("//p[@class='oxd-userdropdown-name']");
  const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
  await expect(page.getByText(name)).toBeVisible();

  await page.getByText('Admin').click();
 

  await page.locator("//label[text()='Username']/../following-sibling::div//input").fill('Akshay');

await page.waitForTimeout(4000);

//getByLabel
// Get by label is used in Input tag is inside label tag then only we use labal method for Input box 
//Ex:- <label>Password <input type="password" /></label>
//await page.getByLabel('Password').fill('secret');

//getByTitle
//Ex:-<span title='Issues count'>25 issues</span>
//await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

//getByTestId
//Ex:-<button data-testid="directions">Itinéraire</button>
//await page.getByTestId('directions').click();

}) 