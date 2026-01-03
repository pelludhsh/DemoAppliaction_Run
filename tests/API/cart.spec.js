import { test, expect } from '../../src/fixtures/apiFixture.js';
import { testData } from '../../Utils/testData.js';

test('Add product to cart', async ({ cartAPI }) => {
  const res = await cartAPI.addToCart(
    testData.product.validProductId
  );

  expect(res.status()).toBe(200);
});


test('View cart', async ({ cartAPI }) => {
  const res = await cartAPI.viewCart();
  expect(res.status()).toBe(200);

  const body = await res.json();

  // Basic response validation
  expect(body).toBeDefined();

  // If Items exists, it should be an array
  if (body.Items !== undefined && body.Items !== null) {
    expect(Array.isArray(body.Items)).toBeTruthy();
  }
  console.log('Cart response:', body);

});


test('Delete cart item (DELETE simulation)', async ({ cartAPI }) => {
  const res = await cartAPI.deleteCartItem(
    testData.cart.deleteItemId
  );

  expect(res.status()).toBe(200);
});
