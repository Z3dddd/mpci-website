import React from 'react';
import { Link } from 'react-router-dom';
import './PipeSupports.css';
import adjustablePipeSaddle from '../../../assets/pipesupports/adjustable-pipe-saddle-with-U-Bolt.webp';

function PipeSupports() {
  const pipeSupports = [
    {
      id: 1,
      name: "Adjustable Pipe Saddle with U-Bolt",
      image: adjustablePipeSaddle
    },
    {
      id: 2,
      name: "Adjustable Roller Hanger",
      description: "Versatile roller hanger system for suspended pipe installations with thermal movement",
      features: [
        "360° pipe movement capability",
        "Load capacity up to 1000kg",
        "Integrated roller bearing system",
        "Height adjustable design"
      ],
      image: "https://images.unsplash.com/photo-1590644365607-1c5a0c72c150?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Adjustable Roller Stand",
      description: "Heavy-duty floor-mounted roller stand for horizontal pipe support and movement",
      features: [
        "Height adjustment range 300-500mm",
        "Dual-axis roller system",
        "Base plate with mounting holes",
        "Corrosion-resistant coating"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="pipe-supports-page">
      <Link to="/products" className="back-button">
        ← Back to Products
      </Link>
      <section className="pipe-supports-hero">
        <h1>Pipe Support Solutions</h1>
        <p>Comprehensive range of pipe support products for industrial applications</p>
      </section>

      <div className="pipe-supports-container">
        <div className="pipe-supports-grid">
          {pipeSupports.map((product) => (
            <div key={product.id} className="pipe-support-card">
              <div 
                className="pipe-support-image"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              {product.id === 1 ? (
                <div className="pipe-support-content simple">
                  <h2>{product.name}</h2>
                </div>
              ) : (
                <div className="pipe-support-content">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <h3>Key Features:</h3>
                  <ul className="pipe-support-features">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PipeSupports; 