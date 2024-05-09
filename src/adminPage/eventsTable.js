import React, { useState,useEffect } from "react";
import { Modal, Button, Form, Table,Row,Col } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import axios from "axios";

const EventsTable = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventData, setEventData] = useState({
    eventName:"",
    eventLink:""
  });
  
  const [events, setEvents] = useState([]);
  const handleShowEventModal = () => setShowEventModal(true);
  const handleCloseEventModal = () => setShowEventModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://setit-events.onrender.com", {
      eventName:eventData.eventName,
      eventLink:eventData.eventLink
    })
    .then((response) => {
      console.log(response);
    });
    handleClose();
  };

  useEffect(() => {
    axios.get("https://setit-events.onrender.com")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error.response.data);
      });
  }, [eventData]);

  const handleClose = () => {
    setShowEventModal(false);
    // ShowUpdateModal(false);
    setEventData({
      eventName:"",
      eventLink:""
    });
  };
  return (
    
    <div>
    <div style={{paddingBottom:"10px"}}>

    <Button
      size="sm"
      variant="success"
      style={{ marginLeft: "10px" ,marginRight:"5px",paddingBottom:"10px"}}
      onClick={handleShowEventModal}
    >
      Add Events
    </Button>
  </div>
    <Container sx={{padding:2}}>

    <TableContainer component={Paper}>

     <Table striped bordered hover 
          sx={{ minWidth: 10, fontfamily: "Calibri" }}
          aria-label="simple table"
     >
      <thead>
        <tr>
          <th>ID</th>
          <th>Event Name</th>
          <th>Event Link</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => (
          <tr key={event._id}>
            <td>{event.id}</td>
            <td>{event.eventName}</td>
            <td>{event.eventLink}</td>
          </tr>
        ))}
      </tbody>
    </Table>

    </TableContainer>
    </Container>


    <Modal show={showEventModal} onHide={handleCloseEventModal}>
    <Modal.Header closeButton>
      <Modal.Title>Add Event</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formEventName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            name="eventName"
            placeholder="Enter event name"
            value={eventData.eventName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEventLink">
          <Form.Label>Event Link</Form.Label>
          <Form.Control
            type="text"
            name="eventLink"
            placeholder="Enter event link name"
            value={eventData.eventLink}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseEventModal}>
        Close
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Add Event
      </Button>
    </Modal.Footer>
  </Modal>
    </div>
  )
}

export default EventsTable;