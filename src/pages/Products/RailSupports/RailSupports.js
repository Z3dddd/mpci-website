import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './RailSupports.css';
import angleFittings from '../../../assets/railsupports/angle-fittings.webp';
import cantileverArm from '../../../assets/railsupports/cantilever-arm.webp';
import channelBase from '../../../assets/railsupports/channel-base.webp';
import channelConnector from '../../../assets/railsupports/channel-connector.webp';
import channelNut from '../../../assets/railsupports/channel-nut.webp';
import channelUWashers from '../../../assets/railsupports/channel-u-washers.webp';
import constructionBrackets from '../../../assets/railsupports/construction-brackets.webp';
import dropInAnchors from '../../../assets/railsupports/drop-in-anchors.webp';
import eyeNut from '../../../assets/railsupports/eye-nut.webp';
import flatFittings from '../../../assets/railsupports/flat-fittings.webp';
import flatWashers from '../../../assets/railsupports/flat-washers.webp';
import hexNuts from '../../../assets/railsupports/hex-nuts.webp';
import hexagonalCouplingNuts from '../../../assets/railsupports/hexagonal-coupling-nuts.webp';
import slottedUChannel from '../../../assets/railsupports/slotted-u-channel.webp';
import threadedRods from '../../../assets/railsupports/threaded-rods.webp';
import universalFlange from '../../../assets/railsupports/universal-flange.webp';

function RailSupports() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (productId) => {
    setSelectedProduct(productId);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedProduct(null);
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
      image: angleFittings
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
      image: cantileverArm
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
      image: channelBase
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
      image: channelConnector
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
      image: channelNut
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
      image: channelUWashers
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
      image: constructionBrackets
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
      image: dropInAnchors
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
      image: eyeNut
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
      image: flatFittings
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
      image: flatWashers
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
      image: hexNuts
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
      image: hexagonalCouplingNuts
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
      image: slottedUChannel
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
      image: threadedRods
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
      image: universalFlange
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
              className="rail-support-card"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="rail-support-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="rail-support-content">
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
          {renderSelectedProduct(railSupports.find(p => p.id === selectedProduct))}
        </>
      )}
    </div>
  );
}

export default RailSupports; 