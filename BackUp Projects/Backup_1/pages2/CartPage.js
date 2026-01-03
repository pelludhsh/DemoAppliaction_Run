const { expect } = require("@playwright/test");

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartRows = page.locator("tr.success"); // each product row in cart
    this.placeOrderButton = page.locator("button[data-target='#orderModal']");
    this.totalSpan = page.locator("#totalp"); // total value
  }

  async verifyItemInCart(productName) {
    await expect(this.cartRows).toContainText(productName);
  }

  async getCartTotal() {
    const totalText = await this.totalSpan.textContent();
    return parseInt(totalText, 10);
  }

  /*
  async placeOrder(name, country, city, creditCard, month, year) {
    await this.placeOrderButton.click();
    // fill order form modal
    await this.page.fill("#name", name);
    await this.page.fill("#country", country);
    await this.page.fill("#city", city);
    await this.page.fill("#card", creditCard);
    await this.page.fill("#month", month);
    await this.page.fill("#year", year);
    await this.page.click("button[onclick='purchaseOrder()']");
    const dialog = await this.page.waitForEvent("dialog");
    await dialog.accept();
  }
    */
}
module.exports = { CartPage };

