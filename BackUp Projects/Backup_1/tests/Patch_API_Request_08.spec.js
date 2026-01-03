//Patch API means partial Update

const { test, expect } = require("@playwright/test");
const postRequest = require("../data/Post_RequestBody.json");
const tokenRequest = require("../data/token_request_body.json");
const putRequest = require("../data/put_request_body.json");
const { json } = require("stream/consumers");

test("Patch API in playwright api testing", async ({ request }) => {
  // create post api request using playwright
  const postAPIResponse = await request.post("/booking", {
    data: postRequest,
   
  });

   console.log(await postAPIResponse.json());
  const bookingId = await postAPIResponse.json();
  const bId = bookingId.bookingid;

  // create GET api request using playwright
  //when u use a booking ID to get JSON data, will get all keycomponents like FN,LN etc
  //But when u use params like FN and LN to get JSON data , u will get only booking ID
  const getAPIResponse = await request.get(`/booking/${bId}`, {
   /*
    params: {
      firstname: 'Mirza',
      lastname: 'Kapoor',
    },
    */
  });

  // validate status code
  console.log(await getAPIResponse.json());
  expect(getAPIResponse.ok()).toBeTruthy();
  expect(getAPIResponse.status()).toBe(200);

  // generate token
  const tokenAPIResponse = await request.post("/auth", {
    data: tokenRequest,
  });
  expect(tokenAPIResponse.ok()).toBeTruthy();
  expect(tokenAPIResponse.status()).toBe(200);

  console.log(await tokenAPIResponse.json());
  const tokenResponseBody = await tokenAPIResponse.json();
  const tokenNo = tokenResponseBody.token;

  // partial update booking details and for doing put or partial update in post it will ask 2 thing(Header and data of created JSON file)
  const patchAPIResponse = await request.patch(`/booking/${bId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${tokenNo}`
    },
    //static assiging value
    /* data: {
             firstname: "testers talk postman",
             lastname: "testers talk rest assured"
             },
*/
   //Dynamic assiging value
      data: putRequest,
  });

  console.log(await patchAPIResponse.json());
  expect(patchAPIResponse.ok()).toBeTruthy();
  expect(patchAPIResponse.status()).toBe(200);
});