import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Simulate successful login
    if (username === 'admin' && password === '123') {
      localStorage.setItem('user','test');
      navigate('/admin')
      // Reset form fields
      setUsername('');
      setPassword('');
      // Close modal after submission
      // Navigate to the new page
      // scrollToBottom(); // Replace '/new-page' with the path of the new page
    } else {
      alert('Invalid username or password');
      navigate('/'); // Replace '/new-page' with the path of the new page
      setShowModal(false);

      // You can display an error message or handle invalid credentials here
    }
  };

  return (
    <div>
      <Button variant="outline" style={{ color: 'green', borderColor: 'green' }} onClick={handleLoginClick}>
        Login
      </Button>
      
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
  
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;
