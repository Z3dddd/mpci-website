import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <PageHero 
        title="Our Products"
        description="Comprehensive support and mounting solutions for industrial applications"
      />

      <div className="products-container">
        <div className="products-grid">
          <Link to="/mpci-website/products/pipe-supports" className="product-card">
            <div className="product-image pipe-supports"></div>
            <h2>Pipe Supports</h2>
            <p>Pipe support solutions for secure installations</p>
            <ul className="product-features">
              <li>Heavy load capacity</li>
              <li>Corrosion resistant</li>
              <li>Multiple size options</li>
            </ul>
          </Link>

          <Link to="/mpci-website/products/modular-systems" className="product-card">
            <div className="product-image modular-systems"></div>
            <h2>Modular Systems</h2>
            <p>Modular support systems for complex installations</p>
            <ul className="product-features">
              <li>Flexible configurations</li>
              <li>Easy assembly</li>
              <li>Scalable design</li>
            </ul>
          </Link>

          <Link to="/mpci-website/products/rail-supports" className="product-card">
            <div className="product-image rail-supports"></div>
            <h2>Rail Supports</h2>
            <p>Rail support systems for industrial applications</p>
            <ul className="product-features">
              <li>High stability</li>
              <li>Precision alignment</li>
              <li>Durable construction</li>
            </ul>
          </Link>

          <Link to="/mpci-website/products/anchoring-systems" className="product-card">
            <div className="product-image anchoring-systems"></div>
            <h2>Anchoring Systems</h2>
            <p>Anchoring solutions for maximum stability</p>
            <ul className="product-features">
              <li>Superior grip strength</li>
              <li>Multiple surface compatibility</li>
              <li>Easy installation</li>
            </ul>
          </Link>

          <Link to="/mpci-website/products/seismic-isolators" className="product-card">
            <div className="product-image seismic-isolators"></div>
            <h2>Seismic & Vibration Isolators</h2>
            <p>Isolation systems for seismic & vibration protection</p>
            <ul className="product-features">
              <li>Shock absorption</li>
              <li>Seismic protection</li>
              <li>Noise reduction</li>
            </ul>
          </Link>

          <Link to="/mpci-website/products/duct-accessories" className="product-card">
            <div className="product-image duct-accessories"></div>
            <h2>Duct Accessories</h2>
            <p>Comprehensive range of duct mounting accessories</p>
            <ul className="product-features">
              <li>Universal compatibility</li>
              <li>Quick installation</li>
              <li>Durable materials</li>
            </ul>
          </Link>

          <Link to="/mpci-website/products/steel-structures" className="product-card">
            <div className="product-image steel-structure"></div>
            <h2>Steel Structures</h2>
            <p>Heavy-duty steel structural solutions for industrial applications</p>
            <ul className="product-features">
              <li>High load capacity</li>
              <li>Custom configurations</li>
              <li>Professional installation</li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products; 