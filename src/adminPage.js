import { Modal, Button, Form, Table,Row,Col } from "react-bootstrap";
import Logo from "./img/logo.jpg";
import { Navigate, useNavigate } from "react-router";
import React, { useState,useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const RowList=() =>{
  const [rows, setRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [formData, setFormData] = useState({

    shopName: "",
    ownerName: "",
    phoneNumber: "",
    address: "",
    designation: "",
    productLink: "",
    location: "",
  });
  const [users, setUsers] = useState([]);
  const [updatedUser, setUpdatedUser] = useState({
    shopName: "",
    ownerName: "",
    phoneNumber: "",
    address: "",
    designation: "",
    productLink: "",
    location: "",
  });

  const [deletedUserId, setDeletedUserId] = useState('');
  var shopName=formData.shopName;
  var ownerName=formData.ownerName;
  var phoneNumber=formData.phoneNumber;
  var address=formData.address;
  var designation=formData.designation;
  var productLink=formData.productLink;
  var location=formData.location;
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal open/close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    updateIds(); // Update IDs after deletion
    axios.delete(`https://setit-backend.onrender.com/${id}`)
    .then((response) => {
      axios.get("https://setit-backend.onrender.com")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error.response.data);
      });
    })
    .catch((error) => {
      console.error("Error deleting user:", error.response.data);
    });
  };
  
  const handleEdit = (user) => {
    setEditUserId(user._id);
    setShowUpdateModal(true);
    setUpdatedUser({ shopName:user.shopName,
      ownerName:user.ownerName,
      phoneNumber:user.phoneNumber,
      address:user.address,
      designation:user.designation,
      productLink:user.productLink,
      location:user.location });
  };
  const handleUpdate = () => {

    axios.put(`https://setit-backend.onrender.com/${editUserId}`, updatedUser)
    .then((response) => {
      console.log("User updated:", response.data);
    axios.get("https://setit-backend.onrender.com")
    .then((response) => {
      setUsers(response.data);
      // setShowModal(false); // Close the edit modal after update
      setShowUpdateModal(false); // Close the edit modal after update
    })
    .catch((error) => {
      console.error("Error fetching users:", error.response.data);
    });
})
      .catch((error) => {
      console.error("Error updating user:", error.response.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValidPhoneNumber = validatePhoneNumber(formData.phoneNumber);

    // if (!isValidPhoneNumber) {
    //   setPhoneNumberError("Invalid phone number");
    //   alert("Enter valid phone number");
    //   return; 
    // }
    // setPhoneNumberError("");

    const newUser={
      shopName:formData.shopName,
      ownerName:formData.ownerName,
      phoneNumber:formData.phoneNumber,
      address:formData.address,
      designation:formData.designation,
      productLink:formData.productLink,
      location:formData.location
    }
    // axios.post('https://setit-backend.onrender.com',newUser);
    axios.post("https://setit-backend.onrender.com", {
      shopName:formData.shopName,
      ownerName:formData.ownerName,
      phoneNumber:formData.phoneNumber,
      address:formData.address,
      designation:formData.designation,
      productLink:formData.productLink,
      location:formData.location
    })
    .then((response) => {
      console.log(response);
    });
      // Update existing row
      setRows((prevRows) =>
        prevRows.map((row) => (row._id === formData._id ? formData : row))
      );
    
    handleClose();
    updateIds(); // Update IDs after updating row
    
  };
  useEffect(() => {
    axios.get("https://setit-backend.onrender.com")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error.response.data);
      });
  }, [users,updatedUser,deletedUserId]);

  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowUpdateModal(false);
    setFormData({
      id: null,
      shopName: "",
      ownerName: "",
      phoneNumber: "",
      address: "",
      designation: "",
      productLink: "",
      location: ""
    });
  };

  const handleShow = () => setShowModal(true);

  const updateIds = () => {
    // Update IDs to ensure they are sequential
    setRows((prevRows) =>
      prevRows.map((row, index) => ({
        ...row,
        id: index + 1,
      }))
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = users.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div
      style={{
        padding: 10,
        backgroundSize: "cover",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <div className="container" style={{ maxWidth: 500 }}>
        <img src={Logo} className="img-fluid" alt="..." />
      </div>
      <div>
        <p></p>
      </div>
      <center>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3
            style={{ textAlign: "center", animation: "blinking 1s infinite" }}
          >
            Welcome to Admin Panel
          </h3>
        </div>

    
   
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{formData._id ? "Updating" : "Add Member"}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form>
            <Row>
            <Col>
              <Form.Group controlId="shopName">
                <Form.Label>Brand/ Shop Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Shop/Brand name"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="ownerNname">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Owner name"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                />
              </Form.Group>
              </Col>
              </Row>
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
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="designation">
                <Form.Label>Specializaion</Form.Label>
                <Form.Select
                  aria-label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                >
                  <option value="">Select Specializaion</option>
                  <option value="Ac repair">Ac repair</option>
                  <option value="Beauty parlours">Beauty parlours</option>
                  <option value="Cctv repair">Cctv repair</option>
                  <option value="Cellphone Repair">Cellphone Repair</option>
                  <option value="Costume designers">Costume designers</option>
                  <option value="EMBROIDERY">EMBROIDERY</option>
                  <option value="Framing">Framing</option>
                  <option value="Home made masalas">Home made masalas</option>
                  <option value="JUTE PRODUCTS">JUTE PRODUCTS</option>
                  <option value="Lamination">Lamination</option>
                  <option value="Mushroom producers">Mushroom producers</option>
                  <option value="Organics">Organics</option>
                  <option value="Paper products">Paper products</option>
                  <option value="Photography and Videography">
                    Photography and Videography
                  </option>
                  <option value="SERVICE TECHNICIANS">
                    SERVICE TECHNICIANS
                  </option>
                  <option value="Soft toys">Soft toys</option>
                  <option value="TAILORS">TAILORS</option>
                  <option value="Wiring">Wiring</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="product">
                <Form.Label>Product Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product link"
                  name="productLink"
                  value={formData.productLink}
                  onChange={handleChange}
                />
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
              {/* <Form.Group controlId="image">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              {"Add"}
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showUpdateModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{ "Updating"}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form>
            <Row>
            <Col>
              <Form.Group controlId="shopName">
                <Form.Label>Brand/ Shop Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Shop/Brand name"
                  name="shopName"
                  value={updatedUser.shopName}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, shopName: e.target.value })}
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="ownerNname">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Owner name"
                  name="ownerName"
                  value={updatedUser.ownerName}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, ownerName: e.target.value })}
                />
              </Form.Group>
              </Col>
              </Row>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={updatedUser.phoneNumber}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, phoneNumber: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={updatedUser.address}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, address: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="designation">
                <Form.Label>Specializaion</Form.Label>
                <Form.Select
                  aria-label="Designation"
                  name="designation"
                  value={updatedUser.designation}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, designation: e.target.value })}
                >
                  <option value="">Select Specializaion</option>
                  <option value="Ac repair">Ac repair</option>
                  <option value="Beauty parlours">Beauty parlours</option>
                  <option value="Cctv repair">Cctv repair</option>
                  <option value="Cellphone Repair">Cellphone Repair</option>
                  <option value="Costume designers">Costume designers</option>
                  <option value="EMBROIDERY">EMBROIDERY</option>
                  <option value="Framing">Framing</option>
                  <option value="Home made masalas">Home made masalas</option>
                  <option value="JUTE PRODUCTS">JUTE PRODUCTS</option>
                  <option value="Lamination">Lamination</option>
                  <option value="Mushroom producers">Mushroom producers</option>
                  <option value="Organics">Organics</option>
                  <option value="Paper products">Paper products</option>
                  <option value="Photography and Videography">
                    Photography and Videography
                  </option>
                  <option value="SERVICE TECHNICIANS">
                    SERVICE TECHNICIANS
                  </option>
                  <option value="Soft toys">Soft toys</option>
                  <option value="TAILORS">TAILORS</option>
                  <option value="Wiring">Wiring</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="product">
                <Form.Label>Product Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product link"
                  name="productLink"
                  value={updatedUser.productLink}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, productLink: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  name="location"
                  value={updatedUser.location}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, location: e.target.value })}
                />
              </Form.Group>
              {/* <Form.Group controlId="image">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ margin: "0 10px", width: "300px" }}
          />
          {filteredRows.length > 0 && (
            <p style={{ margin: 0 }}>
              Number of Members: {filteredRows.length}
            </p>
          )}
          <div>
            <Button variant="primary" onClick={handleShow}  size="sm">
              + Add Member
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={handleLogout}
              style={{ marginLeft: "10px" }}
            >
              Logout
            </Button>
          </div>
        </div>
        <div>
          <div>
            <p></p>
          </div>{" "}
        </div>
      </center>
      <Container sx={{padding:4}}>
      
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 100, fontfamily: "Calibri" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{ color: "white" }}>
                <TableCell sx={{ color: "white" }}>S.no</TableCell>
                <TableCell sx={{ color: "white" }}>Shop Name</TableCell>
                <TableCell sx={{ color: "white" }}>Owner Name</TableCell>
                <TableCell sx={{ color: "white" }}>Phone Number</TableCell>
                <TableCell sx={{ color: "white" }}>Address</TableCell>
                <TableCell sx={{ color: "white" }}>Specializaion</TableCell>
                <TableCell sx={{ color: "white" }}>Product Link</TableCell>
                <TableCell sx={{ color: "white" }}>Location Link</TableCell>
                {/* <TableCell sx={{ color: "white" }}>Image</TableCell> */}
                <TableCell sx={{ color: "white" }}>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map(row => (
                <TableRow
                  key={row._id}
                >
                  <TableCell>{row._id}</TableCell>
                  <TableCell>{row.shopName}</TableCell>
                  <TableCell>{row.ownerName}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.productLink}</TableCell>
                  <TableCell style={{ color: "blue" }}>
                    <a href={row.location}>Location</a>
                  </TableCell>
                  <TableCell>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() => handleEdit(row)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(row._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>  
        </TableContainer>
        <div></div>
      </Container>

      <div
        className="text-center p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        © 2024 Copyright
        <a className="text-reset fw-bold"> RSETI</a>
      </div>
    </div>
  );
}

export default RowList;