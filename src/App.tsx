import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeatureSection from './components/FeatureSection';
import FeatureSectionBreakfast from './components/FeatureSectionBreakfast';
import FeatureSectionFruits from './components/FeatureSectionFruits';
import BlogSection from './components/BlogSection';
import Hero from './components/Hero';
import Category from './components/Category';
import BannerSection from './components/BannerSection';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import CartPage from './components/CartPage';
import { useState, useEffect } from 'react';

const Home = () => (
  <>
    <Hero />
    <Category />
    <FeatureSectionFruits />
    <FeatureSectionBreakfast />
    <BannerSection />
    <BlogSection />
    <NewsLetter />
    <FeatureSection />
  </>
);

const App = () => {
  const [paddingTop, setPaddingTop] = useState(16);

  useEffect(() => {
    const location = window.location.pathname;
    if (location === '/') {
      setPaddingTop(36);
    } else {
      setPaddingTop(16);
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
           <div style={{ paddingTop: `${paddingTop}px` }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/FeatureSectionFruits" element={<FeatureSectionFruits />} />
              <Route path="/FeatureSectionBreakfast" element={<FeatureSectionBreakfast />} />
              <Route path="/BlogSection" element={<BlogSection />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
