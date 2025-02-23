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
      name: "Angle Fittings",
      constructionFeatures: [
        "Precision-engineered corner connections",
        "Multiple mounting configurations",
        "High load-bearing capacity"
      ],
      specifications: {
        sizeRange: "30mm to 90mm",
        material: "Carbon steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 2,
      name: "Cantilever Arm",
      constructionFeatures: [
        "Extended load support capability",
        "Adjustable mounting positions",
        "Reinforced structure design"
      ],
      specifications: {
        sizeRange: "200mm to 600mm",
        material: "High-strength steel",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 3,
      name: "Channel Base",
      constructionFeatures: [
        "Stable foundation support",
        "Multiple mounting holes",
        "Even load distribution"
      ],
      specifications: {
        sizeRange: "100mm to 300mm",
        material: "Steel plate",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 4,
      name: "Channel Connector",
      constructionFeatures: [
        "Secure joining mechanism",
        "Easy installation design",
        "Versatile connection options"
      ],
      specifications: {
        sizeRange: "40mm to 100mm",
        material: "Carbon steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 5,
      name: "Channel Nut",
      constructionFeatures: [
        "Self-aligning design",
        "Spring-loaded mechanism",
        "Quick installation feature"
      ],
      specifications: {
        sizeRange: "M6 to M12",
        material: "Carbon steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 6,
      name: "Channel U Washers",
      constructionFeatures: [
        "Enhanced load distribution",
        "Anti-vibration design",
        "Corrosion-resistant coating"
      ],
      specifications: {
        sizeRange: "M6 to M12",
        material: "Stainless steel",
        finish: "Natural",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 7,
      name: "Construction Brackets",
      constructionFeatures: [
        "Heavy-duty construction",
        "Multiple mounting options",
        "Reinforced corners"
      ],
      specifications: {
        sizeRange: "50mm to 150mm",
        material: "Carbon steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 8,
      name: "Drop in Anchors",
      constructionFeatures: [
        "Quick installation design",
        "High pull-out strength",
        "Pre-set depth stop"
      ],
      specifications: {
        sizeRange: "M8 to M16",
        material: "Carbon steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 9,
      name: "Eye Nut",
      constructionFeatures: [
        "360-degree rotation",
        "High tensile strength",
        "Smooth inner surface"
      ],
      specifications: {
        sizeRange: "M6 to M20",
        material: "Carbon steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 10,
      name: "Flat Fittings",
      constructionFeatures: [
        "Versatile mounting options",
        "Space-saving design",
        "High strength-to-weight ratio"
      ],
      specifications: {
        sizeRange: "25mm to 100mm",
        material: "Steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 11,
      name: "Flat Washers",
      constructionFeatures: [
        "Even load distribution",
        "Precision thickness",
        "Burr-free edges"
      ],
      specifications: {
        sizeRange: "M6 to M20",
        material: "Stainless steel",
        finish: "Natural",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 12,
      name: "Hex Nuts",
      constructionFeatures: [
        "Precise thread matching",
        "High tensile strength",
        "Chamfered edges"
      ],
      specifications: {
        sizeRange: "M6 to M20",
        material: "Carbon steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 13,
      name: "Hexagonal Coupling Nuts",
      constructionFeatures: [
        "Extended thread engagement",
        "High tensile strength",
        "Precision machined threads"
      ],
      specifications: {
        sizeRange: "M8 to M16",
        material: "Carbon steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 14,
      name: "Slotted U Channel",
      constructionFeatures: [
        "Continuous slot design",
        "High load capacity",
        "Multiple mounting options"
      ],
      specifications: {
        sizeRange: "41x41mm to 41x82mm",
        material: "Steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 15,
      name: "Threaded Rods",
      constructionFeatures: [
        "Full-length threading",
        "High tensile strength",
        "Precise thread pitch"
      ],
      specifications: {
        sizeRange: "M6 to M20",
        material: "Carbon steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: railSupportImage
    },
    {
      id: 16,
      name: "Universal Flange",
      constructionFeatures: [
        "Multi-purpose mounting",
        "High load capacity",
        "Versatile connection points"
      ],
      specifications: {
        sizeRange: "50mm to 150mm",
        material: "Carbon steel",
        finish: "Hot-dip galvanized",
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