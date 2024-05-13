import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './footer';
import Header from './carosel';
import Navbar from './navbar';
import Offers from './offers';
// import Login from './middleWare'
import Logo from '../img/logo.jpg';
import Card from './cards.js';
import Gallery from './gallery'
import Events from './events';
import SocialHandles from './socialHandles';
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
      <div className='logo' style={{justifyContent: 'center', display:'flex',boxSizing:"content-box",paddingTop:40}} >
        <img src={Logo} style={{}}  className='img-fluid' alt='...' />
      </div>  
      <SocialHandles/>
      <Offers/>
        <Header />
      <div style={{ textAlign: 'center',paddingTop:10 }}>
        <h1>Upcoming Events</h1>
      </div>
        <Events />
      <div style={{ textAlign: 'center' }}>
      <div>
        <p></p>
      </div>
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
