import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <section className="products-hero">
        <h1>Our Products</h1>
        <p>Innovative modular construction solutions for every need</p>
      </section>

      <div className="products-container">
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image"></div>
            <h2>Modular Office Buildings</h2>
            <p>Custom-designed modular office spaces for modern workplaces</p>
            <ul className="product-features">
              <li>Quick installation</li>
              <li>Flexible configurations</li>
              <li>Energy-efficient design</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>

          <div className="product-card">
            <div className="product-image"></div>
            <h2>Industrial Facilities</h2>
            <p>Scalable industrial solutions for manufacturing and warehousing</p>
            <ul className="product-features">
              <li>Heavy-duty construction</li>
              <li>Customizable layouts</li>
              <li>Rapid deployment</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>

          <div className="product-card">
            <div className="product-image"></div>
            <h2>Residential Units</h2>
            <p>Modern modular homes and residential complexes</p>
            <ul className="product-features">
              <li>Premium finishes</li>
              <li>Multiple floor plans</li>
              <li>Sustainable materials</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products; 