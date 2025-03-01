import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './DuctAccessories.css';
import aluminiumFoilTape from '../../../assets/ductaccessories/aluminium-foil-tape.webp';
import aluminiumFskTape from '../../../assets/ductaccessories/aluminium-fsk-tape.webp';
import boltSlideFlange from '../../../assets/ductaccessories/bolt-slide-flange-system.webp';
import coat3036 from '../../../assets/ductaccessories/coat-30-36.webp';
import cornerSlideClamps from '../../../assets/ductaccessories/corner-slide-cleats-clamps.webp';
import ductSealant from '../../../assets/ductaccessories/duct-sealant-3-17.webp';
import foamTapeGasket from '../../../assets/ductaccessories/foam-tape-gasket.webp';
import glue8110 from '../../../assets/ductaccessories/glue-81-10.webp';

function DuctAccessories() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (productId) => {
    setSelectedProduct(productId);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const ductAccessories = [
    {
      id: 1,
      name: "Aluminium Foil Tape",
      constructionFeatures: [
        "High tensile strength",
        "Excellent adhesion",
        "Moisture and vapor resistant"
      ],
      specifications: {
        sizeRange: "48mm to 72mm width",
        material: "Pure aluminum foil with acrylic adhesive",
        finish: "Bright aluminum",
        manufacturer: "NTEICO"
      },
      image: aluminiumFoilTape
    },
    {
      id: 2,
      name: "Aluminium FSK Tape",
      constructionFeatures: [
        "Foil-Scrim-Kraft backing",
        "High performance adhesive",
        "Excellent vapor barrier"
      ],
      specifications: {
        sizeRange: "48mm to 96mm width",
        material: "Aluminum foil with fiber reinforcement",
        finish: "FSK laminated",
        manufacturer: "NTEICO"
      },
      image: aluminiumFskTape
    },
    {
      id: 3,
      name: "Bolt Slide on Flange System",
      constructionFeatures: [
        "Easy assembly design",
        "High strength corners",
        "Airtight sealing"
      ],
      specifications: {
        sizeRange: "20mm to 40mm profile",
        material: "Galvanized steel",
        finish: "Zinc coated",
        manufacturer: "NTEICO"
      },
      image: boltSlideFlange
    },
    {
      id: 4,
      name: "Coat 30-36",
      constructionFeatures: [
        "High coverage rate",
        "Quick drying formula",
        "UV resistant"
      ],
      specifications: {
        sizeRange: "1-5 gallon containers",
        material: "Water-based coating",
        finish: "Semi-gloss white",
        manufacturer: "NTEICO"
      },
      image: coat3036
    },
    {
      id: 5,
      name: "Corner and Slide Cleats and Clamps",
      constructionFeatures: [
        "Pre-formed corners",
        "Quick installation",
        "Secure locking mechanism"
      ],
      specifications: {
        sizeRange: "20mm to 40mm",
        material: "Galvanized steel",
        finish: "Mill finish",
        manufacturer: "NTEICO"
      },
      image: cornerSlideClamps
    },
    {
      id: 6,
      name: "Duct Sealant 3-17",
      constructionFeatures: [
        "Indoor/outdoor application",
        "Excellent adhesion",
        "Mold resistant"
      ],
      specifications: {
        sizeRange: "1-5 gallon containers",
        material: "Water-based sealant",
        finish: "Gray",
        manufacturer: "NTEICO"
      },
      image: ductSealant
    },
    {
      id: 7,
      name: "Foam Tape/Gasket",
      constructionFeatures: [
        "Closed cell structure",
        "Self-adhesive backing",
        "Weather resistant"
      ],
      specifications: {
        sizeRange: "3mm to 25mm thickness",
        material: "EPDM foam",
        finish: "Black",
        manufacturer: "NTEICO"
      },
      image: foamTapeGasket
    },
    {
      id: 8,
      name: "Glue 81-10",
      constructionFeatures: [
        "Fast-setting formula",
        "High bonding strength",
        "Temperature resistant"
      ],
      specifications: {
        sizeRange: "1-5 gallon containers",
        material: "Industrial adhesive",
        finish: "Clear",
        manufacturer: "NTEICO"
      },
      image: glue8110
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
    <div className="duct-accessories-page">
      <Link to="/mpci-website/products" className="back-button">
        ← Back to Products
      </Link>
      <PageHero 
        title="Duct Accessories"
        description="Complete range of duct mounting and installation accessories"
      />

      <div className="duct-accessories-container">
        <div className="duct-accessories-grid">
          {ductAccessories.map((product) => (
            <div 
              key={product.id} 
              className="duct-accessory-card"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="duct-accessory-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="duct-accessory-content">
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
          {renderSelectedProduct(ductAccessories.find(p => p.id === selectedProduct))}
        </>
      )}
    </div>
  );
}

export default DuctAccessories; 