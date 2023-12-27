import React, { useContext, useState } from 'react';
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {
    const [accepted , setAccepted] = useState(false);
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(email , name , photo , password);

        createUser(email , password)
        .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch((error) => {
            console.error(error.message);
        })
    };

    const handleAccpeted = (event) => {
        setAccepted(event.target.checked);
    };

    return (
        <Container className="mt-5 mx-auto w-25">
      <Form onSubmit={handleRegister}>
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
          <Form.Check 
          onClick={handleAccpeted}
          type="checkbox" 
          name='accept' 
          label={<>Accept <Link to='/terms'>Term & Conditions</Link></>} />
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
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