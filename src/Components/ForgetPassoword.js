import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function ForgotPassword() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const response = await fetch('http://localhost:3000/users/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
      };
  return (
    <div style={{ 
        backgroundColor: '#2c2d30', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)', 
        
        margin: 'auto'
      }}>
      <Modal.Header closeButton style={{ border: 'none', padding: '0', color: 'white' }}></Modal.Header>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>FORGOT PASSWORD</h1>
        <Form.Group controlId="phoneNumber" style={{ padding: '10px' }}>
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="tel" name='phoneNumber' placeholder="Enter phone number" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%', padding: '10px' }}>
          SEND RESET CODE
        </Button>
      </Form>
    </div>
  );
}

export default ForgotPassword;
