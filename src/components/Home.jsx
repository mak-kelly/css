import React from 'react';
import Nav from './Nav';
import Carousel from './ui/carousel';

function Home() {
  const featuredBrands = [
    { name: 'Benjamin Moore', description: 'Premium paints and coatings' },
    { name: 'Leatherman', description: 'Multi-tools and knives' },
    { name: 'Miele', description: 'High-end appliances' },
    { name: 'Weber', description: 'Grills and outdoor cooking' },
    { name: 'Yeti', description: 'Coolers and drinkware' },
  ];

  return (
    <>
      <section id="hero">
        <div id="header-container">
          <img alt="wood beam" id="wood-beam" src="./src/img/wooden beam.png" />
          <Nav />
        </div>
        <img alt="charles street sign" id="hero-img" src="https://www.charlesstsupply.com/img/logo.png" />
      </section>
      <section id="featured-brands" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Featured Brands
          </h2>
          <Carousel items={featuredBrands} />
        </div>
      </section>
    </>
  );
}

export default Home;
