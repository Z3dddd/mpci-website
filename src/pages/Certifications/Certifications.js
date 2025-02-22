import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero';
import './Certifications.css';

function Certifications() {
  return (
    <div className="certifications">
      <PageHero 
        title="Our Certifications"
        description="Industry standards and quality assurance certifications"
      />

      <div className="certifications-container">
        <div className="certifications-grid">
          <Link to="/mpci-website/certifications/iso-9001" className="certification-card">
            <div className="certification-image"></div>
            <h2>ISO 9001:2015</h2>
            <p>Quality Management System</p>
            <div className="certification-details">
              <p>Certified for excellence in quality management processes and customer satisfaction.</p>
              <span className="validity">Valid through 2025</span>
            </div>
          </Link>

          <Link to="/mpci-website/certifications/iso-14001" className="certification-card">
            <div className="certification-image"></div>
            <h2>ISO 14001:2015</h2>
            <p>Environmental Management</p>
            <div className="certification-details">
              <p>Recognition for our commitment to environmental responsibility and sustainable practices.</p>
              <span className="validity">Valid through 2024</span>
            </div>
          </Link>

          <Link to="/mpci-website/certifications/ohsas-18001" className="certification-card">
            <div className="certification-image"></div>
            <h2>OHSAS 18001</h2>
            <p>Occupational Health & Safety</p>
            <div className="certification-details">
              <p>Certified for maintaining highest standards in workplace safety and health management.</p>
              <span className="validity">Valid through 2024</span>
            </div>
          </Link>

          <Link to="/mpci-website/certifications/leed" className="certification-card">
            <div className="certification-image"></div>
            <h2>LEED Certification</h2>
            <p>Green Building Standards</p>
            <div className="certification-details">
              <p>Recognized for implementing sustainable and eco-friendly construction practices.</p>
              <span className="validity">Platinum Level</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Certifications; 