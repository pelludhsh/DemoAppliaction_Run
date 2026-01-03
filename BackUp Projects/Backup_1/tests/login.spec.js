//All are commonJS modules
const { test } = require("@playwright/test");
const { LoginPage } = require("../pages2/LoginPage");
const { HomePage } = require("../pages2/HomePage");
const { logger } = require("../Utils/logger");
const loginData = require("../data/loginData.json");
const env = require("../config/env.config");


test.describe("Demoblaze Login Tests", () => {
  loginData.forEach((user) => {  //user is just a variable
    test(`Login attempt for ${user.username}`, async ({ page }) => {
      const home = new HomePage(page);
      await home.navigate();
      await home.clickLogin();

      const login = new LoginPage(page);
      logger.info(`Logging in with ${user.username}`);
      await login.login(user.username, user.password);
      try {
        await login.verifyLoginOrError();
        logger.info("Login succeeded or validated no error dialog.");
      } catch (err) {
        logger.error("Login failed: " + err.message);
        throw err;
      }
    });
  });
});
