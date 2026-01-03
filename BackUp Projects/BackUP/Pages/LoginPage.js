//import {test,expect} from '@playwright/test'
exports.LoginPage = class LoginPage{

    constructor(page){
    this.page=page;
    this.loginLink="#login2";
    this.UsernameInput="#loginusername";
    this.passwordInput="#loginpassword";
    this.loginButton="//button[normalize-space()='Log in']";
    }

    async gotoLoginPage(){
        await this.page.goto("https://www.demoblaze.com/index.html");
    }

    async login(Username, password){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.UsernameInput).fill(Username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();

    }
        
    
}