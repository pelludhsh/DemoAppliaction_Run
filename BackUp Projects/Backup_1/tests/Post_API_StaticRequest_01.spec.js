const { test, expect } = require("allure-playwright")
test('Create POST api request using static request body', async({request}) =>{
// Create POST api request
const postAPIRespnse =await request.post(`/booking`,{    // Adding Base  main URL in config file and remain adding here in code  https://restful-booker.herokuapp.com/booking

    data:{
    "firstname": "Akshay",
    "lastname": "Gowda",
    "totalprice": 1000,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
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
expect(postAPIResponseBody.booking).toHaveProperty("firstname", "Akshay");
expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Gowda")

//valiade nested JSON api resopnse
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout","2019-01-01")

})
