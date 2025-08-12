/* eslint-disable new-cap */
require('dotenv').config();

const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const { STRIPE_SECRET_KEY } = process.env;
const stripe = Stripe(STRIPE_SECRET_KEY); // TODO: Replace with your Stripe secret key

app.use(cors({
  origin: [
    'http://localhost:5173', // Local development
    'https://css-nsgt.onrender.com', // Production frontend (corrected URL)
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: false,
}));
app.use(express.json());

// Test route to verify server is working
app.get('/', (req, res) => {
  res.json({ message: 'CSS API Server is running!' });
});

app.post('/create-checkout-session', async (req, res) => {
  console.log('Received checkout request:', req.body);
  const { lineItems } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://css-nsgt.onrender.com/success',
      cancel_url: 'https://css-nsgt.onrender.com/cancel',
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
