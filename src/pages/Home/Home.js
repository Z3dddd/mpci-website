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
            <div className="project-image sobha-creek"></div>
            <h3>Sobha Creek Vista</h3>
            <p>In the prestigious Sobha Creek Vistas project, NTEICO played a pivotal role by providing Rubber Support Inserts and U Strap Clamps for the HVAC systems, ensuring the highest standards of quality and efficiency.</p>
          </div>
          <div className="project-card">
            <div className="project-image binghatti-heights"></div>
            <h3>Binghatti Heights</h3>
            <p>Binghatti Heights, a 36-storey residential tower in JVC, Dubai, completed in December 2023, offers unique facilities and easy access to key landmarks, with NTEICO providing sophisticated HVAC and plumbing systems, creating a tranquil sanctuary in the city's hustle.</p>
          </div>
          <div className="project-card">
            <div className="project-image azizi-riviera"></div>
            <h3>AZIZI RIVIERA</h3>
            <p>The project features specialized materials including LINED SPLIT CLAMP, LINED U STRAP, LINED U BOLT, PLAIN SPLIT CLAMP, U STRAP, U BOLT, and RSI for comprehensive infrastructure support.</p>
          </div>
          <div className="project-card">
            <div className="project-image justice-palace"></div>
            <h3>Justice Palace Renovation</h3>
            <p>NTEICO worked on renovating the Justice Palace in Riyadh, focusing on improving and further developing the infrastructure to meet modern standards while preserving its historical significance.</p>
          </div>
          <div className="project-card">
            <div className="project-image railway-stations"></div>
            <h3>Saudi Railway Passenger Stations</h3>
            <p>NTEICO developed infrastructure across 6 stations spanning Riyadh, Al Majma'ah, Qurayyat, Hail, Al-Qassim, and Al Jowf, covering a total track length of 1300km.</p>
          </div>
          <div className="project-card">
            <div className="project-image kkia"></div>
            <h3>King Khalid International Airport</h3>
            <p>NTEICO successfully developed comprehensive infrastructure solutions for multiple terminals at the Riyadh airport, enhancing operational efficiency and passenger experience.</p>
          </div>
          <div className="project-card">
            <div className="project-image ksu"></div>
            <h3>King Saud University</h3>
            <p>NTEICO developed infrastructure for multiple facilities including residential towers, villas, parking, Building 42, medical research and cardiac centre, and two preparatory colleges.</p>
          </div>
          <div className="project-card">
            <div className="project-image kku"></div>
            <h3>King Khalid University</h3>
            <p>NTEICO executed tunnel infrastructure development spanning 10km across the KKU campus, providing comprehensive utility solutions for the entire university complex.</p>
          </div>
          <div className="project-card">
            <div className="project-image kap4"></div>
            <h3>KAP-4</h3>
            <p>As a MOI (Ministry of Interior) project, NTEICO collaborated with various directorates including prison, police, and civil defense on the King Abdullah Security Compound Project, providing essential infrastructure.</p>
          </div>
          <div className="project-card">
            <div className="project-image kfmc"></div>
            <h3>King Fahad Medical City</h3>
            <p>NTEICO equipped 6 residential towers with state-of-the-art support systems and necessary infrastructure, ensuring long-term sustainability and functionality.</p>
          </div>
          <div className="project-card">
            <div className="project-image jeddah-cargo"></div>
            <h3>Jeddah Cargo</h3>
            <p>NTEICO led the design and construction of a new cargo terminal for Saudi Airlines Cargo Company, delivering modern cargo handling infrastructure.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 