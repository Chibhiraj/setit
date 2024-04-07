
import { Modal, Button, Form, Table } from 'react-bootstrap';
import Logo from './img/logo.jpg';
import img from './img/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio.jpg';
import Footer from './footer';
import { Navigate, useNavigate } from 'react-router';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React, { useState } from 'react';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function RowList() {
  const [rows, setRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    phoneNumber: '',
    designation: '',
    location: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    updateIds(); // Update IDs after deletion
  };

  const handleUpdate = (row) => {
    setFormData(row);
    setShowModal(true);
  };

  const handleSubmit = () => {
    // Check if phone number is valid (10 digits)
    const isValidPhoneNumber = validatePhoneNumber(formData.phoneNumber);

    if (!isValidPhoneNumber) {
      setPhoneNumberError('Invalid phone number');
      alert('Enter valid phone number');
      return; // Don't proceed further if phone number is invalid
    }

    // Clear phone number error if previously set
    setPhoneNumberError('');

    if (formData.id) {
      // Update existing row
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === formData.id ? formData : row))
      );
    } else {
      // Add new row with incremented ID
      setRows((prevRows) => [
        ...prevRows,
        {
          id: prevRows.length + 1,
          ...formData
        }
      ]);
    }
    // Close the modal
    handleClose();
    updateIds(); // Update IDs after updating row
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      id: null,
      name: '',
      phoneNumber: '',
      designation: '',
      location: ''
    });
  };

  const handleShow = () => setShowModal(true);

  const updateIds = () => {
    // Update IDs to ensure they are sequential
    setRows((prevRows) =>
      prevRows.map((row, index) => ({
        ...row,
        id: index + 1
      }))
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div style={{ padding: 10, backgroundSize: 'cover', position: 'relative', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: 500 }}>
        <img src={Logo} className='img-fluid' alt='...' />
      </div>
      <div><p></p></div>
      <center>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h3 style={{ textAlign: 'center', animation: 'blinking 1s infinite' }}>Welcome to Admin Panel</h3>
        </div>
      
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{formData.id ? 'Updating'  : 'Add Member'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="designation">
                <Form.Label>Designation</Form.Label>
                <Form.Select
                  aria-label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                >
                  <option value="">Select Designation</option>
                  <option value="Cctv repair">Cctv repair</option>
                  <option value="Ac repair">Ac repair</option>
                  <option value="Lamination">Lamination</option>
                  <option value="Mechanic">Mechanic</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              {formData.id ? 'Update' : 'Add'}
            </Button>
          </Modal.Footer>
        </Modal>  
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingLeft: 60, paddingRight: 60 }}>
      <Form.Control
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ margin: '0 10px', width: '300px' }}
      />
      {filteredRows.length > 0 && (
        <p style={{ margin: 0 }}>Number of Members: {filteredRows.length}</p>
      )}
      <div>
        <Button variant="primary" onClick={handleShow}>+ Add Member</Button>
        <Button variant="danger" onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</Button>
      </div>
    </div>
<div><div>
        <p></p>
      </div> </div>
      </center>
      <Container>

      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 65 ,fontfamily:'Calibri'}} aria-label="simple table">
            <TableHead>
            <TableRow sx={{color:'white'}}>
               
                <TableCell sx={{color:'white'}}>ID</TableCell>
                <TableCell sx={{color:'white'}}>Name</TableCell>
                <TableCell sx={{color:'white'}}>Phone Number</TableCell>
                <TableCell sx={{color:'white'}}>Designation</TableCell>
                <TableCell sx={{color:'white'}}>Location</TableCell>
                <TableCell sx={{color:'white'}}>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
            {filteredRows.map((row) => (
                  <TableRow key={row.id} sx={{ backgroundColor: row % 2 === 0 ? '#ffffff' : '#ffefc1' ,color:'red'}}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.designation}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>
                      <Button
                    variant="info"
                    onClick={() => handleUpdate(row)}
                    style={{ marginRight: '10px' }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </Button>
                    </TableCell>
                  </TableRow>
                    ))}
             </TableBody>
          </Table>
        </TableContainer>
      <div>
      </div>
      </Container>
      
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', position: "absolute", bottom: 0, left: 0, right: 0 }}>
        © 2024 Copyright
        <a className="text-reset fw-bold"> RSETI</a>
      </div>
    </div>
  );
}

export default RowList;
