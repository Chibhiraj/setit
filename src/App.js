import React from 'react';
import Footer from './footer';
import Header  from './carosel';
import Navbar from './navbar';
import Details from './details'
import Logo from './img/logo.jpg'
import Card  from './cards.js';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <p></p>
      </div>
      <div className='logo'>
      <img src={{Logo}} className='d-block w-100' alt='...' />
       </div>
      <div style={{textAlign:'center'}}>
      <Header/>
      <h1>Services</h1>
        
      </div>
      <Card/>
       
      <div style={{textAlign:'center'}}>
      <h1>Contact Us</h1>
        
      </div>
      <Footer/>
      {/* <Details/> */}
    </div>
  );
}

export default App;
