import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/mpci-website" className="navbar-logo">
          <div className="logo-wrapper">
            <span className="company-name">CMSI</span>
            <div className="tagline-wrapper">
              <span className="company-tagline-top">CoreFrame Modular</span>
              <span className="company-tagline-bottom">Systems Industry</span>
            </div>
          </div>
        </Link>

        <div className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/mpci-website" className={location.pathname === '/mpci-website' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/mpci-website/about" className={location.pathname === '/mpci-website/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/mpci-website/products" className={location.pathname === '/mpci-website/products' ? 'active' : ''}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/mpci-website/certifications" className={location.pathname === '/mpci-website/certifications' ? 'active' : ''}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="/mpci-website/catalogue" className={location.pathname === '/mpci-website/catalogue' ? 'active' : ''}>
              Catalogue
            </Link>
          </li>
          <li>
            <Link to="/mpci-website/contact" className={location.pathname === '/mpci-website/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
