import{test,expect} from '@playwright/test'
test('Handle CheckBox',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('checkbox', { name: 'Sunday' }).check()

    await expect (page.getByRole('checkbox', { name: 'Sunday' })).toBeChecked()
     await expect (page.getByRole('checkbox', { name: 'Sunday' }).isChecked()).toBeTruthy();
     await page.waitForTimeout(4000);


/*
//check the Multiple check box
// locating by xpath
//await page.locator("//input[@id='Sunday']");
const checkMultiple =[
      "//input[@id='sunday' and @type='checkbox']",
      "//input[@id='tuesday' and @type='checkbox']",
       "//input[@id='wednesday' and @type='checkbox']"
];

for(const ABC of checkMultiple){
    await page.locator(ABC).check();
}
 await page.waitForTimeout(4000);



 //Uncheck the Multiple check box which is already checked

 for(const ABC of checkMultiple){
    if( await page.locator(ABC).isChecked()){
        await page.locator(ABC).uncheck();
    }
    
}
 await page.waitForTimeout(4000);
*/
})