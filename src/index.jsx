/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router';

import Home from './components/Home';
import Services from './components/Services';
import PlasterWashers from './components/PlasterWashers';
import About from './components/About';
import PlasterWasherCheckout from './components/PlasterWasherCheckout';
import Shop from './components/Shop';
import ScrollToTop from './components/ScrollToTop';

function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop />  {/* Always listens for route changes */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/plaster-washers" element={<PlasterWashers />} />
          <Route path="/plaster-washer-checkout" element={<PlasterWasherCheckout />} />
          <Route path="/cancel" element={<Navigate to="/plaster-washer-checkout" />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
