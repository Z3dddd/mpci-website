import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './RailSupports.css';
import railSupportImage from '../../../assets/railsupports/rail-support-default.webp';

function RailSupports() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (productId) => {
    if (selectedProduct === productId) {
      setIsFlipped(!isFlipped);
    } else {
      setSelectedProduct(productId);
      setIsFlipped(false);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setIsFlipped(false);
    document.body.style.overflow = 'auto';
  };

  const railSupports = [
    {
      id: 1,
      name: "Standard Rail Clamp",
      constructionFeatures: [
        "Heavy-duty steel construction for maximum durability",
        "Quick-release mechanism for easy installation and removal",
        "Anti-vibration padding for noise reduction"
      ],
      specifications: {
        sizeRange: "20mm to 75mm",
        material: "Carbon steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 2,
      name: "Adjustable Rail Bracket",
      constructionFeatures: [
        "Multi-position adjustment capability",
        "Integrated level indicator for precise alignment",
        "Load-bearing capacity up to 500kg"
      ],
      specifications: {
        sizeRange: "30mm to 100mm",
        material: "High-strength steel",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 3,
      name: "Rail Support Base Plate",
      constructionFeatures: [
        "Wide base design for enhanced stability",
        "Pre-drilled mounting holes for easy installation",
        "Reinforced corners for added strength"
      ],
      specifications: {
        sizeRange: "150mm x 150mm to 300mm x 300mm",
        material: "Steel plate",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 4,
      name: "Heavy-Duty Rail Guide",
      constructionFeatures: [
        "Precision-machined guide surfaces",
        "Self-lubricating bushings for smooth operation",
        "Dust-proof seals for extended service life"
      ],
      specifications: {
        sizeRange: "40mm to 120mm",
        material: "Alloy steel",
        finish: "Black oxide coating",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 5,
      name: "Rail Mounting Bracket",
      constructionFeatures: [
        "Universal mounting interface",
        "Adjustable height settings",
        "Built-in cable management system"
      ],
      specifications: {
        sizeRange: "25mm to 80mm",
        material: "Stainless steel",
        finish: "Brushed finish",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 6,
      name: "Seismic Rail Support",
      constructionFeatures: [
        "Shock-absorbing design for seismic protection",
        "Multi-directional movement capability",
        "High load capacity with safety factor"
      ],
      specifications: {
        sizeRange: "50mm to 150mm",
        material: "High-tensile steel",
        finish: "Epoxy coated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 7,
      name: "Rail End Stop",
      constructionFeatures: [
        "Energy-absorbing bumper design",
        "Quick-mount installation system",
        "Visual position indicators"
      ],
      specifications: {
        sizeRange: "30mm to 90mm",
        material: "Carbon steel with rubber bumper",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 8,
      name: "Sliding Rail Support",
      constructionFeatures: [
        "Low-friction sliding mechanism",
        "Temperature-compensating design",
        "Integrated locking system"
      ],
      specifications: {
        sizeRange: "35mm to 110mm",
        material: "Steel with PTFE coating",
        finish: "Corrosion-resistant coating",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    }
  ];

  return (
    <div className="rail-supports-page">
      <Link to="/mpci-website/products" className="back-button">
        ← Back to Products
      </Link>
      <PageHero 
        title="Rail Support Solutions"
        description="Advanced rail support systems for industrial applications"
      />

      <div className="rail-supports-container">
        <div className="rail-supports-grid">
          {railSupports.map((product) => (
            <div 
              key={product.id} 
              className={`rail-support-card ${selectedProduct === product.id ? 'zoomed' : ''} ${selectedProduct === product.id && isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="rail-support-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="rail-support-content">
                    <h2>{product.name}</h2>
                  </div>
                </div>
                <div className="card-back">
                  <div className="rail-support-content">
                    <h2>{product.name}</h2>
                    <h3>Construction Features:</h3>
                    {product.constructionFeatures.map((feature, index) => (
                      <p key={index} className="construction-feature">{feature}</p>
                    ))}
                    <h3>Product Specifications:</h3>
                    <ul className="specifications-list">
                      <li><strong>Size Range:</strong> {product.specifications.sizeRange}</li>
                      <li><strong>Material:</strong> {product.specifications.material}</li>
                      <li><strong>Finish:</strong> {product.specifications.finish}</li>
                      <li><strong>Manufacturer:</strong> {product.specifications.manufacturer}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="overlay" onClick={handleClose}>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
      )}
    </div>
  );
}

export default RailSupports; 