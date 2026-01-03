const { test, expect } = require("allure-playwright");
const bookingAPIRequestBody = require("../data/Post_RequestBody.json");

test('Create POST api request using JSON File', async({request}) =>{
// Create POST api request
const postAPIRespnse =await request.post(`/booking`,{    // Adding Base  main URL in config file and remain adding here in code  https://restful-booker.herokuapp.com/booking

    data:bookingAPIRequestBody
})

//Validate the status code
expect(postAPIRespnse.ok()).toBeTruthy();
expect(postAPIRespnse.status()).toBe(200);

const postAPIResponseBody = await postAPIRespnse.json();
console.log(postAPIResponseBody);

//valiade JSON api resopnse
expect(postAPIResponseBody.booking).toHaveProperty("firstname", "Mirza");
expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Kapoor")

//valiade nested JSON api resopnse
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout","2019-01-01")

})
