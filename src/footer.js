import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';


export default function Footer() {
  return (

    <div class='contact-us' style={{padding:20}}>
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <span> Contact us</span>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>RSETI TIRUPPUR BUSINESS NETWORK
              </h6>
            </div>
            

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Address:</h6>
              <p><MDBIcon fas icon="home" /> 331/4T , இரண்டாம் தளம்,கோவை டிபார்ட்மெண்ட் ஸ்டோர் காம்ப்ளக்ஸ்,மாவட்ட தொழில் மையம் எதிரில், அவினாசி ரோடு , அனுப்பர்பாளையம் புதூர்,திருப்பூர் – 641652</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                cbrsetitirupur@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i>0421-2256626/9489043923</p>
            </div>
          </div>
        </div>
      </section>
      

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">  RSETI</a>
      </div>
      
    </footer>
    
      </div>
  );
}
