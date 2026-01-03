import {test , expect} from '@playwright/test';
test('handle DropDown',async ({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/');

//Multiple ways to select th dropdown, If it has Select TAG
//await page.locator('#country').selectOption('Germany');
//await page.selectOption('#country','Germany');
//await page.locator('#country').selectOption(value:'germany'); //select by value attribute
//await page.locator('#country').selectOption(index:1); // select by index


//Selectinf the dropdownValues, using loop 
const Option5 =await page.$$('#country option'); //$$() methos will return the values in the form of array
 for(const Option6 of Option5){              // for FOR loop value should be in arrary
    let value =await Option6.textContent(); //.textContent() methos will return in the form of string
    if(value.includes('France')){           // for IF condition values should be in the form of string
        await page.selectOption("#country",Option6);
        break;
    }
 } 
 await page.waitForTimeout(4000);



//Assertions
//1. Check the number of dropdown  values Approach 1
const Option =await page.locator('#country option'); 
await expect(Option).toHaveCount(10);
//2. Check the number of dropdown  values Approach 2
const Option1 =await page.$$('#country option'); //  $$() methos will return the values in the form of array
await expect(Option1.length).toBe(10); //.length  is array property  and will return the total number of values in the dropdown

//3.check the particular value is present in the dropdown Approach 1
const Option2 =await page.locator('#country').textContent();// testConetnt() methos will return the string values
await expect(Option2.includes('Germany')).toBeTruthy(); //.Includes() method will return the boolean value

//4.check the particular value is present in the dropdown Approach 2
const Option3 =await page.$$('#country option'); //$$() methos will return the values in the form of array
 let status = false;
 for(const Option4 of Option3){
    let val =await Option4.textContent();
    if(val.includes('India')){
        status = true;
        break;
    }
 } 
 await expect(status).toBeTruthy();




 await page.waitForTimeout(4000);
 
})