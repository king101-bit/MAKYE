import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png"; // Update the path as per your project
import { ShoppingBag, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShopNavbar = () => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  const gotToAccount = () => {
    navigate("/account");
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Brand Logo" width={80} height={80} />
        </Navbar.Brand>
        <Nav className="ms-auto align-items-center gap-3">
          <Nav.Link href="/cart" onClick={goToCart}>
            <ShoppingBag size={24} color="black" />
            Cart 0
          </Nav.Link>
          <Nav.Link href="/account" onClick={gotToAccount}>
            <User size={24} color="black" />
            My Account
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ShopNavbar;
