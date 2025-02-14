import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import Certifications from './pages/Certifications/Certifications';
import CertificationDetail from './pages/Certifications/CertificationDetail';
import Blog from './pages/Blog/Blog';
import TeamMember from './pages/About/team/TeamMember';

function App() {
  useEffect(() => {
    document.title = 'MPCI - Modular Prefabricated Construction Industry';
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/certifications/:id" element={<CertificationDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team/:id" element={<TeamMember />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
