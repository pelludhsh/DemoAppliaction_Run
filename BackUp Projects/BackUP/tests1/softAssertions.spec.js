/*when we use Soft Assertion , If any assertion got failed , it will not terminate the code, it continues fr reminaing code  but 
after complete run, it will mark test as failed (So Just use soft keyword after expect) */
 import {test,expect} from '@playwright/test';

 test('SoftAssertion',async ({page})=>{
await page.goto('https://demo.nopcommerce.com/register');
await expect.soft(page).toHaveTitle('nopCommerce demo store.')
await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');
await expect.soft(page.getByAltText('nopCommerce demo store')).toBeVisible();

 })
