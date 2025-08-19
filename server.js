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
    // Calculate total quantity of washers
    const washerQuantity = lineItems.reduce((total, item) => {
      // Check if the item is a washer (you may need to adjust this logic based on your product identification)
      if (item.price_data?.product_data?.name?.toLowerCase().includes('washer')
          || item.price_data?.product_data?.metadata?.type === 'washer') {
        return total + item.quantity;
      }
      return total;
    }, 0);

    console.log('Washer Quantity:', washerQuantity);
    console.log('Line Items:', JSON.stringify(lineItems, null, 2));

    // Base session configuration with shipping options for both countries
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
    };

    // Add shipping options based on washer quantity
    if (washerQuantity > 0 && washerQuantity <= 500) {
      // For orders with 1-500 washers, provide different options for US and Canada
      sessionConfig.shipping_options = [
        // US Options
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Standard Shipping (Free)',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 3500, // $35 in cents
              currency: 'usd',
            },
            display_name: 'Express Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 2,
              },
            },
          },
        },
        // Canada Option
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 3500, // $35 in cents
              currency: 'usd',
            },
            display_name: 'Standard Shipping to Canada',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 10,
              },
            },
          },
        },
      ];
    } else if (washerQuantity > 500) {
      // For orders with 500+ washers, provide free shipping options
      sessionConfig.shipping_options = [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Free Shipping (US & Canada)',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3,
              },
              maximum: {
                unit: 'business_day',
                value: 10,
              },
            },
          },
        },
      ];
    }

    console.log('Final sessionConfig shipping_options:', JSON.stringify(sessionConfig.shipping_options, null, 2));

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
