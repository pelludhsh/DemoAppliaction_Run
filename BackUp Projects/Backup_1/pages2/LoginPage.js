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
/*
  async verifyLoginOrError() {
    // Demoblaze shows a modal alert on login — you may have to handle that:
    const dialog = await this.page.waitForEvent("dialog", { timeout: 8000 }).catch(() => null);
    if (dialog) {
      // This means login failed (or message appears)
      const msg = dialog.message();
      await dialog.accept();
      throw new Error("Login dialog shown: " + msg);
    } else {
      // If no alert, then login probably succeeded: you may check user greeting, or page reload
      await expect(this.page).toHaveURL("https://www.demoblaze.com/"); // might remain on same page
    }
  }
  */
  async verifyLoginOrError() {
      // Wait for login response: either user name appears (success) OR dialog appears (failure)
      // If dailog appears it will handle  but if dailog didn't appear, then it will throw null error
      //, so for handling this we used catch method with arrow function , it will catch the null
  const dialogPromise = this.page.waitForEvent("dialog").catch(() => null); 
  // Username element that appears after successful login

  const userWelcome = this.page.locator("#nameofuser"); // "Welcome username"

   // Wait for whichever happens first (dialog vs success) and both dialogPromise,userWelcome will run same time , which ever pass
  const firstEvent = await Promise.race([
    dialogPromise,
    userWelcome.waitFor({ state: "visible" }).then(() => "success").catch(() => null)// if expected wording appears then generate a msg using 
    // then(=>) or wordings not appear then it will throw null error, so for handling with that we use catch method
  ]);

 // Case 1: Login failed → dialog appeared
  if (firstEvent && firstEvent.message) {
    const msg = firstEvent.message();
    await firstEvent.accept();
    throw new Error("Login failed: " + msg);
  }

  // Case 2: Login succeeded
  if (firstEvent === "success") {
    await expect(this.page.locator("#nameofuser")).toBeVisible();
    return; // Success
  }

  // Backup: If neither happened
  throw new Error("Login status unknown — no dialog and no user greeting.");


  }






}
module.exports = { LoginPage };

