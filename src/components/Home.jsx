import React from 'react';
import Nav from './Nav';

function Home() {
  return (
    <section id="hero">
      <div id="header-container">
        <Nav />
      </div>
      <img alt="charles street sign" id="hero-img" src="https://www.charlesstsupply.com/img/logo.png" />
      <h1 id="hero-text">Boston&apos;s Oldest Hardware Store</h1>
    </section>
  );
}

export default Home;
