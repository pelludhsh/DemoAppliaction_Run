//Assertion is mainly used for Validation purpose 
//when we use Hard Assertion , If any assertion got failed , it will terminate the code and mark test as failed

import{test,expect} from '@playwright/test'
test('hardAssertions',async({page})=>{
 await page.goto('https://demo.nopcommerce.com/register');

//expect(page).toHaveURL()  verifying the URL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

//expect(page).toHaveTitle()  verifying the Tittle
await expect(page).toHaveTitle('nopCommerce demo store. Register');

//expect(Locator).toBeVisible()  verifying the Element
const demo= await page.getByAltText('nopCommerce demo store');
await expect(demo).toBeVisible();


//expect(Locator).toBeEnabled() and expect(Locator).toBeDisabled  verifying the Element enabled and disabled
 const FN =await page.locator("#FirstName");
 await expect (FN).toBeEnabled();
 await expect(FN).toBeEmpty();
 await expect(FN).toBeEditable();


//expect(Locator).toBeChecked()   verifying the Element for RadioButton and checkbox
const GM =await page.locator("#gender-male");
await (GM).click();
await expect(GM).toBeChecked();

const Box =await page.getByRole('checkbox', { name: 'Newsletter' });
page.getByRole('checkbox', { name: 'Newsletter' })
await expect(Box).toBeChecked();

//expect(Locator).toHaveText() matching element fully

const fullyVerify =await page.getByRole('heading', { name: 'Company Details' });
await expect(fullyVerify).toHaveText('Company Details');

//expect(Locator).toContainText() matching element Partially
const PartiallyVerify =page.getByRole('heading', { name: 'Company Details' })
await expect(fullyVerify).toContainText('Company');

//expect(Locator).toHaveValue(value) Verifying the Input box is having correct value or not
  const LN = await page.locator("//label[text()='First name:']/../input");
  await (LN).fill('Gowda');
  await expect(LN).toHaveValue('Gowda');

//expect(Locator).toHaveAttribute() Verifying the Attribute or Property of the element
const VerifyProperty =await page.getByRole('button',{name:'Register'});
await expect(VerifyProperty).toHaveAttribute('type','submit');

})