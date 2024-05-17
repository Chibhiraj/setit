import React, { useState,useEffect } from "react";
import { Modal, Button, Form, Table,Row,Col } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const  EventsTable=() =>{

  const [rows, setRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editEventId, setEditEventId] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  
  const [formData, setFormData] = useState({
    eventName:'',
    eventLink:'',
    eventDate:''
  });
  const [Events, setEvents] = useState([]);
  const [updatedEvent, setUpdatedEvent] = useState({
    eventName:'',
    eventLink:'',
    eventDate:'',
  });
  
  const [deletedEventId, setDeletedEventId] = useState('');
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleEdit = (Event) => {
    setEditEventId(Event._id);
    setShowUpdateModal(true);
    setUpdatedEvent({ 
      eventName:Event.eventName,
      eventLink:Event.eventLink,
      eventDate:Event.eventDate,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(formData.eventDate)

    axios.post("https://setit-events.onrender.com/", {
      eventName:formData.eventName,
      eventLink:formData.eventLink,
      eventDate:formData.eventDate
    })
    .then((response) => {
      console.log(response);
      // console.log("success");
    });
    // Update existing row
    setRows((prevRows) =>
    prevRows.map((row) => (row._id === formData._id ? formData : row))
    );
    
    handleClose();
    updateIds(); // Update IDs after updating row
    
  };

  
  useEffect(() => {
    axios.get("https://setit-events.onrender.com/")
    .then((response) => {
      setEvents(response.data);
    })
    .catch((error) => {
      console.error("Error fetching Events:", error.response.data);
    });
  }, [Events,updatedEvent,deletedEventId]);
  
  
  const handleUpdate = () => {
    axios.put(`https://setit-events.onrender.com/${editEventId}`, updatedEvent)
    .then((response) => {
      
      console.log("Event updated:", response.data);
      axios.get("https://setit-events.onrender.com/")
      .then((response) => {
        setEvents(response.data);
        // setShowModal(false); // Close the edit modal after update
        setShowUpdateModal(false); // Close the edit modal after update
      })
      .catch((error) => {
        console.error("Error fetching Events:", error.response.data);
      });
    })
    .catch((error) => {

      console.error("Error updating Event:", error.response.data);
    });
  };
  
  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    updateIds(); // Update IDs after deletion
    axios.delete(`https://setit-events.onrender.com/${id}`)
    .then((response) => {
      axios.get("https://setit-events.onrender.com/")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error.response.data);
      });
    })
    .catch((error) => {
      console.error("Error deleting event:", error.response.data);
    });
  };
  
  const handleClose = () => {
    setShowModal(false);
    setShowUpdateModal(false);
    setFormData({
      id:null,
      eventName:"",
      eventLink:"",
      eventDate:""
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


  return (
    <div>
      <center>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {formData._id ? "Updating" : "Add Event"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="eventName">
                    <Form.Label>Enter Event Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Event name"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="eventDate">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Event date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
                <Col>
                  <Form.Group controlId="eventLink">
                    <Form.Label>Event Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Event Link"
                      name="eventLink"
                      value={formData.eventLink}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showUpdateModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{"Updating"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="eventName">
                    <Form.Label>Enter Event Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Event name"
                      name="eventName"
                      value={updatedEvent.eventName}
                      onChange={(e) =>
                        setUpdatedEvent({
                          ...updatedEvent,
                          eventName: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="eventDate">
                    <Form.Label>Event date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Event Date"
                      name="eventDate"
                      value={updatedEvent.eventDate}
                      onChange={(e) =>
                        setUpdatedEvent({
                          ...updatedEvent,
                          eventDate: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
                <Col>
                  <Form.Group controlId="eventLink">
                    <Form.Label>Event Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Event Link"
                      name="eventLink"
                      value={updatedEvent.eventLink}
                      onChange={(e) =>
                        setUpdatedEvent({
                          ...updatedEvent,
                          eventLink: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
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
            justifyContent: "flex-end",
            marginTop: "20px",
            paddingRight: 60,
          }}
        >
          <div>
            <Button variant="primary" onClick={handleShow} size="sm">
              + Add Event
            </Button>
          </div>
        </div>
      </center>
       
      
    
        <Container sx={{ padding: 4 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 100, fontfamily: "Calibri" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{ color: "white" }}>
                {/* <TableCell sx={{ color: "white" }}>S.no</TableCell> */}
                <TableCell sx={{ color: "white" }}>Event Name</TableCell>
                <TableCell sx={{ color: "white" }}>Event Link</TableCell>
                <TableCell sx={{ color: "white" }}>Event Date</TableCell>
                <TableCell sx={{ color: "white" }}>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
            {Events.length===0 ?(
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No current events
                </TableCell>
              </TableRow>
            ) :(
              Events.map((row) => (
                <TableRow key={row._id}>
                  {/* <TableCell>{row._id}</TableCell> */}
                  <TableCell>{row.eventName}</TableCell>
                  <TableCell>{row.eventLink}</TableCell>
                  <TableCell>{row.eventDate}</TableCell>
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
              ))
            )}
            </TableBody>
          </Table>
        </TableContainer>
        <div></div>
      </Container> 
    </div>
  );
}

export default EventsTable;