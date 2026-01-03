import { test, expect } from '../../src/fixtures/apiFixture.js';
import { testData } from '../../Utils/testData.js';

test('GET all products', async ({ productAPI }) => {
  const res = await productAPI.getAllProducts();

  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.Items.length).toBeGreaterThan(0);
});

test('POST get product by id', async ({ productAPI }) => {
  const res = await productAPI.getProductById(
    testData.product.validProductId
  );

  expect(res.status()).toBe(200);
});
