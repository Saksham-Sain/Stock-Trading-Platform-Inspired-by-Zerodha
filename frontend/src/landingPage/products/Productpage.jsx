import React from 'react';
import Hero from './HEro';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Productspage() {
  return ( 
   <>
   <Navbar/>
   <Hero/>
   <Leftsection/>
   <Rightsection/>
   <Universe/>
   <Footer/>
   </> );
}

export default Productspage;