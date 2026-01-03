const { expect } = require("@playwright/test");

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartRows = page.locator("tr.success");
    this.homeLink = page.getByRole('link', { name: 'Home' }); 
    // this.totalSpan = page.locator("#totalp"); // total value
    // Total price (BEST locator)
    this.totalHeading = page.locator("#totalp");




  }

  async verifyItemInCart(productName) {
    //await expect(this.cartRows).toContainText(productName);
    await expect(this.cartRows.first()).toContainText(productName);

  }

 // async getCartTotal() {
  //  const totalText = await this.totalSpan.textContent();
  //  return parseInt(totalText, 10);
  //}

async getCartTotal() {
    const totalText = await this.totalHeading.textContent();
    return Number(totalText);
  }




  async goToCart() {
    await this.cartLink.click();
  }

async goToHome() {
    await this.homeLink.click();
  }



}

module.exports = { CartPage };




  

  