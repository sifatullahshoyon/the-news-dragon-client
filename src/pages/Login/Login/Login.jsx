import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="mt-5 mx-auto w-25">
      <Form>
        <h3>Login your account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="mx-auto text-secondary py-3">
            Dont’t Have An Account ? <Link to='/register' className="text-danger">Register</Link>
        </Form.Text>
        <Form.Text className="text-success">
            
        </Form.Text>
        <Form.Text className="text-danger">
            
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
