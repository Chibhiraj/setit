import { Modal, Button, Form, Table,Row,Col } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { auto } from "@popperjs/core";
import axios from "axios";
import '../App.css';


export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("https://setit-events.onrender.com")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error.response.data);
      });
  }, [setEvents]);
  return (
    <div >
  <Container sx={{padding:4}} >
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: auto, }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow >
              <TableCell >Event Name</TableCell>
              <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {events.length===0 ?(
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No current events
                </TableCell>
              </TableRow>
            ) :(events.map(event => (
            < TableRow  className="blinking-event" key={event._id}>
              <TableCell >{event.eventName}</TableCell>
              <TableCell> <a href="">{event.eventLink}</a></TableCell>
          </TableRow>
        )))}
          </TableBody>
        </Table>  
      </TableContainer>
      <div></div>
    </Container>

    </div>
  );
}