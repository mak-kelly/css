/* eslint-disable new-cap */
require('dotenv').config();

const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const { STRIPE_SECRET_KEY } = process.env;
const stripe = Stripe(STRIPE_SECRET_KEY);

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
  const { lineItems, shippingCountry } = req.body;
  try {
    // Calculate total quantity of washers
    const washerQuantity = lineItems.reduce((total, item) => {
      if (item.price_data?.product_data?.name?.toLowerCase().includes('washer')
          || item.price_data?.product_data?.metadata?.type === 'washer') {
        return total + item.quantity;
      }
      return total;
    }, 0);

    // Base session configuration
    const sessionConfig = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      billing_address_collection: 'required',
      automatic_tax: { enabled: true },
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      success_url: 'https://css-nsgt.onrender.com/success',
      cancel_url: 'https://css-nsgt.onrender.com/cancel',
      metadata: {
        washer_quantity: washerQuantity.toString(),
      },
    };

    // Apply Canada shipping fee automatically for Canadian orders with washers
    if (shippingCountry === 'CA' && washerQuantity > 0) {
      // Add $30 shipping fee as a line item for Canadian orders
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Shipping to Canada',
            description: 'Standard shipping fee for Canadian orders',
          },
          unit_amount: 3000, // $30 in cents
        },
        quantity: 1,
      });

      // Update the session with modified line items
      sessionConfig.line_items = lineItems;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
