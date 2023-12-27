import React from 'react';
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Container className="mt-5 mx-auto w-25">
      <Form>
        <h3>Register your account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter Photo URL" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name='accept' label="Accept Term & Conditionst" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="mx-auto text-secondary py-3">
            Already Have An Account ? <Link to='/login' className="text-danger">Login</Link>
        </Form.Text>
        <Form.Text className="text-success">
            
        </Form.Text>
        <Form.Text className="text-danger">
            
        </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;