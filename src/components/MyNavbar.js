import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <Navbar.Brand>Navid Adib</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/weather"
            >
              Weather
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/todo"
            >
              Todos
            </Link>
          </Nav.Link>

          <Nav.Link>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/coins"
            >
              Coins
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
