import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './AnchoringSystems.css';

// Import all product images
import bcrPolySF from '../../../assets/anchoringsystems/bcr-300-400-poly.webp';
import bcrVinil from '../../../assets/anchoringsystems/bcr-300-400-vinil.webp';
import bcrEpoxy from '../../../assets/anchoringsystems/bcr-900-470-epoxy.webp';
import ntDaDropin from '../../../assets/anchoringsystems/nt-da-dropin.webp';
import ntSaShield from '../../../assets/anchoringsystems/nt-sa-shield.webp';
import reduceDropin from '../../../assets/anchoringsystems/reduce-dropin.webp';
import ntTbA2 from '../../../assets/anchoringsystems/nt-tb-a2.webp';
import ntTbA4 from '../../../assets/anchoringsystems/nt-tb-a4.webp';
import ntTbHdg from '../../../assets/anchoringsystems/nt-tb-hdg.webp';
import ntTb1 from '../../../assets/anchoringsystems/nt-tb1.webp';
import ntTb7 from '../../../assets/anchoringsystems/nt-tb7.webp';
import nwsCe1 from '../../../assets/anchoringsystems/nws-ce1.webp';

function AnchoringSystems() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (productId) => {
    setSelectedProduct(productId);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedProduct(null);
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
      image: bcrPolySF
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
      image: bcrVinil
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
      image: bcrEpoxy
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
      image: ntDaDropin
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
      image: ntSaShield
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
      image: reduceDropin
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
      image: ntTbA2
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
      image: ntTbA4
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
      image: ntTbHdg
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
      image: ntTb1
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
      image: ntTb7
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
      image: nwsCe1
    }
  ];

  const renderSelectedProduct = (product) => {
    return (
      <div className="side-by-side-container">
        <div className="side-by-side-image-card">
          <div 
            className="side-by-side-image"
            style={{ backgroundImage: `url(${product.image})` }}
          />
        </div>
        <div className="side-by-side-info-card">
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
    );
  };

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
              className="anchoring-system-card"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="anchoring-system-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="anchoring-system-content">
                    <h2>{product.name}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <>
          <div className="overlay" onClick={handleClose}>
            <button className="close-button" onClick={handleClose}>×</button>
          </div>
          {renderSelectedProduct(anchoringSystems.find(p => p.id === selectedProduct))}
        </>
      )}
    </div>
  );
}

export default AnchoringSystems; 