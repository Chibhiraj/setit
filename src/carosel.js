import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import img1 from './img/c2.png';
import img2 from './img/2.jpg';
import img3 from './img/g1.png';

export default function App() {
  return (
    <div style={{ maxWidth:'1000px', margin: 'auto' }}>
      <MDBCarousel showControls fade>
        <MDBCarouselItem itemId={1}>
          <img
            src={img1}
            className='d-block w-100'
            alt='...'
            style={{ height: '700px', objectFit: 'cover' }}
          />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            src={img2}
            className='d-block w-100'
            alt='...'
            style={{ height: '700px', objectFit: 'cover' }}
          />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            src={img3}
            className='d-block w-100'
            alt='...'
            style={{ height: '700px', objectFit: 'cover' }}
          />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
