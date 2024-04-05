
import React from 'react';
import img  from './img/all.png'
import Details from './details'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
export default function CardsRow() {
  return (
      
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{padding:20}}>
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
          <div className="card-body">
            <h5 className="card-title">Cellphone Repair</h5>
            <p className="card-text">
            செல்போன்; பழுதுபார்த்தல் மற்றும் சர்வீஸ் TECHNCIANS  (CELLPHONE REPAIRE)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road"/>
          <div className="card-body">
            <h5 className="card-title">CCTV repair</h5>
            <p className="card-text">
            கண்காணிப்பு கேமரா பொருத்துதல் மற்றும் சர்வீஸ்  (CCTV INSTALLATION AND SERVICE)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Photography and  Videography</h5>
            <p className="card-text">போட்டோகிராபர் மற்றும் வீடியோகிராபர் (PHOTOGRAPHY & VIDEOGRAPHY)</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Wiring</h5>
            <p className="card-text">
            ஹவுஸ் வயரிங் DETAILS (House Wiring) TECHNICIANS
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Beauty parlours</h5>
            <p className="card-text">
            பியூட்டிசியன்ஸ் DETAILS (BEAUTY PARLOR/ BEAUTICIAN)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        {/* <Link to="/Details" className="btn btn-primary">Sign up</Link> */}
          </div>
        </div>
        </div>
  );
}
