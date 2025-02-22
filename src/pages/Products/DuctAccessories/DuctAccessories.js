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
      name: "Duct Support Bracket",
      constructionFeatures: [
        "Heavy-duty steel construction",
        "Adjustable height mechanism",
        "Pre-drilled mounting holes"
      ],
      specifications: {
        sizeRange: "100mm to 1000mm",
        material: "Galvanized steel",
        finish: "Zinc coated",
        manufacturer: "NTEICO"
      },
      image: ductAccessoryImage
    },
    {
      id: 2,
      name: "Duct Hanging System",
      constructionFeatures: [
        "Threaded rod compatibility",
        "Quick-lock mechanism",
        "Load distribution design"
      ],
      specifications: {
        sizeRange: "200mm to 1500mm",
        material: "Carbon steel",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: ductAccessoryImage
    },
    {
      id: 3,
      name: "Duct Sealing Tape",
      constructionFeatures: [
        "High adhesion strength",
        "Weather-resistant properties",
        "Easy application"
      ],
      specifications: {
        sizeRange: "48mm to 96mm width",
        material: "Aluminum foil with acrylic adhesive",
        finish: "Metallic silver",
        manufacturer: "NTEICO"
      },
      image: ductAccessoryImage
    },
    {
      id: 4,
      name: "Flexible Duct Connector",
      constructionFeatures: [
        "Fire-resistant fabric",
        "Vibration isolation",
        "Easy installation"
      ],
      specifications: {
        sizeRange: "100mm to 600mm",
        material: "Neoprene-coated fiberglass",
        finish: "Black neoprene coating",
        manufacturer: "NTEICO"
      },
      image: ductAccessoryImage
    },
    {
      id: 5,
      name: "Duct Access Door",
      constructionFeatures: [
        "Airtight seal design",
        "Insulated construction",
        "Quick-release latches"
      ],
      specifications: {
        sizeRange: "200mm x 200mm to 600mm x 600mm",
        material: "Galvanized steel with insulation",
        finish: "Mill finish",
        manufacturer: "NTEICO"
      },
      image: ductAccessoryImage
    },
    {
      id: 6,
      name: "Volume Control Damper",
      constructionFeatures: [
        "Opposed blade design",
        "Manual or motorized operation",
        "Position indicator"
      ],
      specifications: {
        sizeRange: "150mm to 800mm diameter",
        material: "Aluminum blades with steel frame",
        finish: "Natural aluminum",
        manufacturer: "NTEICO"
      },
      image: ductAccessoryImage
    },
    {
      id: 7,
      name: "Duct Joint Clamp",
      constructionFeatures: [
        "Quick-connect design",
        "Rubber gasket seal",
        "Corrosion-resistant"
      ],
      specifications: {
        sizeRange: "100mm to 1200mm",
        material: "Stainless steel with EPDM gasket",
        finish: "Stainless steel",
        manufacturer: "NTEICO"
      },
      image: ductAccessoryImage
    },
    {
      id: 8,
      name: "Acoustic Duct Liner",
      constructionFeatures: [
        "Sound absorption properties",
        "Thermal insulation",
        "Fire-resistant"
      ],
      specifications: {
        sizeRange: "12mm to 50mm thickness",
        material: "Fiberglass with protective coating",
        finish: "Black protective facing",
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