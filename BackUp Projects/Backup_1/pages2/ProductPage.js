const { expect } = require("@playwright/test");

class ProductPage {
  constructor(page) {
    this.page = page;

    this.productTitle = page.locator(".name"); // Product name on product page
    this.productPrice = page.locator(".price-container");
    this.addToCartButton = page.locator("a.btn-success"); // “Add to cart” button
  }

  async verifyProductName(expectedName) {
    await expect(this.productTitle).toHaveText(expectedName);
  }

  async addToCart() {
    await this.addToCartButton.click();
    // Demoblaze triggers alert “Product added.”
    const dialog = await this.page.waitForEvent("dialog", { timeout: 5000 });
    await dialog.accept();
  }

  async getPrice() {
    const priceText = await this.productPrice.textContent();
    // e.g. “$820 *includes tax” → parse integer
    const priceNum = parseInt(priceText.replace(/[^0-9]/g, ""));
    return priceNum;
  }
}

module.exports = { ProductPage };
