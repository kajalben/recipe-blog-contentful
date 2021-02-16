import React from "react";
import "../styles/header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = () =>{
    return(
        <div className="headerContainer">
            <div className="navbarContainer">
            <Navbar bg="transparent" expand="lg" >
                <Navbar.Brand href="#home">Bits & Bites</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown className="textColor bgColor" title="Our Sections" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Appetizers</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Salads</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <Button className="mx-3 textColor bgColor" variant="default" >Sign in</Button>
                    <Button className="mx-3 textColor bgColor" variant="default">Sign up</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <div className="claimContainer d-flex  justify-content-center">
            <h1>Bits & Bites</h1>
            
            
            
            </div>


        </div>
        
    );
}

export default Header;