import React, { useState } from 'react';
import './Catalogue.css';

const catalogueItems = [
  {
    id: 1,
    title: 'Complete Products Catalogue',
    description: 'Comprehensive catalogue featuring our entire range of industrial support solutions, including detailed specifications, technical drawings, and installation guides for all product lines.',
    fileSize: '26 MB',
    fileName: 'complete-products-catalogue.pdf'
  },
  {
    id: 2,
    title: 'Pipe Supports',
    description: 'Comprehensive catalogue of our pipe support solutions, including heavy load capacity supports, corrosion-resistant options, and multiple size configurations.',
    fileSize: '5.2 MB',
    fileName: 'pipe-supports-catalogue.pdf'
  },
  {
    id: 3,
    title: 'Modular Systems',
    description: 'Detailed specifications for our modular support systems, featuring flexible configurations, easy assembly instructions, and scalable design options.',
    fileSize: '1.4 MB',
    fileName: 'modular-systems-catalogue.pdf'
  },
  {
    id: 4,
    title: 'Rail Supports',
    description: 'Complete guide to our rail support systems, including high stability options, precision alignment solutions, and durable construction specifications.',
    fileSize: '2.8 MB',
    fileName: 'rail-supports-catalogue.pdf'
  },
  {
    id: 5,
    title: 'Seismic & Vibration Isolators',
    description: 'Detailed catalogue of our seismic and vibration isolation systems, including shock absorption specifications, seismic protection features, and noise reduction solutions.',
    fileSize: '3.3 MB',
    fileName: 'seismic-isolators-catalogue.pdf'
  }
];

function Catalogue() {
  const [downloadError, setDownloadError] = useState(null);

  const handleDownload = async (fileName, title) => {
    try {
      const response = await fetch(`/catalogues/${fileName}`);
      
      if (!response.ok) {
        throw new Error('File not found');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setDownloadError(null);
    } catch (error) {
      console.error('Download error:', error);
      setDownloadError(`Failed to download ${title}. Please try again later.`);
    }
  };

  return (
    <div className="catalogue-page">
      <div className="catalogue-hero">
        <h1>Product Catalogues</h1>
        <p>Download detailed specifications and information about our product range</p>
      </div>
      
      <div className="catalogue-container">
        {downloadError && (
          <div className="error-message">
            {downloadError}
          </div>
        )}
        <div className="catalogue-grid">
          {catalogueItems.map((item) => (
            <div key={item.id} className="catalogue-card">
              <div className="catalogue-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="file-size">PDF • {item.fileSize}</span>
              </div>
              <button 
                className="download-button"
                onClick={() => handleDownload(item.fileName, item.title)}
              >
                Download Catalogue
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogue; 