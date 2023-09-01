import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ backgroundColor: "#edefee" }}
      className="border-bottom border-primary border-4"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src="/assets/Logo.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" className="ms-auto">
            <Nav.Link className="text-secondary fw-bold" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-secondary fw-bold " as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link className="text-secondary fw-bold " as={Link} to="/Menu">
              Menu
            </Nav.Link>
            <Nav.Link
              className="text-secondary fw-bold "
              as={Link}
              to="/Reservations"
            >
              Reservations
            </Nav.Link>
            <Nav.Link
              className="text-secondary fw-bold "
              as={Link}
              to="/Orders"
            >
              Orders
            </Nav.Link>
            <Nav.Link className="text-secondary fw-bold " as={Link} to="/Login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
