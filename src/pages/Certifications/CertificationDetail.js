import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CertificationDetail.css';

function CertificationDetail() {
  const { id } = useParams();

  const certifications = {
    'iso-9001': {
      title: 'ISO 9001:2015',
      type: 'Quality Management System',
      description: 'ISO 9001:2015 is the international standard for quality management systems (QMS). This certification demonstrates our ability to consistently provide products and services that meet customer and regulatory requirements.',
      benefits: [
        'Enhanced customer satisfaction',
        'Improved process integration',
        'Evidence-based decision making',
        'Continuous improvement culture'
      ],
      validThrough: '2025',
      auditingBody: 'International Certification Authority',
      scope: 'Design, manufacture, and installation of modular construction solutions'
    },
    'iso-14001': {
      title: 'ISO 14001:2015',
      type: 'Environmental Management',
      description: 'ISO 14001:2015 certification confirms our commitment to environmental responsibility and sustainable practices in all our operations.',
      benefits: [
        'Reduced environmental impact',
        'Sustainable resource usage',
        'Waste management optimization',
        'Environmental legal compliance'
      ],
      validThrough: '2024',
      auditingBody: 'Global Environmental Certifiers',
      scope: 'Environmental management in construction and manufacturing processes'
    },
    'ohsas-18001': {
      title: 'OHSAS 18001',
      type: 'Occupational Health & Safety',
      description: 'OHSAS 18001 certification demonstrates our dedication to maintaining the highest standards in workplace safety and health management.',
      benefits: [
        'Enhanced workplace safety',
        'Reduced workplace incidents',
        'Improved employee wellbeing',
        'Systematic risk management'
      ],
      validThrough: '2024',
      auditingBody: 'Safety Standards International',
      scope: 'Workplace safety in construction and manufacturing operations'
    },
    'leed': {
      title: 'LEED Certification',
      type: 'Green Building Standards',
      description: 'Our LEED Platinum certification recognizes our excellence in implementing sustainable and eco-friendly construction practices.',
      benefits: [
        'Energy efficiency excellence',
        'Sustainable materials usage',
        'Water conservation practices',
        'Indoor environmental quality'
      ],
      validThrough: 'Platinum Level',
      auditingBody: 'U.S. Green Building Council',
      scope: 'Sustainable building design and construction practices'
    }
  };

  const certification = certifications[id];

  if (!certification) {
    return (
      <div className="certification-detail">
        <div className="certification-not-found">
          <h1>Certification Not Found</h1>
          <Link to="/certifications" className="back-button">Back to Certifications</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="certification-detail">
      <div className="certification-detail-hero">
        <h1>{certification.title}</h1>
        <p>{certification.type}</p>
      </div>

      <div className="certification-detail-content">
        <Link to="/certifications" className="back-button">← Back to Certifications</Link>
        
        <div className="certification-detail-card">
          <div className="certification-detail-image"></div>
          
          <div className="certification-info">
            <div className="info-section">
              <h2>Overview</h2>
              <p>{certification.description}</p>
            </div>

            <div className="info-section">
              <h2>Key Benefits</h2>
              <ul className="benefits-list">
                {certification.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="certification-meta">
              <div className="meta-item">
                <h3>Valid Through</h3>
                <p>{certification.validThrough}</p>
              </div>
              <div className="meta-item">
                <h3>Auditing Body</h3>
                <p>{certification.auditingBody}</p>
              </div>
              <div className="meta-item">
                <h3>Scope</h3>
                <p>{certification.scope}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationDetail; 