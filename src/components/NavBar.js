
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/recipes">
        <Navbar.Brand>Recipe Box</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/recipes">
            <Nav.Link>Recipes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/recipes/new">
            <Nav.Link>Add Recipe</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

