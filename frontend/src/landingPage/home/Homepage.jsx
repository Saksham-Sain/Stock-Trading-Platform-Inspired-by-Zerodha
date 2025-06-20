import React from 'react';
import Hero from './HEro';
import Awards from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Eduaction from './Education';
import Openaccount from '../../Openaccount';  
import Navbar from '../Navbar';
import Footer from '../Footer';
function Homepage() {
  return (  
    <>
    <Navbar/>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Eduaction/>
    <Openaccount/>
    <Footer/>

    </>
  );
}

export default Homepage;