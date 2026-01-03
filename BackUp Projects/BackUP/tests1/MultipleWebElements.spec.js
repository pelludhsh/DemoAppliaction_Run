import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
*/
test('MultipleWebElements',async({page}) =>{

await page.goto('https://www.demoblaze.com/index.html');

const pageTitle=page.title();
console.log('Page title is:', pageTitle);
await expect (page).toHaveTitle('STORE');
await expect (page).toHaveURL('https://www.demoblaze.com/index.html');

//Explicit wait till elements to visible
await page.waitForSelector("//div[@id='tbodyid']//h4/a");

//$$ menthod is used for getting Multiple web elements
const Products = await page.$$("//div[@id='tbodyid']//h4/a");

for (const prod of Products) {
    const prodName = await prod.textContent();//TextContent method will always returns the text
    console.log(prodName);
}

}) 