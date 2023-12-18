import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserImage from "../../../assets/user.png";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <div className="mb-3">
          <img src={logo} alt="logo" />
        </div>
        <p>
          <small className="text-secondary  mb-2">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM , D YYYY")}</p>
      </div>
      <div className="d-flex bg-secondary text-white p-3 rounded my-5">
        <Button variant="danger" className="mr-2">
          Latest
        </Button>
        <Marquee speed={60}>
          I can be a React component, multiple React components, or just some
          text...... I can be a React component, multiple React components, or
          just some text......
        </Marquee>
      </div>
      <div className="mb-2">
        <Navbar collapseOnSelect expand="lg" className="bg-white">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <img src={UserImage} className="w-25 me-2 img-fluid" alt="" />
                  <Button variant="secondary">Secondary</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
