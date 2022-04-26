const express = require("express");
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51JvASxI4vWfsmwHSnQ9C2lYlzlzUNgga9Ly12jus8PwDw1HPqMCpkt1P9EvWs0XBm2Ckhz1Y2cQ7KhI80kounBUZ00Vq1n4NiT');
const CUSTOMER_ID = "cus_LZvTnj6SXVNe0Y"

app.use(express.static("public"));
app.use(express.json());

app.post("/create-customer", async (req, res) => {
    // Create a customer
    // const customer = await stripe.customers.create({
    //     address: {
    //         city: "Jaipur",
    //         country: "in",
    //         line1: "Dianapps MN",
    //         postal_code: "302017",
    //         state: "Rajasthan"
    //     },
    //     email: "ayushi.dangayach@dianapps.com",
    //     name: "Ayushi Dangayach",
    //     phone: "+919929163234"
    // });
    // res.send(customer);

    // Create a payment intent if you want to deduct right away
    // const paymentIntent = await stripe.paymentIntents.create({
    //     customer: "cus_LZvTnj6SXVNe0Y",
    //     setup_future_usage: 'off_session',
    //     amount: 50,
    //     currency: 'usd',
    //     automatic_payment_methods: {
    //       enabled: true,
    //     },
    // });
    // res.send(paymentIntent);

    // Create a Setup Intent
    // const setupIntent = await stripe.setupIntents.create({
    //     customer: 'cus_LZvTnj6SXVNe0Y',
    //     payment_method_types: ['card'],
    //     usage: "off_session"
    // });
    // res.send(setupIntent);

    /****************************************/
    // Get payment methods of the user
    // const paymentMethods = await stripe.paymentMethods.list({
    //     customer: CUSTOMER_ID,
    //     type: 'card',
    // });
    // res.send(paymentMethods);

    // Charge from a payment method later on
    try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: 50,
          currency: 'usd',
          customer: CUSTOMER_ID,
          payment_method: 'pm_1KsmGUI4vWfsmwHSKcaUs9nt',
          off_session: true,
          confirm: true,
        });
        res.send(paymentIntent);
      } catch (err) {
        // Error code will be authentication_required if authentication is needed
        console.log('Error code is: ', err.code);
        const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(err.raw.payment_intent.id);
        console.log('PI retrieved: ', paymentIntentRetrieved.id);
        res.send({err, paymentIntentRetrieved});
    }

});

app.listen(4242, () => console.log("Node server listening on port 4242!"));