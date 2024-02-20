import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { register } from './APIs';

function SignUp({onSignInClick, onSignUp}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    const result = await register(data);
    console.log(result);
    if(result.responseCode === 200){
      localStorage.setItem("user", JSON.stringify(result.responseData.user));
      onSignUp();
    };
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
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>Sign Up Instantly</h1>
        <Form.Group controlId="displayName" style={{ padding: '10px' }}>
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="text" name='userName' />
          <p>A unique public name, eg Code999. Please note it does not have to be your real name</p>
        </Form.Group>

        <Form.Group controlId="phoneNumber" style={{ padding: '10px' }}>
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="tel" name='phoneNumber' defaultValue="+237" placeholder="Please enter a valid Mobile Money number. All deposits & withdrawals will be made through this number" />
          <p>Please enter a valid Mobile Money number. All deposits & withdrawals will be made through this number</p>
        </Form.Group>

        <Form.Group controlId="password" style={{ padding: '10px' }}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="referral" style={{ padding: '10px' }}>
          <Form.Label>Referral</Form.Label>
          <Form.Control type="text" name='referral' />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%', padding: '10px' }}>
          JOIN QUICKCHOP
        </Button>

        <p style={{ textAlign: 'center', paddingTop: '20px' }}>By using this platform I attest that I am at least 18 years old and have read and agree to the <a href="#terms">Terms of Service</a></p>
        <p style={{ textAlign: 'center', paddingTop: '10px' }}>Already had an account? <a href="#" onClick={onSignInClick} >Sign In now</a></p>
      </Form>
    </div>
  );
}

export default SignUp;
