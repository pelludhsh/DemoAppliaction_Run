const { test, expect } = require("@playwright/test");
const postRequest = require("../data/Post_RequestBody.json");
const tokenRequest = require("../data/token_request_body.json");
const putRequest = require("../data/put_request_body.json");
const { json } = require("stream/consumers");

test("Delete API Request in playwright api testing", async ({ request }) => {
  // create post api request using playwright
  const postAPIResponse = await request.post("/booking", {
    data: postRequest,
  });

  console.log("==Post API==");
  console.log(await postAPIResponse.json());
  const bookingId = await postAPIResponse.json();
  const bId = bookingId.bookingid;  
  //bookingid is key component which is in json file(ex:-bookingid=234), we should use same key component

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
  console.log("==GET API==");
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
  const tokenNo = tokenResponseBody.token; //token is a key component which is in JSON file or in postman tool

  // update booking details
  // for getting token id fron postman tool, we need to submit headers and PUT request JSON body
 const putAPIResponse = await request.patch(`/booking/${bId}`, {
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
  console.log("==PUT API==");
  console.log(await putAPIResponse.json());
  expect(putAPIResponse.ok()).toBeTruthy();
  expect(putAPIResponse.status()).toBe(200);


 const deleteAPIResponse = await request.delete(`/booking/${bId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${tokenNo}`
    },
  });
  console.log("==Delete API==");
  expect(deleteAPIResponse.status()).toEqual(201);
  expect(deleteAPIResponse.statusText()).toBe("Created");
});
