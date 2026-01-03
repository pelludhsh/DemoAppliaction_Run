import {test,expect} from '@playwright/test';
exports.HomePage = class HomePage{
    constructor(page){
        this.page=page;
        this.productlist="//div[@id='tbodyid']//h4/a";
        this.addToCart="//a[normalize-space()='Add to cart']";
        this.cart="#cartur";
    }
    async addProductToCart(productName){
    const productlist =await this.page.$$(this.productlist); //this will return all the pord in the form of array
    for(let  Product of productlist){
        //console.log(await Product.textContent());
    const verify =await Product.textContent();
    if(productName === verify ){
     await this.page.waitForTimeout(6000)
     await Product.click();
     break;
    }
    }

    await this.page.on('dialog', async dialog =>{
         if(dialog.message().includes('Product added.')){
         await dialog.accept();
        }
    })
    await this.page.locator(this.addToCart).click();

    }

    async goToCart(){
        await this.page.locator(this.cart).click();
    }

}