import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navid Adib
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/weather">
            Weather
          </Nav.Link>
          <Nav.Link as={Link} to="/coins">
            Coins
          </Nav.Link>
          <Nav.Link as={Link} to="/todo">
            Todos
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
