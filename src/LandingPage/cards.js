
import React, { useState,useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import cr from '../img/cr.avif';import ctv from '../img/cctv.webp';import Videography from '../img/videography.webp';import hw from '../img/hw.webp';import ups from '../img/ups.webp';import bp from '../img/bp.webp';import emb from '../img/emb.jpg';import jute from '../img/jute.webp';
import tailor from '../img/tailors.png';import lamination from '../img/lam.webp';import ac from '../img/ac.webp';import art from '../img/art.webp';
import paper from '../img/paper-bags.webp.png';import org from '../img/herbal-soaps.webp';import mush from '../img/mush.webp';import masal from '../img/masal.webp';import toy from '../img/toy.webp';
import './cards.css'

export default function CardsRow() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [designationFilter, setDesignationFilter] = useState('');


  const toggleModal = (occ) => {
    setIsOpen(!isOpen);
    if (occ) {
      const filteredData = users.filter(user => user.designation === occ);
      setFilteredUsers(filteredData);
    }
  };


  useEffect(() => {
    axios.get("https://setit-backend.onrender.com")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error.response.data);
      });
  }, [users]);

  return (
    
      
      <div className="row row-cols-1 row-cols-md-3 g-4">

      <Dialog open={isOpen} onClose={toggleModal}>
        <DialogTitle>Details </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TableContainer component={Paper}>
              <Table >
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Name</TableCell> */}
                    <TableCell>Shop Name</TableCell>
                    <TableCell>Owner Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Specializaion</TableCell>
                    <TableCell>Product Link</TableCell>
                    <TableCell>Location Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
        {filteredUsers.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} align="center">
              Service Unavailable
            </TableCell>
          </TableRow>
        ) : (
          filteredUsers.map(row => (
            <TableRow key={row._id}>
              <TableCell>{row.shopName}</TableCell>
              <TableCell>{row.ownerName}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>{row.productLink}</TableCell>
              <TableCell style={{ color: "blue" }}>
                <a href={row.location}>Location</a>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
              </Table>
            </TableContainer>
            
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <div className="col">
        <div className="card h-100">
          <img src={cr} className="card-img-top" alt="Hollywood Sign on The Hill"/>
          <div className="card-body">
            <h5 className="card-title">Cellphone Repair</h5>
            <p className="card-text">
            செல்போன் பழுதுபார்த்தல் மற்றும் சர்வீஸ் (CELLPHONE REPAIR)
            </p>
          </div>
          <Button onClick={() => toggleModal("Cellphone Repair")} variant="contained" color="primary">
            View Details
          </Button>
        </div>
      </div>

      <div className="col">
        <div className="card h-70">
          <img   src={ctv} className="card-img-top" alt="Palm Springs Road"/ >
          <div className="card-body">
            <h5 className="card-title">CCTV repair</h5>
            <p className="card-text">
            கண்காணிப்பு கேமரா பொருத்துதல் மற்றும் சர்வீஸ்  (CCTV INSTALLATION AND SERVICE)
            </p>
          </div>
          <Button onClick={() => toggleModal("Cctv repair")} variant="contained" color="primary">
            View Details
          </Button>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={Videography} className="card-img-top" alt="Los Angeles Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Photography and  Videography</h5>
            <p className="card-text">போட்டோகிராபர் மற்றும் வீடியோகிராபர் (PHOTOGRAPHY & VIDEOGRAPHY)</p>
          </div>
          <Button onClick={() => toggleModal("Photography and  Videography")} variant="contained" color="primary">
            View Details
          </Button>

        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={hw}  className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Wiring</h5>
            <p className="card-text">
            ஹவுஸ் வயரிங் technicians (House Wiring)
            </p>
          </div>
          <Button onClick={() => toggleModal("Wiring")} variant="contained" color="primary">
            View Details
          </Button>

    
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img  src={bp} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Beauty parlours</h5>
            <p className="card-text">
            பியூட்டிசியன்ஸ் (BEAUTY PARLOR/ BEAUTICIAN)
            </p>
          </div>
          <Button onClick={() => toggleModal("Beauty parlours")} variant="contained" color="primary">
            View Details
          </Button>

    
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={emb} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body ">
            <h5 className="card-title">EMBROIDERY</h5>
            <p className="card-text">
            எம்பிராய்டரி மற்றும் துணி ஓவியம் ARTIST DETAILS (EMBROIDERY & FABRIC PAINTING)
            </p>
          </div>
          <Button onClick={() => toggleModal("EMBROIDERY")} variant="contained" color="primary">
            View Details
          </Button>

     
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={jute} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">JUTE PRODUCTS</h5>
            <p className="card-text">
            சணல் பைகள் தயாரிப்பாளர்கள் DETAILS (JUTE PRODUCTS )
            </p>
          </div>
          <Button onClick={() => toggleModal("JUTE PRODUCTS")} variant="contained" color="primary">
            View Details
          </Button>

   
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={tailor} className="card-img-top" alt="Skyscrapers" />
          <div className="card-body">
          <h5 className="card-title">TAILORS</h5>
            <p className="card-text">
            தையல் கலைஞர்  (TAILORS)
            </p>
          </div>
          <Button onClick={() => toggleModal("Tailors")} variant="contained" color="primary">
            View Details
          </Button>

     
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={lamination} className="card-img-top" alt="Skyscrapers"  />
          <div className="card-body">
          <h5 className="card-title">Framing</h5>
            <p className="card-text">
            போட்டோ ஃபிரேமிங் , லேமினேசன் மற்றும் ஸ்கிரீன் பிரிண்டிங் ( PHOTO FRAMING , LAMINATION & SCREEN PRINTING SERVICE)
            </p>
          </div>
          <Button onClick={() => toggleModal("Framing")} variant="contained" color="primary">
            View Details
          </Button>

        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ac} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">SERVICE TECHNICIANS </h5>
            <p className="card-text">
            குளிரூட்டல் மற்றும் ஏர் கண்டிஷனிங் SERVICE TECHNICIANS (Refrigeration and Air-conditioning)
            </p>
          </div>
          <Button onClick={() => toggleModal("SERVICE TECHNICIANS")} variant="contained" color="primary">
            View Details
          </Button>

        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={art} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Costume designers</h5>
            <p className="card-text">
            செயற்கை நகைகள் ARTISTS (Costume Jewellery Thread bangle etc..)
            </p>
          </div>
          <Button onClick={() => toggleModal("Costume designers")} variant="contained" color="primary">
            View Details
          </Button>

      
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={paper} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Paper products</h5>
          <p className="card-text">
          காகித கவர் , என்வலப் மற்றும் ஃபைல் தயாரிப்பாளர்கள் (Paper Cover, Envelop and File producers)
            </p>
          </div>
          <Button onClick={() => toggleModal("Paper products")} variant="contained" color="primary">
            View Details
          </Button>

      
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={mush} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Mushroom producers</h5>
            <p className="card-text">
            Organic காளான் Producers (MUSHROOM Producers)
            </p>
          </div>
          <Button onClick={() => toggleModal("Mushroom producers")} variant="contained" color="primary">
            View Details
          </Button>

        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={org} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Organics</h5>
            <p className="card-text">
            வீட்டுமுறை ஊதுபத்தி , Detergent, சோப்பு ஆயில், soap சோப்பு மற்றும் சாம்பிராணி தயாரித்தல்
            </p>
          </div>
          <Button onClick={() => toggleModal("Organics")} variant="contained" color="primary">
            View Details
          </Button>

   
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={masal} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Home made masalas</h5>
            <p className="card-text">
            வீட்டுமுறை அப்பளம், ஊறுகாய் & மசாலா பொடி தயாரிப்பாளர்கள் (PAPAD,PICKLE AND MASALA POWDER PRODUCERS)
            </p>
          </div>
          <Button onClick={() => toggleModal("Home made masalas")} variant="contained" color="primary">
            View Details
          </Button>

     
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={toy} className="card-img-top" alt="Skyscrapers"/>
          <div className="card-body">
            <h5 className="card-title">Soft toys தயாரிப்பாளர்கள்</h5>
            <p className="card-text">
            Soft toys தயாரிப்பாளர்கள்

            </p>
          </div>
          <Button onClick={() => toggleModal("Soft toys")} variant="contained" color="primary">
            View Details
          </Button>

    
        </div>
      </div>
        </div>
  );
}
