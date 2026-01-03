const { test, expect } = require("@playwright/test");
const bookingAPIRequestBody = require("../data/Post_RequestBody.json");

test("Create GET api request in playwright", async ({ request }) => {
// Create POST api request
const postAPIRespnse =await request.post(`/booking`,{    // Adding Base  main URL in config file and remain adding here in code  https://restful-booker.herokuapp.com/booking

    data:bookingAPIRequestBody
})
//Validate the status code
expect(postAPIRespnse.ok()).toBeTruthy();
expect(postAPIRespnse.status()).toBe(200);

const postAPIResponseBody = await postAPIRespnse.json();
console.log(postAPIResponseBody); // post rest APi is used to create a data or record

const bId=postAPIResponseBody.bookingid;

console.log("=================================================")

//frst we will get the response from (Post RestAPI), then using inside that booking ID, we will get the reponse by GET
//Getting the API response from booking ID (Get RestAPI)
  // create GET API Call
  const getAPIResponse = await request.get(`/booking/${bId}`)
  console.log(await getAPIResponse.json())  // Get rest API is used to get the created record by (Post RestAPI), to check wheather it is created or not

  // validate status code
  expect(getAPIResponse.ok()).toBeTruthy();
  expect(getAPIResponse.status()).toBe(200);
})