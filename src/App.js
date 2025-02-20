import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Footer from './component/Footer/Footer';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import PipeSupports from './pages/Products/PipeSupports/PipeSupports';
import Certifications from './pages/Certifications/Certifications';
import CertificationDetail from './pages/Certifications/CertificationDetail';
import Catalogue from './pages/Catalogue/Catalogue';
import TeamMember from './pages/About/team/TeamMember';

function App() {
  useEffect(() => {
    document.title = 'MPCI - Modular Prefabricated Construction Industry';
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/pipe-supports" element={<PipeSupports />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/certifications/:id" element={<CertificationDetail />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team/:id" element={<TeamMember />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
