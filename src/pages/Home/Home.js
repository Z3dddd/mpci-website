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
            <h3>Sobha Creek Vista</h3>
            <p>Luxury residential development</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>Binghatti Heights</h3>
            <p>Modern residential tower</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>AZIZI RIVIERA</h3>
            <p>Waterfront development project</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>Justice Palace Renovation</h3>
            <p>Historical building renovation</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>Saudi Railway Passenger Stations</h3>
            <p>Transportation infrastructure</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>King Khalid International Airport</h3>
            <p>Aviation facility development</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>King Saud University</h3>
            <p>Educational institution development</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>King Khalid University</h3>
            <p>Academic campus project</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>KAP-4</h3>
            <p>Infrastructure development</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>King Fahad Medical City</h3>
            <p>Healthcare facility complex</p>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <h3>Jeddah Cargo</h3>
            <p>Logistics facility development</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 