/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	API_CLIENTAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_CLIENTAPP_GRAPHQLAPIIDOUTPUT
	API_CLIENTAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const graphql = require("graphql");
const {
  getBooking,
  updateBooking,
  createBooking,
} = require("./services/api/bookings");
const { updateContractor } = require("./services/api/users");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method *
 **********************/

app.post("/bookings/create", async function (req, res) {
  const user = req.apiGateway.event.requestContext.authorizer?.claims;
  console.log(user);
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  const newBooking = {
    ...req.body,
    user_id: user.email,
    booking_status: "UNASSIGNED",
  };
  const createdBooking = await createBooking(newBooking);
  return res.json(createdBooking);
});

app.get("/bookings/:id/accept", async function (req, res) {
  /* code */
  const user = req.apiGateway.event.requestContext.authorizer?.claims;
  console.log(user);
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  const bookingId = req.params.id;
  const booking = await getBooking(bookingId);
  if (!booking) return res.status(400);
  const updatedBooking = await updateBooking(bookingId, {
    contractor_id: user.email,
    booking_status: "ASSIGNED",
  });
  return res.json(updatedBooking);
});

app.get("/bookings/:id/checkin", async function (req, res) {
  const user = req.apiGateway.event.requestContext.authorizer?.claims;
  console.log(user);
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  const bookingId = req.params.id;
  const booking = await getBooking(bookingId);
  if (!booking) return res.status(400);
  const updatedBooking = await updateBooking(bookingId, {
    booking_status: "ONGOING",
    checkin_time: Date.now().toString(),
  });
  return res.json(updatedBooking);
});

app.get("/bookings/:id/checkout", async function (req, res) {
  const user = req.apiGateway.event.requestContext.authorizer?.claims;
  console.log(user);
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  const bookingId = req.params.id;
  const booking = await getBooking(bookingId);
  if (!booking) return res.status(400);
  const updatedBooking = await updateBooking(bookingId, {
    booking_status: "COMPLETED",
    checkout_time: Date.now().toString(),
  });
  return res.json(updatedBooking);
});

app.post("/bookings/:id/review", async function (req, res) {
  try {
    /* code */
    const user = req.apiGateway.event.requestContext.authorizer?.claims;
    console.log(user, "nnjjnnjjnn");
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    const bookingId = req.params.id;
    console.log(bookingId, "jjjkkkjjjkk");
    const booking = await getBooking(bookingId);
    console.log(booking);
    const contractor = booking?.data?.getBooking?.contractor;
    if (!contractor) return res.status(400).json({ message: "no booking" });
    const { comment, rating } = req.body;
    const { id, ratingNumber, rating: contractorRating } = contractor;

    const updatedBooking = await updateBooking(bookingId, {
      comment: comment || null,
      rating: rating || null,
    });
    if (rating)
      await updateContractor(id, {
        rating:
          ((contractorRating || 0) * (ratingNumber || 0) + rating) /
          ((ratingNumber || 0) + 1),
        ratingNumber: (ratingNumber || 0) + 1,
      });
    return res.json({ updatedBooking });
  } catch (e) {
    console.log(e, { ...e });
  }
});
/****************************
 * Example post method *
 ****************************/

app.post("/bookings", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/bookings/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/bookings", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/bookings/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/bookings", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/bookings/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
