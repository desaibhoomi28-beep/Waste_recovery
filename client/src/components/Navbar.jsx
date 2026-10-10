import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="custom-navbar shadow-sm"
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="logo">
          <FaLeaf className="me-2 text-success" />
          EcoBridge
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">

          {/* Center Navigation */}
          <Nav className="mx-auto">

            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Features
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              About
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Contact
            </ScrollLink>

          </Nav>

          {/* Right Buttons */}
          <div>

            <Button
              variant="outline-success"
              className="rounded-pill me-3 px-4"
              as={Link}
              to="/login"
            >
              Login
            </Button>

            <Button
              className="register-btn"
              as={Link}
              to="/register"
            >
              Register
            </Button>

          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;