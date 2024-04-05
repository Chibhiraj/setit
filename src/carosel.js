import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';


export default function App() {
  return (
    
    <MDBCarousel showIndicators showControls fade style={{padding:20}}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>First image </h5>

        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        <h5> Second image </h5>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        <h5>Third image </h5>
        
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}