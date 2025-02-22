import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>MPCI</h3>
          <p>For more information, please write to us.</p>
        </div>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaWhatsapp />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="footer-copyright">
          <p>© Copyright MPCI. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 