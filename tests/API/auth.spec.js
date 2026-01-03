import { test, expect } from '../../src/fixtures/apiFixture.js';
import { testData } from '../../Utils/testData.js';

/*
test('Signup new user', async ({ authAPI }) => {
  const username = `${testData.validUser.usernamePrefix}${Date.now()}`;

  const res = await authAPI.signup(
    username,
    testData.validUser.password
  );

  expect(res.status()).toBe(200);
});

*/

test('Login with valid credentials', async ({ authAPI }) => {
  const res = await authAPI.login(
    testData.validUser.username,
    testData.validUser.password
  );

  expect(res.status()).toBe(200);
});
