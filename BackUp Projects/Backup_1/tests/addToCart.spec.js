//All are commonJS modules
const { test } = require("@playwright/test");
const { HomePage } = require("../pages2/HomePage");
const { ProductPage } = require("../pages2/ProductPage");
const { CartPage } = require("../pages2/CartPage");
//const { readExcelData } = require("../utils/excelReader");
const { logger } = require("../Utils/logger");
const productsJson = require("../data/productsData.json");
//const productsExcel = readExcelData("./data/productsData.xlsx");

//const combinedProducts = [...productsJson, ...productsExcel];

test.describe("Add Products to Cart", () => {
  productsJson.forEach((prod) => {
    test(`Add ${prod.productName} to cart`, async ({ page }) => {
      const home = new HomePage(page);
      await home.navigate();

      logger.info(`Opening product ${prod.productName}`);
      await home.openProduct(prod.productName);

      const productPage = new ProductPage(page);
      await productPage.verifyProductName(prod.productName);
      
      const price = await productPage.getPrice();
      logger.info(`Price of ${prod.productName} is ${price}`);

      await productPage.addToCart();
      logger.info("Clicked Add to Cart");

      // Go to cart page
      await home.goToCart();

      const cart = new CartPage(page);
      await cart.verifyItemInCart(prod.productName);
      logger.info(`${prod.productName} is present in cart`);

      const total = await cart.getCartTotal();
      logger.info(`Cart total after adding: ${total}`);

      // (Optional) Place order with dummy data:
      // await cart.placeOrder("Test Name", "India", "City", "12345678", "12", "2025");
    });
  });
});
