import React from 'react';
import g1 from './img/g1.png';
import g2 from './img/g2.png';
import g3 from './img/g3.png';
import g4 from './img/g4.png';
import g5 from './img/g5.png';
import g6 from './img/g6.png';
import g7 from './img/g7.png';


const Gallery = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" style={{padding:20}}>
        <img
          src={g1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
        <img
          src={g2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>

      <div style={{padding:20}} className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={g3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />
        <img
          src={g6}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
          
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0" style={{padding:20}}>
        <img
          src={g4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
        
        <img
          src={g5}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div>
    </div>
  );
};

export default Gallery;
