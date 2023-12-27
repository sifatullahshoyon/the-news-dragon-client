import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";


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
        
      </div>
    </Container>
  );
};

export default Header;
