import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import Logo from './img/logo.jpg';
import img from './img/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio.jpg';
import Footer from './footer';

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
          <h3 style={{ textAlign: 'center' }}>Welcome to Admin Panel</h3>
        </div>
        
        <p></p>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{formData.id ? 'Update Row' : 'Add Row'}</Modal.Title>
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              {formData.id ? 'Update' : 'Add'}
            </Button>
          </Modal.Footer>
        </Modal>  
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
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
  <Button variant="danger" onClick={handleShow}>Add Member</Button>
</div>
<div></div>
        <Table striped bordered hover responsive>
          <thead style={{ backgroundColor: 'black', color: 'white' }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Designation</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.phoneNumber}</td>
                <td>{row.designation}</td>
                <td>{row.location}</td>
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </center>
      <div>
      </div>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', position: "absolute", bottom: 0, left: 0, right: 0 }}>
        © 2024 Copyright
        <a className="text-reset fw-bold"> RSETI</a>
      </div>
    </div>
  );
}

export default RowList;
