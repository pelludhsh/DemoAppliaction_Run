const { test: baseTest } = require("@playwright/test");
const { LoginPage } = require("../../src/pages/LoginPage");
const { HomePage } = require("../../src/pages/HomePage");
const { ProductPage } = require("../../src/pages/ProductPage");
const { CartPage } = require("../../src/pages/CartPage");
const { logger } = require("../../Utils/logger");


const test = baseTest.extend({
loginPage: async ({ page }, use) => {
logger.info("Initializing LoginPage fixture");
const loginPage = new LoginPage(page);
await use(loginPage);
},

homePage: async ({ page }, use) => {
logger.info("Initializing HomePage fixture");
const homePage = new HomePage(page);
await use(homePage);
},

productPage: async ({ page }, use) => {
    logger.info("Initializing ProductPage fixture");
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    logger.info("Initializing CartPage fixture");
    await use(new CartPage(page));
  }

});
module.exports = { test };