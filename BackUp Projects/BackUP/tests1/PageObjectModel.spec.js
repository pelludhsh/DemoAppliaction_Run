import {test,expect} from '@playwright/test';
import { LoginPage } from '../Pages1/LoginPage';
import { HomePages } from '../Pages1/HomePages';
import { CartPage } from '../Pages1/CartPage';

test('StoreApplication', async({page})=>{
    //login
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');

    //HomePage
    const home=new HomePages(page);
    await home.addProductToCart('Sony xperia z5');
    await page.waitForTimeout(4000)
    await home.goToCart();
  
    //cartPage
    const cart = new CartPage(page);
    const status =await cart.CheckProdInCart('Sony xperia z5');
    expect(status).toBeTruthy();
    await page.waitForTimeout(4000)

})


