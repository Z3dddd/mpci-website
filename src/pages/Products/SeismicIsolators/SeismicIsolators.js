import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../../components/PageHero/PageHero';
import './SeismicIsolators.css';
import seismicIsolatorImage from '../../../assets/seismicisolators/seismic-isolator-default.webp';

function SeismicIsolators() {
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

  const seismicIsolators = [
    {
      id: 1,
      name: "Spring Mount Isolator",
      constructionFeatures: [
        "Free-standing spring design",
        "Built-in leveling mechanism",
        "High deflection capability"
      ],
      specifications: {
        loadRange: "25 to 2500 kg",
        material: "Steel springs with neoprene elements",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 2,
      name: "Elastomeric Mount",
      constructionFeatures: [
        "Natural rubber construction",
        "Multi-directional isolation",
        "Low profile design"
      ],
      specifications: {
        loadRange: "50 to 1000 kg",
        material: "Natural rubber compound",
        finish: "Raw rubber finish",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 3,
      name: "Wire Rope Isolator",
      constructionFeatures: [
        "Stainless steel wire rope construction",
        "Multi-axis shock absorption",
        "Maintenance-free operation"
      ],
      specifications: {
        loadRange: "5 to 500 kg",
        material: "Stainless steel wire",
        finish: "Natural steel",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 4,
      name: "Neoprene Pad",
      constructionFeatures: [
        "Ribbed surface design",
        "Oil and weather resistant",
        "Easy installation"
      ],
      specifications: {
        loadRange: "100 to 3000 kg",
        material: "Neoprene rubber",
        finish: "Textured surface",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 5,
      name: "Air Spring Isolator",
      constructionFeatures: [
        "Adjustable air pressure",
        "Automatic leveling option",
        "High isolation efficiency"
      ],
      specifications: {
        loadRange: "200 to 5000 kg",
        material: "Reinforced rubber with steel plates",
        finish: "Weather-resistant coating",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 6,
      name: "Base Isolation System",
      constructionFeatures: [
        "Lead-rubber bearing design",
        "High damping capability",
        "Seismic protection"
      ],
      specifications: {
        loadRange: "1000 to 10000 kg",
        material: "Lead core with rubber layers",
        finish: "Protective coating",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 7,
      name: "Viscous Damper",
      constructionFeatures: [
        "Fluid damping technology",
        "Temperature-independent performance",
        "Bidirectional operation"
      ],
      specifications: {
        loadRange: "500 to 8000 kg",
        material: "Steel housing with viscous fluid",
        finish: "Corrosion-resistant coating",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 8,
      name: "Restrained Spring Mount",
      constructionFeatures: [
        "All-directional restraint",
        "Adjustable height",
        "Built-in snubbing"
      ],
      specifications: {
        loadRange: "100 to 3500 kg",
        material: "Steel with rubber elements",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    }
  ];

  return (
    <div className="seismic-isolators-page">
      <Link to="/mpci-website/products" className="back-button">
        ← Back to Products
      </Link>
      <PageHero 
        title="Seismic & Vibration Isolators"
        description="Advanced isolation solutions for seismic and vibration control"
      />

      <div className="seismic-isolators-container">
        <div className="seismic-isolators-grid">
          {seismicIsolators.map((product) => (
            <div 
              key={product.id} 
              className={`seismic-isolator-card ${selectedProduct === product.id ? 'zoomed' : ''} ${selectedProduct === product.id && isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(product.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div 
                    className="seismic-isolator-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="seismic-isolator-content">
                    <h2>{product.name}</h2>
                  </div>
                </div>
                <div className="card-back">
                  <div className="seismic-isolator-content">
                    <h2>{product.name}</h2>
                    <h3>Construction Features:</h3>
                    {product.constructionFeatures.map((feature, index) => (
                      <p key={index} className="construction-feature">{feature}</p>
                    ))}
                    <h3>Product Specifications:</h3>
                    <ul className="specifications-list">
                      <li><strong>Load Range:</strong> {product.specifications.loadRange}</li>
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

export default SeismicIsolators; 