import React from 'react';
import './SocialMediaLinks.css';

function SocialMediaLinks({ links }) {
  return (
    <div className="social-media-links">
      {links.linkedin && (
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          <i className="fab fa-linkedin"></i>
        </a>
      )}
      {links.twitter && (
        <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">
          <i className="fab fa-twitter"></i>
        </a>
      )}
      {links.instagram && (
        <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="social-link instagram">
          <i className="fab fa-instagram"></i>
        </a>
      )}
    </div>
  );
}

export default SocialMediaLinks; 