import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './PipeSupports.css';
import adjustablePipeSaddle from '../../../assets/pipesupports/adjustable-pipe-saddle-with-U-Bolt.webp';

function PipeSupports() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (productId) => {
    if (selectedProduct === productId) {
      // If clicking the same card that's already selected, flip it
      setIsFlipped(!isFlipped);
    } else {
      // If clicking a new card, select it and reset flip state
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

  const pipeSupports = [
    {
      id: 1,
      name: "Adjustable Pipe Saddle with U-Bolt",
      constructionFeatures: [
        "The Adjustable Pipe Saddle offers stanchion-type support where vertical adjustment and stability of stationary pipe is required.",
        "Additional stability is provided by U-bolt attachment to stationary pipe"
      ],
      specifications: {
        sizeRange: "2″ to 12″",
        material: "Carbon steel",
        finish: "Black, Galvanized, or coated to the customer's specifications",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 2,
      name: "Adjustable Roller Hanger",
      constructionFeatures: [
        "Designed for maximum load-bearing capacity in industrial applications",
        "Features dual-bolt clamping mechanism for enhanced stability"
      ],
      specifications: {
        sizeRange: "1″ to 24″",
        material: "Stainless steel",
        finish: "Zinc-plated or custom coating available",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 3,
      name: "Adjustable Roller Stand",
      constructionFeatures: [
        "Enables thermal expansion and contraction movement",
        "Low-friction PTFE coating for smooth operation"
      ],
      specifications: {
        sizeRange: "3″ to 16″",
        material: "Carbon steel with PTFE coating",
        finish: "Industrial-grade powder coating",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 4,
      name: "Beam Clamp",
      constructionFeatures: [
        "Quick-adjust height mechanism for flexible installation",
        "Stable base design for uneven surfaces"
      ],
      specifications: {
        sizeRange: "2″ to 14″",
        material: "High-strength aluminum",
        finish: "Anodized coating",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 5,
      name: "Insulation Protection Shield",
      constructionFeatures: [
        "Thermal isolation properties prevent heat transfer",
        "High-density foam core with protective shell"
      ],
      specifications: {
        sizeRange: "1″ to 10″",
        material: "Composite materials",
        finish: "UV-resistant coating",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 6,
      name: "J Hanger",
      constructionFeatures: [
        "Constant support during thermal movement",
        "Adjustable spring tension for various loads"
      ],
      specifications: {
        sizeRange: "2″ to 20″",
        material: "Spring steel",
        finish: "Zinc-chromate plating",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 7,
      name: "Pipe Roller",
      constructionFeatures: [
        "Heavy-duty welded construction",
        "Multiple mounting options for versatile installation"
      ],
      specifications: {
        sizeRange: "4″ to 18″",
        material: "Structural steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 8,
      name: "Roller Stand",
      constructionFeatures: [
        "Elastomer lining reduces vibration transmission",
        "Split design for easy installation"
      ],
      specifications: {
        sizeRange: "1/2″ to 8″",
        material: "Steel with rubber lining",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 9,
      name: "Rubber Lined Clevis Hanger",
      constructionFeatures: [
        "Sealed bearing design for maintenance-free operation",
        "Adjustable height roller assembly"
      ],
      specifications: {
        sizeRange: "3″ to 24″",
        material: "Carbon steel",
        finish: "Industrial enamel coating",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 10,
      name: "Rubber Lined Riser Clamp",
      constructionFeatures: [
        "Space-saving design for wall installation",
        "Reinforced mounting points for secure attachment"
      ],
      specifications: {
        sizeRange: "1″ to 12″",
        material: "Steel alloy",
        finish: "Epoxy coating",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 11,
      name: "Rubber Lined Split Clamp",
      constructionFeatures: [
        "Vertical height adjustment capability",
        "Wide base for improved stability"
      ],
      specifications: {
        sizeRange: "2″ to 16″",
        material: "Carbon steel",
        finish: "Zinc-rich primer",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 12,
      name: "Rubber Lined Swivel Clamp",
      constructionFeatures: [
        "Enhanced gripping force with dual bolt design",
        "Compatible with standard strut channels"
      ],
      specifications: {
        sizeRange: "1/2″ to 10″",
        material: "Malleable iron",
        finish: "Electro-galvanized",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 13,
      name: "Rubber Lined U-Bolt",
      constructionFeatures: [
        "Pre-formed cradle design",
        "High load-bearing capacity"
      ],
      specifications: {
        sizeRange: "4″ to 20″",
        material: "Reinforced concrete",
        finish: "Sealed surface",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 14,
      name: "Rubber Lined U Strap Clamp",
      constructionFeatures: [
        "Quick-release height adjustment mechanism",
        "Non-marking support surface"
      ],
      specifications: {
        sizeRange: "1″ to 8″",
        material: "Aluminum alloy",
        finish: "Clear anodized",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 15,
      name: "Rubber Support Insert",
      constructionFeatures: [
        "Designed for high-temperature applications",
        "Welded construction for maximum durability"
      ],
      specifications: {
        sizeRange: "6″ to 24″",
        material: "Carbon steel",
        finish: "High-temp paint coating",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 16,
      name: "Spiral Duct Clamp",
      constructionFeatures: [
        "Directional control for pipe movement",
        "Adjustable clearance settings"
      ],
      specifications: {
        sizeRange: "2″ to 14″",
        material: "Stainless steel",
        finish: "Passivated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 17,
      name: "Standard Clevis Hanger",
      constructionFeatures: [
        "Space-efficient design for tight installations",
        "Multiple mounting configurations"
      ],
      specifications: {
        sizeRange: "1/2″ to 6″",
        material: "Steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 18,
      name: "Standard Riser Clamp",
      constructionFeatures: [
        "Maintains pipe alignment during thermal expansion",
        "Self-lubricating liner material"
      ],
      specifications: {
        sizeRange: "3″ to 18″",
        material: "Carbon steel with PTFE liner",
        finish: "Epoxy coated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 19,
      name: "Standard Split Clamp",
      constructionFeatures: [
        "Adaptable to multiple pipe sizes",
        "Quick-connect mounting system"
      ],
      specifications: {
        sizeRange: "1″ to 12″",
        material: "Galvanized steel",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 20,
      name: "Standard Swivel Clamp",
      constructionFeatures: [
        "Multi-level pipe support capability",
        "Adjustable support arms"
      ],
      specifications: {
        sizeRange: "2″ to 16″",
        material: "Structural steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 21,
      name: "Standard U Bolt",
      constructionFeatures: [
        "Continuous support for multiple pipes",
        "Integrated drainage system"
      ],
      specifications: {
        sizeRange: "1″ to 8″",
        material: "Aluminum",
        finish: "Mill finish",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 22,
      name: "Standard U Strap Clamp",
      constructionFeatures: [
        "Curved support surface for pipe protection",
        "Variable height adjustment"
      ],
      specifications: {
        sizeRange: "4″ to 20″",
        material: "Carbon steel",
        finish: "Industrial enamel",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 23,
      name: "Steel Turnbuckle",
      constructionFeatures: [
        "Wide footprint for load distribution",
        "Pre-drilled mounting holes"
      ],
      specifications: {
        sizeRange: "2″ to 24″",
        material: "Steel plate",
        finish: "Primer coated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 24,
      name: "Strut Beam Clamp",
      constructionFeatures: [
        "Multi-angle adjustment capability",
        "Reinforced mounting points"
      ],
      specifications: {
        sizeRange: "1″ to 10″",
        material: "Steel",
        finish: "Zinc-plated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 25,
      name: "Three Bolt Pipe Clamp",
      constructionFeatures: [
        "Elevated pipe support design",
        "Adjustable height columns"
      ],
      specifications: {
        sizeRange: "3″ to 16″",
        material: "Carbon steel",
        finish: "Epoxy coated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 26,
      name: "Two Bolt Clamp",
      constructionFeatures: [
        "Fixed point pipe restraint",
        "High-strength fastening system"
      ],
      specifications: {
        sizeRange: "2″ to 14″",
        material: "Steel alloy",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    },
    {
      id: 27,
      name: "Yoke Clamp",
      constructionFeatures: [
        "Universal beam flange attachment",
        "Quick installation design"
      ],
      specifications: {
        sizeRange: "1/2″ to 8″",
        material: "Forged steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: adjustablePipeSaddle
    }
  ];

  return (
    <div className="pipe-supports-page">
      <Link to="/mpci-website/products" className="back-button">
        ← Back to Products
      </Link>
      <PageHero 
        title="Pipe Support Solutions"
        description="Comprehensive range of pipe support products for industrial applications"
      />

      <div className="pipe-supports-container">
        <div className="pipe-supports-grid">
          {pipeSupports.map((product) => (
            <div 
              key={product.id} 
              className={`pipe-support-card ${selectedProduct === product.id ? 'zoomed' : ''} ${selectedProduct === product.id && isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="pipe-support-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="pipe-support-content">
                    <h2>{product.name}</h2>
                  </div>
                </div>
                <div className="card-back">
                  <div className="pipe-support-content">
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

export default PipeSupports; 