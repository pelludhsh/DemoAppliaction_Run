 class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator("#login2");           // “Log in” link
    this.signUpLink = page.locator("#signin2");          // “Sign up” link
    this.categories = page.locator(".list-group a");     // category links (Phones, Laptops, ...
    this.productTiles = page.locator(".card-block .hrefch"); // product name links
    this.cartLink = page.locator("#cartur");             // “Cart” link
  }

  async navigate() {
    await this.page.goto("/");
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async clickSignup() {
    await this.signUpLink.click();
  }

  async selectCategory(categoryName) {
    await this.categories.filter({ hasText: categoryName }).click();
  }

  async openProduct(productName) {
    await this.productTiles.filter({ hasText: productName }).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
module.exports = { HomePage };
