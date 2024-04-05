import React from 'react';

export default function CardsRow() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
