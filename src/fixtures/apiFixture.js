import { test as base } from '@playwright/test';
import { AuthService } from '../../src/pages/auth.service.js';
import { ProductService } from '../../src/pages/product.service.js';
import { CartService } from '../../src/pages/cart.service.js';

export const test = base.extend({
  authAPI: async ({ request }, use) => {
    await use(new AuthService(request));
  },

  productAPI: async ({ request }, use) => {
    await use(new ProductService(request));
  },

  cartAPI: async ({ request }, use) => {
    await use(new CartService(request));
  }
});

export { expect } from '@playwright/test';
