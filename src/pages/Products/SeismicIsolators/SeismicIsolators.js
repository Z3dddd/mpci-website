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
      id: 2,
      name: "Anti Vibration Hanger",
      constructionFeatures: [
        "Robust steel construction",
        "Integrated vibration dampening",
        "Easy installation system"
      ],
      specifications: {
        loadRange: "50 to 1000 kg",
        material: "Steel with rubber elements",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 3,
      name: "Anti Vibration Mount",
      constructionFeatures: [
        "Heavy-duty construction",
        "Multiple mounting options",
        "Superior vibration isolation"
      ],
      specifications: {
        loadRange: "100 to 2000 kg",
        material: "Steel and rubber composite",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 4,
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
      id: 5,
      name: "Cable Anchor Fitting",
      constructionFeatures: [
        "High tensile strength",
        "Corrosion resistant design",
        "Versatile mounting options"
      ],
      specifications: {
        loadRange: "Up to 5000 kg",
        material: "Galvanized steel",
        finish: "Hot-dip galvanized",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 6,
      name: "Combination Hanger",
      constructionFeatures: [
        "Dual isolation system",
        "Adjustable mounting height",
        "Enhanced load capacity"
      ],
      specifications: {
        loadRange: "75 to 1500 kg",
        material: "Steel with rubber/spring combination",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 7,
      name: "Cork Sandwich Pad",
      constructionFeatures: [
        "Natural cork construction",
        "Layered design",
        "High compression resistance"
      ],
      specifications: {
        loadRange: "50 to 800 kg",
        material: "Natural cork with steel plates",
        finish: "Natural/Steel",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 8,
      name: "Cup Spring Mounts 25mm",
      constructionFeatures: [
        "25mm deflection capacity",
        "Belleville spring design",
        "Compact profile"
      ],
      specifications: {
        loadRange: "100 to 2000 kg",
        material: "High-grade spring steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 9,
      name: "Cup Spring Mounts 50mm",
      constructionFeatures: [
        "50mm deflection capacity",
        "Enhanced load bearing",
        "Heavy-duty construction"
      ],
      specifications: {
        loadRange: "200 to 3000 kg",
        material: "High-grade spring steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 10,
      name: "Housed Spring Mounts 25mm",
      constructionFeatures: [
        "25mm spring deflection",
        "Protected spring design",
        "Built-in leveling"
      ],
      specifications: {
        loadRange: "100 to 2500 kg",
        material: "Steel housing and springs",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 11,
      name: "Housed Spring Mounts 50mm",
      constructionFeatures: [
        "50mm spring deflection",
        "Enhanced isolation",
        "Weatherproof housing"
      ],
      specifications: {
        loadRange: "200 to 3500 kg",
        material: "Steel housing and springs",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 12,
      name: "Metal Sandwich Pad",
      constructionFeatures: [
        "Layered metal construction",
        "High load capacity",
        "Excellent durability"
      ],
      specifications: {
        loadRange: "500 to 5000 kg",
        material: "Multi-layer steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 13,
      name: "Resistant Clip-NT-SE-RC1",
      constructionFeatures: [
        "Quick installation design",
        "High resistance rating",
        "Compact profile"
      ],
      specifications: {
        loadRange: "25 to 500 kg",
        material: "Hardened steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 14,
      name: "Resistant Clip-NT-SE-RC2",
      constructionFeatures: [
        "Enhanced load capacity",
        "Superior resistance",
        "Professional grade"
      ],
      specifications: {
        loadRange: "50 to 750 kg",
        material: "Hardened steel",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 15,
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
    },
    {
      id: 16,
      name: "Ribbed Mounting Pad",
      constructionFeatures: [
        "Ribbed surface pattern",
        "Non-slip design",
        "Even load distribution"
      ],
      specifications: {
        loadRange: "100 to 2000 kg",
        material: "Reinforced rubber",
        finish: "Textured surface",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 17,
      name: "Ribbed Multi-Layer Pad",
      constructionFeatures: [
        "Multiple layer construction",
        "Enhanced isolation",
        "Heavy-duty design"
      ],
      specifications: {
        loadRange: "200 to 3000 kg",
        material: "Multi-layer rubber compound",
        finish: "Textured surface",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 18,
      name: "Seismic Cable",
      constructionFeatures: [
        "High tensile strength",
        "Flexible design",
        "Seismic rated"
      ],
      specifications: {
        loadRange: "Up to 10000 kg",
        material: "Steel wire rope",
        finish: "Galvanized",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 19,
      name: "Seismic Snubber",
      constructionFeatures: [
        "All-directional protection",
        "Impact absorption",
        "Clearance control"
      ],
      specifications: {
        loadRange: "500 to 5000 kg",
        material: "Steel with elastomeric elements",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 20,
      name: "Seismic Spring Isolator 25mm",
      constructionFeatures: [
        "25mm seismic rated springs",
        "Built-in restraint",
        "Adjustable leveling"
      ],
      specifications: {
        loadRange: "100 to 2000 kg",
        material: "Steel springs and housing",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 21,
      name: "Seismic Spring Isolator 50mm",
      constructionFeatures: [
        "50mm seismic rated springs",
        "Enhanced protection",
        "Heavy-duty construction"
      ],
      specifications: {
        loadRange: "200 to 3000 kg",
        material: "Steel springs and housing",
        finish: "Powder coated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 22,
      name: "Spring Hanger 25mm",
      constructionFeatures: [
        "25mm spring travel",
        "Pre-compressed design",
        "Easy installation"
      ],
      specifications: {
        loadRange: "50 to 1500 kg",
        material: "Steel springs",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 23,
      name: "Spring Hanger 50mm",
      constructionFeatures: [
        "50mm spring travel",
        "Higher load capacity",
        "Superior isolation"
      ],
      specifications: {
        loadRange: "100 to 2500 kg",
        material: "Steel springs",
        finish: "Zinc plated",
        manufacturer: "NTEICO"
      },
      image: seismicIsolatorImage
    },
    {
      id: 24,
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
      id: 25,
      name: "Waffle Pad",
      constructionFeatures: [
        "Waffle pattern design",
        "Enhanced grip",
        "Uniform load distribution"
      ],
      specifications: {
        loadRange: "100 to 2000 kg",
        material: "Natural rubber compound",
        finish: "Textured surface",
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