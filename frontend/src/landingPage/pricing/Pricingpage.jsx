import React from 'react';
import Hero from './Hero';
import Brockerage from './Brockerage';
import Navbar from '../Navbar';
import Footer from '../Footer';
function PricingPage() {
  return ( <h1>
    <Navbar/>
    <Hero/>
    <Brockerage/> 
    <Footer/>
  </h1> );
}

export default PricingPage;