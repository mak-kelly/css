import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';

function PlasterWashers() {
  const [quantities, setQuantities] = useState({
    '10-dozen': '0',
    '21-dozen': '0',
    500: '0',
    1000: '0',
    5000: '0',
    10000: '0',
  });

  const [rowTotals, setRowTotals] = useState({
    '10-dozen': 0,
    '21-dozen': 0,
    500: 0,
    1000: 0,
    5000: 0,
    10000: 0,
  });

  const prices = {
    '10-dozen': 24.00,
    '21-dozen': 35.00,
    500: 65.00,
    1000: 105.00,
    5000: 345.00,
    10000: 690.00,
  };

  const handleQuantityChange = (key, value) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleQuantityBlur = (key, value) => {
    const numValue = value === '' ? 0 : parseInt(value, 10) || 0;
    setQuantities((prev) => ({
      ...prev,
      [key]: numValue,
    }));
  };

  useEffect(() => {
    const newRowTotals = {};

    Object.keys(quantities).forEach((key) => {
      const quantity = quantities[key] === '' ? 0 : parseInt(quantities[key], 10) || 0;
      const rowTotal = quantity * prices[key];
      newRowTotals[key] = rowTotal;
    });

    setRowTotals(newRowTotals);
  }, [quantities]);

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const buildLineItems = () => {
    const products = [
      { key: '10-dozen', name: '10 Dozen Plaster Washers', price: 2400 },
      { key: '21-dozen', name: '21 Dozen Plaster Washers', price: 3500 },
      { key: '500', name: '500 Plaster Washers', price: 6500 },
      { key: '1000', name: '1,000 Plaster Washers', price: 10500 },
      { key: '5000', name: '5,000 Plaster Washers', price: 34500 },
      { key: '10000', name: '10,000 Plaster Washers', price: 69000 },
    ];
    return products
      .filter((p) => Number(quantities[p.key]) > 0)
      .map((p) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: p.name },
          unit_amount: p.price,
        },
        quantity: Number(quantities[p.key]),
      }));
  };

  async function handleCheckout(lineItems) {
    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lineItems }),
    });
    const data = await response.json();
    window.location = data.url;
  }

  return (
    <>
      <Nav />
      <div id="plaster-washer-checkout-header">
        <h1>Plaster Washers</h1>
      </div>
      <div id="washer-table">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Washers</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10 Dozen Plaster Washers</td>
              <td>120</td>
              <td>{formatCurrency(prices['10-dozen'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={quantities['10-dozen']}
                  onChange={(e) => handleQuantityChange('10-dozen', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('10-dozen', e.target.value)}
                  aria-label="Quantity for 10 Dozen Plaster Washers"
                />
              </td>
              <td>{formatCurrency(rowTotals['10-dozen'])}</td>
            </tr>
            <tr>
              <td>21 Dozen Plaster Washers</td>
              <td>252</td>
              <td>{formatCurrency(prices['21-dozen'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['21-dozen']}
                  onChange={(e) => handleQuantityChange('21-dozen', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('21-dozen', e.target.value)}
                  aria-label="Quantity for 21 Dozen Plaster Washers"
                />
              </td>
              <td>{formatCurrency(rowTotals['21-dozen'])}</td>
            </tr>
            <tr>
              <td>500 Plaster Washers</td>
              <td>500</td>
              <td>{formatCurrency(prices['500'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['500']}
                  onChange={(e) => handleQuantityChange('500', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('500', e.target.value)}
                  aria-label="Quantity for 500 Plaster Washers"
                />
              </td>
              <td>{formatCurrency(rowTotals['500'])}</td>
            </tr>
            <tr>
              <td>1,000 Plaster Washers</td>
              <td>1000</td>
              <td>{formatCurrency(prices['1000'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['1000']}
                  onChange={(e) => handleQuantityChange('1000', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('1000', e.target.value)}
                  aria-label="Quantity for 1000 Plaster Washers"
                />
              </td>
              <td>{formatCurrency(rowTotals['1000'])}</td>
            </tr>
            <tr>
              <td>5,000 Plaster Washers</td>
              <td>5000</td>
              <td>{formatCurrency(prices['5000'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['5000']}
                  onChange={(e) => handleQuantityChange('5000', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('5000', e.target.value)}
                  aria-label="Quantity for 5000 Dozen Plaster Washers"
                />
              </td>
              <td>{formatCurrency(rowTotals['5000'])}</td>
            </tr>
            <tr>
              <td>10,000 Plaster Washers</td>
              <td>10000</td>
              <td>{formatCurrency(prices['10000'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['10000']}
                  onChange={(e) => handleQuantityChange('10000', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('10000', e.target.value)}
                  aria-label="Quantity for 10,000 Plaster Washers"
                />
              </td>
              <td>{formatCurrency(rowTotals['10000'])}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="checkout-button">
        <button
          type="button"
          onClick={() => handleCheckout(buildLineItems())}
          disabled={buildLineItems().length === 0}
        >
          Checkout with Stripe
        </button>
      </div>
      <Footer />
    </>
  );
}

export default PlasterWashers;
