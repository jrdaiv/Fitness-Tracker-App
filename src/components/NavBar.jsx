import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/ComponentStyles.css';
import { Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Container className='nav-container'>
      <Navbar fixed="top" expand="sm" collapseOnSelect bg="transparent" variant="dark">
        <Navbar.Brand className='logo'>Fitness Tracker</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/exercises">Exercises</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
  );
};

export default NavBar;
