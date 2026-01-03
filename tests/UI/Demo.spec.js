
/*
const { test, expect } = require("../../fixtures/customFixture");
const { getTestData } = require("../../utils/excelUtil");
const testData = getTestData("UI");

*/
const { test } = require("../../src/fixtures/customFixture");
const { logger } = require("../../Utils/logger");
const loginData = require("../../data/loginData.json");
const env = require("../../config/env.config");
const productsJson = require("../../data/productsData.json");

// Read Excel test data
//const { getTestData } = require("../../Utils/excelReader");
//const testData = getTestData("data/DemoBlaze_TestData.xlsx");


test.describe("Demoblaze E2E Tests", () => {
loginData.forEach(data => {
test('First Test case', async ({ page, loginPage,
homePage,productPage,cartPage }) => {
  // 🔹 Navigate to app
      await homePage.navigate();
      logger.info("Application launched");

 // 🔹 Login
 await homePage.clickLogin();
 await loginPage.login(data.username, data.password);

     // 🔹 Add multiple products
      for (const prod of productsJson) {

        logger.info(`Opening product: ${prod.productName}`);
        await homePage.openProduct(prod.productName);

        await productPage.verifyProductName(prod.productName);

        const price = await productPage.getPrice();
        logger.info(`Price of ${prod.productName}: ${price}`);

        await productPage.addToCart();
        logger.info("Added to cart");

         await homePage.goToCart();
        //await homePage.goToHome(); // important before next product

        // 🔹 Cart validation
        await cartPage.verifyItemInCart(prod.productName);
        logger.info(`${prod.productName} present in cart`);

        const total = await cartPage.getCartTotal();
        logger.info(`Final Cart Total: ${total}`);

        await page.waitForTimeout(2000);
        await cartPage.goToHome();
      }
});
});
});




