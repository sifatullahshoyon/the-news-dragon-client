import React, { useContext } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {

    const  navigate = useNavigate();
    const location = useLocation();
    console.log('location pathName:' ,location);
    const {signIn} = useContext(AuthContext);
    const from = location?.state?.from?.pathname || 'https://the-news-dragon-server-ffkcq17c2-sifat-ullah-shoyons-projects.vercel.app/categories/0'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email , password);

        signIn(email , password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from , {replace : true});
        })
        .catch((error) => {
            console.error(error.message);
        })
    };

  return (
    <Container className="mt-5 mx-auto w-25">
      <Form onSubmit={handleLogin}>
        <h3>Login your account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
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
