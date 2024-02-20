import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { login } from './APIs';

function SignIn({onSignUpClick, onForgotPasswordClick, onSignIn}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    const result = await login(data);
    console.log(result);

    // if login is successful, save user to local storage and close the modal
    if(result.responseCode === 200){
      localStorage.setItem("user", JSON.stringify(result.responseData.user));
      localStorage.setItem("accessToken", result.responseData.accessToken);
      onSignIn();
    }
  };
  return (
    <div style={{ 
      backgroundColor: '#2c2d30', 
      padding: '20px', 
      borderRadius: '10px', 
      boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)', 
    }}>
      <Modal.Header closeButton style={{border : 'none', padding : '0', color:'white'}}></Modal.Header>
      <Form onSubmit={handleSubmit}>
        <h1 style={{fontSize:'1.5rem', fontWeight:'bold', textAlign:'center'}}>Login Into QuickChop</h1>
        <Form.Group controlId="phoneNumber" style={{padding: '10px'}}>
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="tel" name='phoneNumber' defaultValue="+237" placeholder="Please enter your Mobile Money number" />
        </Form.Group>

        <Form.Group controlId="password" style={{padding : '10px'}}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
         <div style={{ textAlign: 'right', padding: '10px' }}> <Form.Text className="text-muted" >
          <a href="#" onClick={onForgotPasswordClick} >FORGOT PASSWORD</a>
        </Form.Text>
        </div>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width: '100%', padding:'10px'}}>
          LOGIN
        </Button>
        <p style={{textAlign:'center', paddingTop:'20px'}}>By using this platform I attest that I am at least 18 years old and have read and agree to the <a href="#terms">Terms of Service</a></p>
        <p  style={{textAlign:'center', paddingTop:'10px'}} >Don't have an account? <a href="#" onClick={onSignUpClick} >Sign Up now</a></p>
      </Form>
    </div>
  );
}

export default SignIn;
