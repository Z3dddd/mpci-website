import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './SteelStructures.css';

// Import images
import centerBeamClamp from '../../../assets/steelstructures/center-beam-clamp.webp';
import constantHangersSupports from '../../../assets/steelstructures/constant-hangers-supports.webp';
import horizontalConstantSupport from '../../../assets/steelstructures/horizontal-constant-support.webp';
import horizontalTraveler from '../../../assets/steelstructures/horizontal-traveler.webp';
import mediumWeldedSteelBracket from '../../../assets/steelstructures/medium-welded-steel-bracket.webp';
import springCushionRollHanger from '../../../assets/steelstructures/spring-cushion-roll-hanger.webp';
import variableSpringHanger from '../../../assets/steelstructures/variable-spring-hanger.webp';

function SteelStructures() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (productId) => {
    setSelectedProduct(productId);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const steelStructures = [
    {
      id: 1,
      name: "Center Beam Clamp",
      constructionFeatures: [
        "Heavy-duty beam clamps for secure structural connections",
        "Designed for maximum load-bearing capacity",
        "Quick and easy installation process"
      ],
      specifications: {
        sizeRange: "2″ to 12″",
        material: "High-strength steel",
        finish: "Zinc-plated or custom coating",
        manufacturer: "NTEICO"
      },
      image: centerBeamClamp
    },
    {
      id: 2,
      name: "Constant Hangers and Supports",
      constructionFeatures: [
        "Maintains constant support under varying loads",
        "Advanced load distribution system",
        "Vibration dampening technology"
      ],
      specifications: {
        sizeRange: "1″ to 24″",
        material: "Carbon steel",
        finish: "Industrial-grade coating",
        manufacturer: "NTEICO"
      },
      image: constantHangersSupports
    },
    {
      id: 3,
      name: "Horizontal Constant Support",
      constructionFeatures: [
        "Specialized for horizontal pipe runs",
        "Precision load balancing mechanism",
        "Adjustable support angles"
      ],
      specifications: {
        sizeRange: "3″ to 16″",
        material: "Structural steel",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: horizontalConstantSupport
    },
    {
      id: 4,
      name: "Horizontal Traveler",
      constructionFeatures: [
        "Enables smooth horizontal movement",
        "Low-friction roller system",
        "Adjustable positioning mechanism"
      ],
      specifications: {
        sizeRange: "2″ to 14″",
        material: "Steel with PTFE bearings",
        finish: "Corrosion-resistant coating",
        manufacturer: "NTEICO"
      },
      image: horizontalTraveler
    },
    {
      id: 5,
      name: "Medium Welded Steel Bracket",
      constructionFeatures: [
        "Robust welded construction",
        "Multiple mounting options",
        "High load capacity design"
      ],
      specifications: {
        sizeRange: "4″ to 12″",
        material: "Welded steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: mediumWeldedSteelBracket
    },
    {
      id: 6,
      name: "Spring Cushion Roll Hanger",
      constructionFeatures: [
        "Integrated shock absorption",
        "Variable load support",
        "Smooth operation mechanism"
      ],
      specifications: {
        sizeRange: "2″ to 20″",
        material: "Spring steel with cushioning",
        finish: "Anti-corrosion coating",
        manufacturer: "NTEICO"
      },
      image: springCushionRollHanger
    },
    {
      id: 7,
      name: "Variable Spring Hanger",
      constructionFeatures: [
        "Adjustable spring rate",
        "Load indication system",
        "Easy maintenance design"
      ],
      specifications: {
        sizeRange: "1″ to 24″",
        material: "High-grade spring steel",
        finish: "Zinc-chromate plating",
        manufacturer: "NTEICO"
      },
      image: variableSpringHanger
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
          <div className="steel-structure-content">
            <h2>{product.name}</h2>
          </div>
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
    <div className="steel-structures-page">
      <Link to="/mpci-website/products" className="back-button">
        ← Back to Products
      </Link>
      <PageHero 
        title="Steel Structures"
        description="Comprehensive range of steel structural solutions for industrial applications"
      />

      <div className="steel-structures-container">
        <div className="steel-structures-grid">
          {steelStructures.map((product) => (
            <div 
              key={product.id} 
              className="steel-structure-card"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="steel-structure-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="steel-structure-content">
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
          {renderSelectedProduct(steelStructures.find(p => p.id === selectedProduct))}
        </>
      )}
    </div>
  );
}

export default SteelStructures; 