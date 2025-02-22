import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './AnchoringSystems.css';
import anchoringSystemImage from '../../../assets/anchoringsystems/anchoring-system-default.webp';

function AnchoringSystems() {
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

  const anchoringSystems = [
    {
      id: 1,
      name: "Heavy-Duty Expansion Anchor",
      constructionFeatures: [
        "High-strength carbon steel construction",
        "Pre-assembled for quick installation",
        "Multiple size options for various applications"
      ],
      specifications: {
        sizeRange: "M8 to M20",
        material: "Carbon Steel Grade 8.8",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 2,
      name: "Chemical Anchor System",
      constructionFeatures: [
        "Two-component epoxy-based formula",
        "High load capacity for heavy-duty applications",
        "Suitable for cracked and non-cracked concrete"
      ],
      specifications: {
        sizeRange: "M10 to M24",
        material: "Chemical resin with hardener",
        finish: "N/A",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 3,
      name: "Wedge Anchor",
      constructionFeatures: [
        "One-piece anchor for permanent installation",
        "Immediate load-bearing capability",
        "Excellent pull-out resistance"
      ],
      specifications: {
        sizeRange: "1/4\" to 1\"",
        material: "Carbon steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 4,
      name: "Drop-In Anchor",
      constructionFeatures: [
        "Internal expansion mechanism",
        "Flush mounting capability",
        "Easy installation process"
      ],
      specifications: {
        sizeRange: "M6 to M16",
        material: "Zinc alloy",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 5,
      name: "Sleeve Anchor",
      constructionFeatures: [
        "Versatile anchoring solution",
        "Full-body expansion",
        "Removable design"
      ],
      specifications: {
        sizeRange: "3/8\" to 3/4\"",
        material: "Carbon steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 6,
      name: "Concrete Screw Anchor",
      constructionFeatures: [
        "Self-tapping thread design",
        "No expansion pressure on base material",
        "Removable and reusable"
      ],
      specifications: {
        sizeRange: "3/16\" to 3/8\"",
        material: "Hardened steel",
        finish: "Blue zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 7,
      name: "Toggle Bolt",
      constructionFeatures: [
        "Spring-loaded wings",
        "High load capacity in hollow materials",
        "Easy installation process"
      ],
      specifications: {
        sizeRange: "1/8\" to 1/2\"",
        material: "Steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 8,
      name: "Hammer Drive Anchor",
      constructionFeatures: [
        "One-piece expansion anchor",
        "Quick installation",
        "Cost-effective solution"
      ],
      specifications: {
        sizeRange: "6mm to 14mm",
        material: "Carbon steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    }
  ];

  return (
    <div className="anchoring-systems-page">
      <Link to="/mpci-website/products" className="back-button">
        ← Back to Products
      </Link>
      <PageHero 
        title="Anchoring Systems"
        description="Advanced anchoring solutions for secure installations"
      />

      <div className="anchoring-systems-container">
        <div className="anchoring-systems-grid">
          {anchoringSystems.map((product) => (
            <div 
              key={product.id} 
              className={`anchoring-system-card ${selectedProduct === product.id ? 'zoomed' : ''} ${selectedProduct === product.id && isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="anchoring-system-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="anchoring-system-content">
                    <h2>{product.name}</h2>
                  </div>
                </div>
                <div className="card-back">
                  <div className="anchoring-system-content">
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

export default AnchoringSystems; 