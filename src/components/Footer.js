import React from "react";
import "../styles/footer.css";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div className="footerContainer d-flex justify-content-center align-items-center">
      <div className="footerNavContainer">
        <Nav
          className="justify-content-center"
          activeKey="/home"
          bg="transparent"
        >
          <Nav.Item>
            <Nav.Link href="/home">
              <p className="linkText">Home</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <p className="linkText ">Terms & Conditions</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <p className="linkText">Contact</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <p className="linkText">FAQ</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        
      </div>
      <div className="copy-right">
      <i class="far fa-copyright"></i>
        <span>
          2021 Copyright: {" "}
          <a href="https://www.homecookingadventure.com/" target="_blank">
            homecookingadventure
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
