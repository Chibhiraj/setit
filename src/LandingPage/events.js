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

import '../App.css';


export default function Events() {
  return (
    <div>
  <Container sx={{padding:4}}>
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
              <TableRow
                key=''
              >
                <TableCell className="blinking-event">Event 1</TableCell>
                <TableCell>Apply</TableCell>
              </TableRow>
          </TableBody>
        </Table>  
      </TableContainer>
      <div></div>
    </Container>

    </div>
  );
}