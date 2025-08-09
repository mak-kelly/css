import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';

function PlasterWashers() {
  const [quantities, setQuantities] = useState({
    'test-item': '0',
    '10-dozen': '0',
    '21-dozen': '0',
    500: '0',
    1000: '0',
    5000: '0',
    10000: '0',
    '90-piece-kit': '0',
    '175-piece-kit': '0',
    '250-piece-kit': '0',
  });

  const [rowTotals, setRowTotals] = useState({
    'test-item': 0,
    '10-dozen': 0,
    '21-dozen': 0,
    500: 0,
    1000: 0,
    5000: 0,
    10000: 0,
    '90-piece-kit': 0,
    '175-piece-kit': 0,
    '250-piece-kit': 0,
  });

  const prices = {
    'test-item': 0.00,
    '10-dozen': 24.00,
    '21-dozen': 35.00,
    500: 65.00,
    1000: 105.00,
    5000: 345.00,
    10000: 690.00,
    '90-piece-kit': 29.00,
    '175-piece-kit': 46.00,
    '250-piece-kit': 65.00,
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

  const calculateSubtotal = () => {
    return Object.values(rowTotals).reduce((sum, total) => sum + total, 0);
  };

  const buildLineItems = () => {
    const products = [
      { key: 'test-item', name: 'Test Item', price: 0 },
      { key: '10-dozen', name: '10 Dozen Plaster Washers', price: 2400 },
      { key: '21-dozen', name: '21 Dozen Plaster Washers', price: 3500 },
      { key: '500', name: '500 Plaster Washers', price: 6500 },
      { key: '1000', name: '1,000 Plaster Washers', price: 10500 },
      { key: '5000', name: '5,000 Plaster Washers', price: 34500 },
      { key: '10000', name: '10,000 Plaster Washers', price: 69000 },
      { key: '90-piece-kit', name: '90 Piece Plaster Washer Repair Kit', price: 2900 },
      { key: '175-piece-kit', name: '175 Piece Plaster Washer Repair Kit', price: 4600 },
      { key: '250-piece-kit', name: '250 Piece Plaster Washer Repair Kit', price: 6500 },
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
      <div id="plaster-washer-checkout-header">
        <Nav />
        <h1>Plaster Washer Checkout</h1>
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
              <td>Test Item</td>
              <td>0</td>
              <td>{formatCurrency(prices['test-item'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['test-item']}
                  onChange={(e) => handleQuantityChange('test-item', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('test-item', e.target.value)}
                  aria-label="Quantity for Test Item"
                />
              </td>
              <td>{formatCurrency(rowTotals['test-item'])}</td>
            </tr>
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
            <tr>
              <td>
                90 Piece Plaster Washer Repair Kit
                <br />
                <small className="product-description">
                  Plaster washers, rust proof coated screws and a screw driving bit.
                </small>
              </td>
              <td>90</td>
              <td>{formatCurrency(prices['90-piece-kit'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['90-piece-kit']}
                  onChange={(e) => handleQuantityChange('90-piece-kit', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('90-piece-kit', e.target.value)}
                  aria-label="Quantity for 90 Piece Plaster Washer Repair Kit"
                />
              </td>
              <td>{formatCurrency(rowTotals['90-piece-kit'])}</td>
            </tr>
            <tr>
              <td>
                175 Piece Plaster Washer Repair Kit
                <br />
                <small className="product-description">
                  Plaster washers, rust proof coated screws and a screw driving bit.
                </small>
              </td>
              <td>175</td>
              <td>{formatCurrency(prices['175-piece-kit'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['175-piece-kit']}
                  onChange={(e) => handleQuantityChange('175-piece-kit', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('175-piece-kit', e.target.value)}
                  aria-label="Quantity for 175 Piece Plaster Washer Repair Kit"
                />
              </td>
              <td>{formatCurrency(rowTotals['175-piece-kit'])}</td>
            </tr>
            <tr>
              <td>
                250 Piece Plaster Washer Repair Kit
                <br />
                <small className="product-description">
                  Plaster washers, rust proof coated screws and a screw driving bit.
                </small>
              </td>
              <td>250</td>
              <td>{formatCurrency(prices['250-piece-kit'])}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={quantities['250-piece-kit']}
                  onChange={(e) => handleQuantityChange('250-piece-kit', e.target.value)}
                  onBlur={(e) => handleQuantityBlur('250-piece-kit', e.target.value)}
                  aria-label="Quantity for 250 Piece Plaster Washer Repair Kit"
                />
              </td>
              <td>{formatCurrency(rowTotals['250-piece-kit'])}</td>
            </tr>
            <tr id="subtotal-row">
              <td colSpan="4">Subtotal:</td>
              <td>{formatCurrency(calculateSubtotal())}</td>
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
