import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UniversalCollection from './pages/UniversalCollection';
import MensCollection from './pages/Men/MensCollection';
import Womenscollection from './pages/Page2/Womens';
import AllFragrancesSection from './pages/AllFregrances';
import ProductCartSection from './pages/ProductCartSection';
// Import page components
import HomePage from './pages/Home';
import UnisexCollection from './pages/UnisexCollection';
import GiftCollection from './pages/GiftCollection';
// import WishlistPage from './components/common/Wishlist';
import Wishlist from './components/common/Wishlist';
import ProductPage from './pages/ProductPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/universal-collection" element={<UniversalCollection />} />
        <Route path="/mens-collection" element={<MensCollection />} />
        <Route path="/womens-collection" element={<Womenscollection/>} />
        <Route path="/all-fragrances" element={<AllFragrancesSection/>} />
        <Route path="/product-cart" element={<ProductCartSection/>} />
        <Route path="/unisex-collection" element={<UnisexCollection/>} />
        <Route path="/gift-collection" element={<GiftCollection/>} />
        <Route path="/wishlist-collection" element={<Wishlist/>} />
        <Route path="/product-perfume" element={<ProductPage/>} />
      </Routes>
    </Router>
  ); 
};

export default AppRoutes;