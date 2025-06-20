import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function Notfound() {
  return ( <>
  <Navbar/>
  <div className="text-center">
    <h1>404 Not found </h1>
    <p>Sorry the page you are looking for does  not Exsist</p>
  </div>
  <Footer/>
  </> );
}

export default Notfound;