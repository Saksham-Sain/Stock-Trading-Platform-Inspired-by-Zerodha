import React from 'react';
import Productspage from './landingPage/products/productpage';
import Aboupage from './landingPage/about/Aboutpage';
import SupportPage from './landingPage/support/SupportPage';
import Homepage from './landingPage/home/Homepage';
import PricingPage from './landingPage/pricing/Pricingpage';
import Signup from './landingPage/signup/Signup';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Notfound from './landingPage/Notfound';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<Productspage/>} />
      <Route path="/about" element={<Aboupage/>} />
      <Route path="/support" element={<SupportPage/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
  );
}

export default App;
