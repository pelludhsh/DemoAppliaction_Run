import{test,expect} from '@playwright/test'
import { on } from 'events';
//the main use of hooks to avoid the dupliaction of code
//2 types are avaiable, 
// BeforeEach and AfterEach = this will excute for each test block
//BeforeAll and AfterALL = this will excute will only once for all test block

//this 2 types methods will only accept browser fixtue, we can't use page fixture
//so will create one global variable as page, then using browser fixture we create a new instance of page , 
// so we can use that page  as a fixture for all test block

let page;

//Using BeforeEach and AfterEach

test.beforeEach(async({browser})=>{
 page =await browser.newPage();

 await page.goto('https://www.demoblaze.com/index.html');

 await page.getByRole('link', { name: 'Log in' }).click();
 await page.locator('#loginusername').fill('pavanol');
 await page.locator('#loginpassword').fill('test@123');
 await page.getByRole('button', { name: 'Log in' }).click();
})

test.afterEach(async ()=>{
    page.getByRole('link', { name: 'Log out' }).click
})

test('HomePage',async ()=>{
    const Products = await page.$$("//a[@class='hrefch']")
    await page.waitForTimeout(4000);
    await expect(Products).toHaveLength(9);
})

test('Add to Cart',async ()=>{
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();


     page.on('dialog',async dialog=>{ // Page.on('Keyword',async Variabel=>{})  // both keyword and variable should be same (dialog)
       expect(dialog.message()).toContain("Product added.");
       await dialog.accept();
    })
    await page.getByRole('link', { name: 'Add to cart' }).click();
     await page.waitForTimeout(9000);
     

})




//Using BeforeAll and AfterALL

test.beforeAll(async({browser})=>{
 page =await browser.newPage();

 await page.goto('https://www.demoblaze.com/index.html');

 await page.getByRole('link', { name: 'Log in' }).click();
 await page.locator('#loginusername').fill('pavanol');
 await page.locator('#loginpassword').fill('test@123');
 await page.getByRole('button', { name: 'Log in' }).click();
})

test.afterAll(async ()=>{
    page.getByRole('link', { name: 'Log out' }).click
})

test('HomePage',async ()=>{
    const Products = await page.$$("//a[@class='hrefch']");
    await page.waitForTimeout(4000);
    await expect(Products).toHaveLength(9);
})

test('Add to Cart',async ()=>{
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();


     page.on('dialog',async dialog=>{ // Page.on('Keyword',async Variabel=>{})  // both keyword and variable should be same (dialog)
       expect(dialog.message()).toContain("Product added.");
       await dialog.accept();
    })
    await page.getByRole('link', { name: 'Add to cart' }).click();
     await page.waitForTimeout(9000);
     

})