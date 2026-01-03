const { expect } = require("@playwright/test");
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("#loginusername");
    this.passwordInput = page.locator("#loginpassword");
    this.loginBtn = page.locator("button[onclick='logIn()']");
    this.closeBtn = page.locator("button[onclick='logIn()']").locator("..").locator("button"); 
    // (Note: better to inspect the actual HTML, this is just a placeholder)
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

}
module.exports = { LoginPage };

