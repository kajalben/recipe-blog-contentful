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
            <Navbar bg="transparent" expand="lg">
  <Navbar.Brand href="#home">Bits & Bites</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Lunch</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <Button className="nav-button mx-3" >Sign in</Button>
      <Button className="mx-3" variant="success">Sing up</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

<h1>Header</h1>
        </div>
        
    );
}

export default Header;