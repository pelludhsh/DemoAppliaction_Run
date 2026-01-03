const { test, expect } = require("allure-playwright")
import { faker } from "@faker-js/faker"; // this faker extension is used to generate the  random dynamic test data and numbers
const { DateTime } = require ('luxon') // this luxon is a npm Package is used to genrate random dynamic dates.


test("Create POST api request using dynamic request body in playwright", async ({request,}) => {
    // create test data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const totalPrice = faker.number.int(1000); // it will generate random number up to 1000

  const checkInDate = DateTime.now().toFormat("yyyy-MM-dd");
  const checkOutDate = DateTime.now().plus({ day: 5 }).toFormat("yyyy-MM-dd");
// Create POST api request
const postAPIRespnse =await request.post(`/booking`,{    // Adding Base  main URL in config file and remain adding here in code  https://restful-booker.herokuapp.com/booking
    data:{
    "firstname": firstName,
    "lastname": lastName,
    "totalprice": totalPrice,
    "depositpaid": true,
    "bookingdates": {
        "checkin": checkInDate,
        "checkout": checkOutDate
    },
    "additionalneeds": "super bowls"
}
})

//Validate the status code
expect(postAPIRespnse.ok()).toBeTruthy();
expect(postAPIRespnse.status()).toBe(200);

const postAPIResponseBody = await postAPIRespnse.json();
console.log(postAPIResponseBody);

//valiade JSON api resopnse
expect(postAPIResponseBody.booking).toHaveProperty("firstname", firstName);
expect(postAPIResponseBody.booking).toHaveProperty("lastname", lastName)

//valiade nested JSON api resopnse
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin",checkInDate);
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout",checkOutDate)

})
