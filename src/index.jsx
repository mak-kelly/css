/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import Counter from './components/counter';
import Controls from './components/controls';

function App() {
//  return <div className="test">All the REACT are belong to us!</div>;
  return (
    <div>
      <Counter />
      <Controls />
    </div>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
