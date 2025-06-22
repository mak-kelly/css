import React from 'react';
import Nav from './Nav';

function Home() {
  return (
    <>
      <section id="hero">
        <Nav />
        <h1 id="hero-title">Charles Street Supply</h1>
      </section>
      <section id="featured-brands">
        <h2>Featured Brands</h2>
      </section>
    </>
  );
}

export default Home;
