import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import "../App.css";
import { Link } from "react-router-dom";

const HeroNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" width={80} height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {/* Corrected: `Nav.Link` cannot be used inside `Link`, replaced with plain `Link` */}
            <Link to="/" className="nav-link">
              <strong>Home</strong>
            </Link>
            <Nav.Link href="#about">
              <strong>About</strong>
            </Nav.Link>
            <Nav.Link href="#contact">
              <strong>Contact</strong>
            </Nav.Link>
            {/* Corrected: Moved `Button` directly inside `Link` */}
            <Link to="/signup" className="nav-link">
              <Button variant="outline-danger">
                <strong>Sign Up</strong>
              </Button>
            </Link>
            <Link to="/login" className="nav-link">
              <Button variant="danger">
                <strong>Login</strong>
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeroNavbar;
