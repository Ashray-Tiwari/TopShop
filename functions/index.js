const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51MLSTHSAjWMYbWjA6p8JyEizn3wzARQTGqBh8vdRQ2o69VxiZanIq0PujFTRtryE8gTI5zykaZrWnBpJoyLyMVpn009l2CO8S5')

// API

// App config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/',(request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ",total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency:"inr",
    });

    // OK - CREATED
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command

exports.api = functions.https.onRequest(app);