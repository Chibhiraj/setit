
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MDBBtn } from 'mdb-react-ui-kit';

import cr from './img/cr.avif';import ctv from './img/cctv.webp';import Videography from './img/videography.webp';import hw from './img/hw.webp';import ups from './img/ups.webp';import bp from './img/bp.webp';import emb from './img/emb.jpg';import jute from './img/jute.webp';
import tailor from './img/tailors.png';import lamination from './img/lam.webp';import ac from './img/ac.webp';import art from './img/art.webp';
import paper from './img/paper-bags.webp';import org from './img/herbal-soaps.webp';import mush from './img/mush.webp';import masal from './img/masal.webp';import toy from './img/toy.webp';
import { auto } from '@popperjs/core';
import { blue } from '@mui/material/colors';
export default function CardsRow() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
      
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{padding:20}}>
      <div className="col">
        <div className="card h-70">
          <img src={cr} className="card-img-top" alt="Hollywood Sign on The Hill"/>
          <div className="card-body">
            <h5 className="card-title">Cellphone Repair</h5>
            <p className="card-text">
            செல்போன்; பழுதுபார்த்தல் மற்றும் சர்வீஸ் TECHNCIANS  (CELLPHONE REPAIRE)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

      <Dialog open={isOpen} onClose={toggleModal}>
        <DialogTitle>Details </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Example data */}
                  <TableRow>
                    <TableCell style={{color:blue}}>Kumar</TableCell>
                    <TableCell>123-456-7890</TableCell>
                    <TableCell> <a href='https://www.google.com/maps/dir//tiruppur+rstei/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3ba907a7a56402af:0x2deaaf8daf2a725c?sa=X&ved=1t:3061&ictx=111'>Tirppur</a></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Raj</TableCell>
                    <TableCell>456-789-0123</TableCell>
                    <TableCell>Tirppur</TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContentText>
        </DialogContent>
      </Dialog>
        </div>
      </div>
      <div className="col">
        <div className="card h-70">
          <img style={{maxHeight:1000,maxWidth:9000}}  src={ctv} className="card-img-top" alt="Palm Springs Road"/ >
          <div className="card-body">
            <h5 className="card-title">CCTV repair</h5>
            <p className="card-text">
            கண்காணிப்பு கேமரா பொருத்துதல் மற்றும் சர்வீஸ்  (CCTV INSTALLATION AND SERVICE)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

      
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={Videography} style={{maxHeight:295,maxWidth:auto}}className="card-img-top" alt="Los Angeles Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Photography and  Videography</h5>
            <p className="card-text">போட்டோகிராபர் மற்றும் வீடியோகிராபர் (PHOTOGRAPHY & VIDEOGRAPHY)</p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

   
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={hw}  className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Wiring</h5>
            <p className="card-text">
            ஹவுஸ் வயரிங் DETAILS (House Wiring) TECHNICIANS
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

    
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img style={{maxHeight:295,maxWidth:auto}} src={bp} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Beauty parlours</h5>
            <p className="card-text">
            பியூட்டிசியன்ஸ் DETAILS (BEAUTY PARLOR/ BEAUTICIAN)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

    
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={emb} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">EMBROIDERY</h5>
            <p className="card-text">
            எம்பிராய்டரி மற்றும் துணி ஓவியம் ARTIST DETAILS (EMBROIDERY & FABRIC PAINTING)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

     
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={jute} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">JUTE PRODUCTS</h5>
            <p className="card-text">
            சணல் பைகள் தயாரிப்பாளர்கள் DETAILS (JUTE PRODUCTS )
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

   
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={tailor} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
          <h5 className="card-title">TAILORS</h5>
            <p className="card-text">
            தையல் கலைஞர் DETAILS (TAILORS)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

     
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={lamination} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
          <h5 className="card-title">Framing</h5>
            <p className="card-text">
            போட்டோ ஃபிரேமிங் , லேமினேசன் மற்றும் ஸ்கிரீன் பிரிண்டிங் SERVICE ( PHOTO FRAMING , LAMINATION & SCREEN PRINTING SERVICE)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={ac} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">SERVICE TECHNICIANS </h5>
            <p className="card-text">
            குளிரூட்டல் மற்றும் ஏர் கண்டிஷனிங் SERVICE TECHNICIANS (Refrigeration and Air-conditioning)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={art} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Costume designers</h5>
            <p className="card-text">
            செயற்கை நகைகள் ARTISTS (Costume Jewellery Thread bangle etc..)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

      
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={paper} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Paper products</h5>
          <p className="card-text">
          காகித கவர் , என்வலப் மற்றும் ஃபைல் தயாரிப்பாளர்கள் (Paper Cover, Envelop and File producers)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

      
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={mush} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Mushroom producers</h5>
            <p className="card-text">
            Organic காளான் Producers (MUSHROOM Producers)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={org} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Organics</h5>
            <p className="card-text">
            வீட்டுமுறை ஊதுபத்தி , Detergent, சோப்பு ஆயில், soap சோப்பு மற்றும் சாம்பிராணி தயாரித்தல்
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

   
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={masal} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Home made masalas</h5>
            <p className="card-text">
            வீட்டுமுறை அப்பளம், ஊறுகாய் & மசாலா பொடி தயாரிப்பாளர்கள் (PAPAD,PICKLE AND MASALA POWDER PRODUCERS)
            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

     
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={toy} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Soft toys தயாரிப்பாளர்கள்</h5>
            <p className="card-text">
            Soft toys தயாரிப்பாளர்கள்

            </p>
          </div>
          <Button onClick={toggleModal} variant="contained" color="primary">
        View Details ->
      </Button>

    
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
