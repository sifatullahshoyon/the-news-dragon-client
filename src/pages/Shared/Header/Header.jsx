import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserImage from "../../../assets/user.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const {user} = useContext(AuthContext);
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
                <Nav.Link href="#"><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Career</Nav.Link>
              </Nav>
              <Nav className="d-flex">
              {user && <Nav.Link>
                    <FaUserCircle style={{fontSize : '2.5rem'}} />
                  </Nav.Link>}
                <Nav.Link eventKey={2} href="#memes">
                  {
                    user ? 
                    <Button variant="secondary">Logout</Button> : 
                    <Link to='/login'><Button variant="secondary">LogIn</Button></Link>
                  }
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
