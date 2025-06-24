import React, { useState } from 'react';

const PRODUCTS = [
  { description: '10 Dozen Plaster Washers', washers: 120, price: 24.00 },
  { description: '21 Dozen Plaster Washers', washers: 252, price: 35.00 },
  { description: '500 Plaster Washers', washers: 500, price: 65.00 },
  { description: '1,000 Plaster Washers', washers: 1000, price: 105.00 },
  { description: '5,000 Plaster Washers', washers: 5000, price: 345.00 },
  { description: '10,000 Plaster Washers', washers: 10000, price: 630.00 },
  {
    description: '90 Piece Plaster Washer Repair Kit', washers: 45, price: 29.00, note: 'Plaster washers, rust proof coated screws and a screw driving bit.',
  },
  {
    description: '175 Piece Plaster Washer Repair Kit', washers: 87, price: 46.00, note: 'Plaster washers, rust proof coated screws and a screw driving bit.',
  },
  {
    description: '250 Piece Plaster Washer Repair Kit', washers: 125, price: 65.00, note: 'Plaster washers, rust proof coated screws and a screw driving bit.',
  },
];

function PlasterWashers() {
  const [quantities, setQuantities] = useState(Array(PRODUCTS.length).fill(0));

  const handleQuantityChange = (idx, value) => {
    const newQuantities = [...quantities];
    newQuantities[idx] = Math.max(0, parseInt(value, 10) || 0);
    setQuantities(newQuantities);
  };

  const rowTotals = PRODUCTS.map((p, i) => (quantities[i] * p.price));
  const subTotal = rowTotals.reduce((a, b) => a + b, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Montserrat, sans-serif' }}>
        <thead>
          <tr style={{ background: '#10253c', color: '#fff' }}>
            <th style={{ textAlign: 'left', padding: '8px' }}>DESCRIPTION</th>
            <th>WASHERS</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTALS</th>
          </tr>
        </thead>
        <tbody>
          {PRODUCTS.map((p, i) => (
            <tr key={p.description} style={{ background: i % 2 === 0 ? '#fff' : '#f4f6f8' }}>
              <td style={{ padding: '8px', fontWeight: 500 }}>
                {p.description}
                {p.note && <div style={{ fontSize: '0.9em', color: '#444', fontWeight: 400 }}>{p.note}</div>}
              </td>
              <td style={{ textAlign: 'center' }}>{p.washers}</td>
              <td style={{ textAlign: 'center' }}>${p.price.toFixed(2)}</td>
              <td style={{ textAlign: 'center' }}>
                <label htmlFor={`quantity-${i}`} style={{ display: 'none' }}>Quantity for {p.description}</label>
                <input
                  id={`quantity-${i}`}
                  type="number"
                  min="0"
                  value={quantities[i]}
                  onChange={(e) => handleQuantityChange(i, e.target.value)}
                  style={{ width: '3em', textAlign: 'center', fontSize: '1em' }}
                />
              </td>
              <td style={{ textAlign: 'center' }}>${rowTotals[i].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '2rem', textAlign: 'right', fontFamily: 'Montserrat, sans-serif' }}>
        <div>Sub-Total: <b>${subTotal.toFixed(2)}</b></div>
        {/* Add more summary rows as needed */}
      </div>
    </div>
  );
}

export default PlasterWashers;
