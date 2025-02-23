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
      name: "BCR-300/400 POLY SF Chemical Anchor",
      constructionFeatures: [
        "Polyester styrene-free formulation",
        "Fast curing time",
        "Suitable for medium to heavy loads"
      ],
      specifications: {
        sizeRange: "300ml/400ml cartridge",
        material: "Polyester resin",
        finish: "Gray",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 2,
      name: "BCR-300/400/165 VINIL Chemical Anchor",
      constructionFeatures: [
        "Vinylester-based formula",
        "High chemical resistance",
        "Excellent for wet conditions"
      ],
      specifications: {
        sizeRange: "300ml/400ml/165ml cartridge",
        material: "Vinylester resin",
        finish: "Gray",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 3,
      name: "BCR-900/470/265 EPOXY 21 Chemical Anchor",
      constructionFeatures: [
        "Pure epoxy formulation",
        "Maximum strength and durability",
        "Extended working time"
      ],
      specifications: {
        sizeRange: "900ml/470ml/265ml cartridge",
        material: "Epoxy resin",
        finish: "Gray",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 4,
      name: "NT-DA Drop-IN Anchor",
      constructionFeatures: [
        "Internal expansion mechanism",
        "Pre-assembled design",
        "Edge distance compatibility"
      ],
      specifications: {
        sizeRange: "M6 to M20",
        material: "Carbon steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 5,
      name: "NT-SA SHIELD Anchor",
      constructionFeatures: [
        "Four-segment expansion",
        "High pull-out resistance",
        "Torque-controlled expansion"
      ],
      specifications: {
        sizeRange: "M8 to M20",
        material: "Carbon steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 6,
      name: "Reduce Drop-In Anchor",
      constructionFeatures: [
        "Compact design",
        "Easy installation",
        "Flush mounting capability"
      ],
      specifications: {
        sizeRange: "M6 to M16",
        material: "Carbon steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 7,
      name: "Through Bolt NT-TB-A2",
      constructionFeatures: [
        "Stainless steel A2 grade",
        "High corrosion resistance",
        "Mechanical anchoring"
      ],
      specifications: {
        sizeRange: "M8 to M20",
        material: "Stainless Steel A2",
        finish: "Natural",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 8,
      name: "Through Bolt NT-TB-A4",
      constructionFeatures: [
        "Marine grade stainless steel",
        "Maximum corrosion resistance",
        "Heavy-duty applications"
      ],
      specifications: {
        sizeRange: "M8 to M20",
        material: "Stainless Steel A4",
        finish: "Natural",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 9,
      name: "Through Bolt NT-TB-HDG",
      constructionFeatures: [
        "Hot-dip galvanized coating",
        "Excellent outdoor durability",
        "Cost-effective solution"
      ],
      specifications: {
        sizeRange: "M8 to M20",
        material: "Carbon steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 10,
      name: "Through Bolt NT-TB1",
      constructionFeatures: [
        "Standard duty design",
        "Versatile applications",
        "Easy installation"
      ],
      specifications: {
        sizeRange: "M8 to M16",
        material: "Carbon steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 11,
      name: "Through Bolt NT-TB7",
      constructionFeatures: [
        "Heavy-duty performance",
        "High tensile strength",
        "Premium quality steel"
      ],
      specifications: {
        sizeRange: "M10 to M24",
        material: "High-grade carbon steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: anchoringSystemImage
    },
    {
      id: 12,
      name: "Through Bolt NWS-CE1",
      constructionFeatures: [
        "CE certified design",
        "European standard compliance",
        "Professional grade quality"
      ],
      specifications: {
        sizeRange: "M8 to M20",
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