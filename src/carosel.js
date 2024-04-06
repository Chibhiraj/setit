import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import  img2 from './img/2.jpg';

export default function App() {
  return (
    
    <MDBCarousel  showControls fade style={{padding:5}}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={img2} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}