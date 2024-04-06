import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router' 

import { MDBIcon } from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";

// Import your image file
import logoImage from './img/rseti.jpg';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' style={{padding:5}} className="sticky-top">
      <MDBContainer fluid>
        {/* Place the image within MDBNavbarBrand */}
        <MDBNavbarBrand href='#'>
          <img src={logoImage} alt="Logo" style={{ maxHeight: '50px' }} />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='cards.js'>Our Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='contact-us'>Contact us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="ms-auto">
              <Button href='https://docs.google.com/forms/d/e/1FAIpQLScWEie-77JOjm9ORpTUP1XfhLufQ-H3rJCZXKdos1q1FNrzVA/viewform'>
                Apply now
              </Button>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
