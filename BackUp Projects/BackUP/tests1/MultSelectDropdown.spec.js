import {test , expect} from '@playwright/test';
test('handle DropDown',async ({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/');

//Select multiple values 
await page.locator('#colors').selectOption(['Red','Blue','Green']);

//Assertions
//1. Check the number of dropdown  values Approach 1
const Option =await page.locator('#colors option'); 
await expect(Option).toHaveCount(7);

//2. Check the number of dropdown  values Approach 2
const Option1 =await page.$$('#colors option'); //  $$() methos will return the values in the form of array
await expect(Option1.length).toBe(7); //.length  is array property  and will return the total number of values in the dropdown

//3.check the particular value is present in the dropdown Approach 1
const Option2 =await page.locator('#colors').textContent();// testConetnt() methos will return the string values
await expect(Option2.includes('Yellow')).toBeTruthy(); //.Includes() method will return the boolean value

//4.check the particular value is present in the dropdown Approach 2
const Option3 =await page.$$('#colors option'); //$$() methos will return the values in the form of array
 let status = false;
 for(const Option4 of Option3){
    let val =await Option4.textContent();
    if(val.includes('Yellow')){
        status = true;
        break;
    }
 } 
 await expect(status).toBeTruthy();

 await page.waitForTimeout(4000);

})