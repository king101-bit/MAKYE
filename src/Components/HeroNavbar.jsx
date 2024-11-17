import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import "../App.css";

const HeroNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" width={80} height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="/">
              <strong>Home</strong>
            </Nav.Link>
            <Nav.Link href="/shop">
              <strong>Shop</strong>
            </Nav.Link>
            <Nav.Link href="#about">
              <strong>About</strong>
            </Nav.Link>
            <Nav.Link href="#contact">
              <strong>Contact</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeroNavbar;
