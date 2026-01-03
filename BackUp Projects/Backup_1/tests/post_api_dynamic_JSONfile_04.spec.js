const { test, expect } = require("@playwright/test");
import { faker } from "@faker-js/faker"; // Faker is a extension
const { DateTime } = require("luxon"); //luxon is NPM library
var dynamicPostRequest = require("../data/dynamic_request_body.json");
import { stringFormat } from "../Utils/common";

test("Create Post api request using dynamic JSON file in playwright", async ({
request,
}) => {
  // create test data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const totalPrice = faker.number.int(1000);
  const checkInDate = DateTime.now().toFormat("yyyy-MM-dd");
  const checkOutDate = DateTime.now().plus({ day: 5 }).toFormat("yyyy-MM-dd");

  var updatedRequestBody = stringFormat(JSON.stringify(dynamicPostRequest), firstName, lastName,"apple"
  //this method is used to convert the JSON file to string format
  );

  // create post api request using playwright
  const postAPIResponse = await request.post("/booking", {
    data: JSON.parse(updatedRequestBody),
  });

  // validate status code
  console.log(await postAPIResponse.json());

  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);

  // validate api response json obj
  const postAPIResponseBody = await postAPIResponse.json();

  expect(postAPIResponseBody.booking).toHaveProperty("firstname", firstName);
  expect(postAPIResponseBody.booking).toHaveProperty("lastname", lastName);
});