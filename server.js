/* eslint-disable new-cap */
require('dotenv').config();

const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const { STRIPE_SECRET_KEY } = process.env;
const stripe = Stripe(STRIPE_SECRET_KEY); // TODO: Replace with your Stripe secret key

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { lineItems } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
