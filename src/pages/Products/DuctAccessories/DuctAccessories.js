import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './DuctAccessories.css';
import ductAccessoryImage from '../../../assets/ductaccessories/duct-accessory-default.webp';

function DuctAccessories() {
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
      image: ductAccessoryImage
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
      image: ductAccessoryImage
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
      image: ductAccessoryImage
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
      image: ductAccessoryImage
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
      image: ductAccessoryImage
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
      image: ductAccessoryImage
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
      image: ductAccessoryImage
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
      image: ductAccessoryImage
    }
  ];

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
              className={`duct-accessory-card ${selectedProduct === product.id ? 'zoomed' : ''} ${selectedProduct === product.id && isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="duct-accessory-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="duct-accessory-content">
                    <h2>{product.name}</h2>
                  </div>
                </div>
                <div className="card-back">
                  <div className="duct-accessory-content">
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

export default DuctAccessories; 