import { Navbar, Nav, Container, Button } from "react-bootstrap";
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
            <Nav.Link href="#contact">
              <strong>Contact</strong>
            </Nav.Link>
            <Nav.Link href="/signup">
              <Button variant="outline-danger">
                {" "}
                <strong>Sign Up</strong>
              </Button>
            </Nav.Link>
            <Nav.Link href="/login">
              <Button variant="danger">
                {" "}
                <strong>Login</strong>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeroNavbar;
