import React from 'react';
import './PageHero.css';

function PageHero({ title, description }) {
  return (
    <div className="page-hero">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PageHero; 