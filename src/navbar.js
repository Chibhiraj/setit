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

import { MDBIcon } from 'mdb-react-ui-kit';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' style={{padding:5}} className="sticky-top">
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>RSETI</MDBNavbarBrand>
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
              <MDBNavbarLink href='#'>Our Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#contact-us'>Contact us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="ms-auto"> {/* 'ms-auto' class pushes the item to the right */}
        <MDBNavbarLink href='https://docs.google.com/forms/d/e/1FAIpQLScWEie-77JOjm9ORpTUP1XfhLufQ-H3rJCZXKdos1q1FNrzVA/viewform'>
          Register now
        </MDBNavbarLink>
      </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}