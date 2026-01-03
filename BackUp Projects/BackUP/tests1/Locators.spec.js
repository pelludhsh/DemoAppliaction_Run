import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
*/
test('Locators',async({page}) =>{

await page.goto('https://www.demoblaze.com/index.html');

const pageTitle=page.title();
console.log('Page title is:', pageTitle);
await expect (page).toHaveTitle('STORE');
await expect (page).toHaveURL('https://www.demoblaze.com/index.html');

await page.getByRole('link', { name: 'Log in' }).click();

await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').fill('test@123');
await page.getByRole('button',{name: 'Log in'}).click();
//await page.click('button',{name: 'Log in'}).click();
 const logoutlink = await page.getByText('Log out');
await expect (logoutlink).toBeVisible();
await expect(page.getByText('Welcome pavanol')).toBeVisible();
await page.close();

}) 