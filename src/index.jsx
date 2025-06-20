/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter, Routes, Route, NavLink,
  useParams,
} from 'react-router';
import Counter from './components/counter';
import Controls from './components/controls';

function About(props) {
  return <div> All there is to know about me </div>;
}

function Welcome(props) {
  return <div>Welcome</div>;
}

function CounterAndControls(props) {
  return (
    <div>
      <Counter />
      <Controls />
    </div>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/counter-and-controls">Counter</NavLink></li>
      </ul>
    </nav>
  );
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <ul>
          <li><NavLink to="/test/id1">test id1</NavLink></li>
          <li><NavLink to="/test/id2">test id2</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
          <Route path="counter-and-controls" element={<CounterAndControls />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
