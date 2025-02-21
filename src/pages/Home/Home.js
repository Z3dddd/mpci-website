import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Leading the Future of Modular Systems</h1>
          <p>Pioneering Innovation in Modular and Prefabricated Construction Systems</p>
          <Link to="/mpci-website/products" className="cta-button">Discover Our Solutions</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quality Engineering</h3>
            <p>State-of-the-art steel construction with precision engineering</p>
          </div>
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Rapid deployment and installation of modular structures</p>
          </div>
          <div className="feature-card">
            <h3>Sustainable Solutions</h3>
            <p>Eco-friendly construction methods and materials</p>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image"></div>
            <h3>Commercial Complex</h3>
            <p>Modern modular office space solution</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>Industrial Facility</h3>
            <p>Large-scale manufacturing unit</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>Residential Development</h3>
            <p>Multi-story modular housing project</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 