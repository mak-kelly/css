import React from 'react';
import Nav from './Nav';

function Home() {
  return (
    <section id="hero">
      <div id="header-container">
        <img alt="wood beam" id="wood-beam" src="./src/img/wooden beam.png" />
        <Nav />
      </div>
      <img alt="charles street sign" id="hero-img" src="https://www.charlesstsupply.com/img/logo.png" />
    </section>
  );
}

export default Home;
