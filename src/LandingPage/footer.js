import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import Logo from '../img/logo.jpg'

export default function Footer() {
  return (

    <div class='contact-us'>
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      </section>

      <section className="">
        <div className="container text-center text-md-start ">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <div className='logo' style={{}}>
                <img src={Logo} className='d-block w-100' alt='...' />
               </div>
               <div>
                <p></p>
               </div>
              <h6 className="text-uppercase fw-bold mb-4">
                  RSETI TIRUPPUR BUSINESS NETWORK
              </h6>
              <div class="container p-4 pb-0">

  <section className="mb-6 ">
    <h5> Follow us on</h5>
    <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor:'#17B169' }}
        href="https://api.whatsapp.com/send/?phone=%2B919489043923&text&type=phone_number&app_absent=0"
        role="button"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#ac2bac' }}
        href="https://www.instagram.com/tiruppur_rseti?igsh=MXQ1aGQxZ2pleDFpMw=="
        role="button"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#3b5998' }}
        href="https://www.facebook.com/cbrseti.tirupur"
        role="button"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#7AA2E3' }}
        href="https://t.me/rseti0"
        role="button"
      >
        <i className="fab fa-telegram"></i>
      </a>
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#FF0000' }}
        href="https://www.youtube.com/channel/UCsY121Q6JHe3UrkEPWviJOQ"
        role="button"
      >
        <i className="fab fa-youtube"></i>
      </a>
      <div>
        <p>
          
        </p>
      </div>
          <p>
                <i className="fas fa-envelope me-3"></i>
                cbrsetitirupur@gmail.com
     
              <p><i className="fas fa-phone me-3"></i>  0421-2256626/9489043923</p>
              </p>
     
    </section>
  </div>

             
            </div>
            

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Address:</h6>
              <p><MDBIcon fas icon="home" /> 331/4T , இரண்டாம் தளம்,கோவை டிபார்ட்மெண்ட் ஸ்டோர் காம்ப்ளக்ஸ்,மாவட்ட தொழில் மையம் எதிரில், அவினாசி ரோடு , அனுப்பர்பாளையம் புதூர்,திருப்பூர் – 641652</p>
          <p><i className="fas fa-location me-2"></i><a href='https://maps.app.goo.gl/d44R9XVoZqLSRLQHA'>Location</a></p>
              
            </div>
          </div>
        </div>
      </section>
      

      <div className="text-center pt-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright 
        <a className="text-reset fw-bold">  RSETI</a>
        
      </div>
      
    </footer>
    
      </div>
  );
}
