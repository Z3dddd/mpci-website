import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Our Company</h1>
        <p>Leading the revolution in modular and pre-fabricated steel construction</p>
      </section>

      <section className="company-info">
        <div className="info-content">
          <h2>Our Story</h2>
          <p>With over two decades of experience in the construction industry, we've been at the forefront of innovative building solutions. Our commitment to quality and sustainability has made us a trusted partner in the modular construction sector.</p>
        </div>
        <div className="info-image"></div>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>Pushing the boundaries of construction technology</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>Uncompromising standards in every project</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Committed to eco-friendly construction practices</p>
          </div>
          <div className="value-card">
            <h3>Reliability</h3>
            <p>Delivering projects on time and within budget</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          <Link to="/team/syed-attaullah-quadri" className="team-member">
            <div className="member-image"></div>
            <h3>Syed Attaullah Quadri</h3>
            <p>Chief Executive Officer</p>
          </Link>
          <Link to="/team/amtul-khatija" className="team-member">
            <div className="member-image"></div>
            <h3>Amtul Khatija</h3>
            <p>Technical Director</p>
          </Link>
          <Link to="/team/syed-zaid-quadri" className="team-member">
            <div className="member-image"></div>
            <h3>Syed Zaid Quadri</h3>
            <p>Operations Manager</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About; 