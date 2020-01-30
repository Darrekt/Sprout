import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation: React.FC = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sprout</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Demo</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Navigation;