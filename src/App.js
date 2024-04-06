import React from 'react';
import Footer from './footer';
import Header from './carosel';
import Navbar from './navbar';
import Details from './details';
import Logo from './img/logo.jpg';
import Card from './cards.js';
import Gallery from './gallery'
import Button from "react-bootstrap/Button";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <p></p>
      </div>
      <div className='logo' style={{ maxwidth: 200}}>
        <img src={Logo} className='img-fluid' alt='...' />
      </div>
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
        <div className='offers' style={{padding:50,fontSize:22,textAlign:'center'}}>
        <p className="blinking-text" >
        <bold>
          RSETI திருப்பூரின் இலவச பயிற்சி விவரங்கள் மற்றும் முன்பதிவு செய்ய கீழே உள்ள லிங்கை கிளிக் செய்யவும்....
        </bold>
    </p>
            <Button href='https://docs.google.com/forms/d/e/1FAIpQLScWEie-77JOjm9ORpTUP1XfhLufQ-H3rJCZXKdos1q1FNrzVA/viewform?usp=sf_link'>Apply here</Button>
        </div>
      <div style={{ textAlign: 'center' }}>
        <h1>Gallery</h1>
      </div>

      <Gallery />
      <div style={{ textAlign: 'center' }}>
        <h1>Contact Us</h1>
      </div>
      <Footer />
      {/* <Details/> */}
    </div>
  );
}

export default App;
