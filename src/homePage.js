import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './footer';
import Header from './carosel';
import Navbar from './navbar';
import Offers from './offers';
// import Login from './middleWare'
import Logo from './img/logo.jpg';
import Card from './cards.js';
import Gallery from './gallery'
import Button from "react-bootstrap/Button";
// import LoginPage from "./middleWare"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <p></p>
      </div>
      <div className='logo' style={{ maxwidth: 200}}>
        <img src={Logo} className='img-fluid' alt='...' />
      </div>
      <Offers/>
      <div style={{ textAlign: 'center' }}>
      <div>
        <p></p>
      </div>
        <Header />
        <div>
        <p></p>
      </div>
        <h1>Services</h1>
      </div>
      <div>
        <p></p>
      </div>
      <Card />

      <Offers/>

      <div style={{ textAlign: 'center' }}>
        <h1>Gallery</h1>
      </div>

      <Gallery />

      <div style={{ textAlign: 'center' }}>
        <h1>Contact Us</h1>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
