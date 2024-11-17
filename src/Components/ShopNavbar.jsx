import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/shop.css";

const ShopNavbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Navigate to the shop page with the search query
    if (query.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
    } else {
      navigate(`/shop`);
    }

    // Optionally call onSearch if needed
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Brand Logo" width={80} height={80} />
        </Navbar.Brand>
        <Form className="mx-auto" style={{ width: "50%" }}>
          <FormControl
            type="search"
            placeholder="Search products"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Form>
        <Nav className="ms-auto align-items-center gap-3">
          <Nav.Link
            onClick={() => navigate("/cart")}
            className="fw-bold d-flex align-items-center"
          >
            <ShoppingCart size={24} className="me-1" />
            Cart <span className="ms-1">0</span>
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/account")}
            className="fw-bold d-flex align-items-center"
          >
            <User size={24} className="me-1" />
            My Account
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default ShopNavbar;
