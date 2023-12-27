import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProviders";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">Home</Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Career</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            {user && (
              <Nav.Link>
                <FaUserCircle style={{ fontSize: "2.5rem" }} />
              </Nav.Link>
            )}

            {user ? (
              <Button variant="secondary">Logout</Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">LogIn</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
