import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShopNavbar from "./ShopNavbar";
import { Button, Card, Carousel, Container, Row, Col, Form  } from "react-bootstrap";
import {
  Heart,
  LucideThumbsDown,
  LucideThumbsUp,
  ShoppingBag,
} from "lucide-react";
import ErrorPage from "../Pages/ErrorPage";
import { useCart } from "../Constants/CartContext";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const { addToCart } = useCart();

  const { id, slug } = useParams();
  const [selectedColor, setSelectedColor] = useState(""); // Track selected color
  const [selectedSize, setSelectedSize] = useState(""); // Track selected size

  const products = [
    {
      id: "1",
      slug: "shibuya-totepack",
      name: "Shibuya Totepack",
      details: "Recycled PET Body",
      price: 18000.0,
      images: [
        "https://i.pinimg.com/736x/9c/79/b6/9c79b6230cf24eabcaa57e7c47c19f46.jpg",
        "https://i.pinimg.com/236x/89/d2/14/89d2142fe738848b5a44ec5e7cb9fadd.jpg",
        "https://i.pinimg.com/236x/f4/a1/0e/f4a10e5fed4bc4921e36b6a32103b44a.jpg",
      ],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: "2",
      slug: "sofo-backpack-city",
      name: "SoFo Backpack City",
      details: "Recycled Cotton Canvas",
      price: 25000.0,
      images: [
        "https://i.pinimg.com/474x/6a/e5/c8/6ae5c844974483dbf94bf6fc09f63999.jpg",
        "https://i.pinimg.com/474x/6a/e5/c8/6ae5c844974483dbf94bf6fc09f63999.jpg",
      ],
      colors: ["Green", "Grey"],
    },
    {
      id: "3",
      slug: "eco-tote-bag",
      name: "Eco Tote Bag",
      details: "Sustainable Design",
      price: 1000.0,
      images: [
        "https://i.pinimg.com/736x/0d/3b/3e/0d3b3e8a812df4ffbc470b4b9c566dca.jpg",
        "https://i.pinimg.com/736x/f1/58/a9/f158a96c2d172c766701beb736369868.jpg",
      ],
      colors: ["Green", "Grey", "Red", "Blue"],
    },
    {
      id: "4",
      slug: "ocean-shirt",
      name: "Ocean Shirt",
      details: "Sustainable Fabric",
      price: 15000.0,
      images: [
        "https://plus.unsplash.com/premium_photo-1692439050929-9c21209b0c29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "https://plus.unsplash.com/premium_photo-1692439051710-f8c2de2f068d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      ],
      colors: ["Blue", "Green", "Yellow", "Black", "Red"],
    },
  ];
  const product = products.find((p) => p.id === id && p.slug === slug);

  if (!product) {
    return (
      <ErrorPage
        message="The product you are looking for doesn't exist. Please browse our shop for more options."
        redirectPath="/shop"
        redirectLabel="Go to Shop"
      />
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to the cart.");
      return;
    }

    // Add product to cart with selected size and color
    addToCart({
      ...product,
      color: selectedColor,
      size: selectedSize,
      image: product.images[0], // Ensure this picks the first image
    });
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <ShopNavbar />
      <Container className="mt-5">
        <div className="row">
          {/* Carousel Section */}
          <div className="col-md-6">
            <Carousel fade>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    alt={`${product.name} Image ${index + 1}`}
                    className="d-block w-100 rounded"
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Product Details Section */}
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <p>{product.details}</p>
            <p className="h4 fw-bold">&#8358;{product.price.toFixed(2)}</p>
            <div>
              <h5>Rating: 4</h5>
              <ReactStars
                count={5}
                value={4}
                onChange={ratingChanged}
                size={25}
                activeColor="#ffd700"
              />
              <small>Specifications:</small>

              {/* Color Options */}
              <div className="d-flex gap-3 mt-2">
                {product.colors.map((color, index) => (
                  <Button
                    key={index}
                    style={{
                      backgroundColor: color,
                      width: "50px",
                      height: "50px",
                      border: selectedColor === color ? "2px solid black" : "",
                    }}
                    className="rounded-circle border border-secondary"
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Color option: ${color}`}
                  />
                ))}
              </div>

              {/* Size Options */}
              <div className="d-flex gap-3 mt-3">
                {["S", "M", "L", "XL"].map((size, index) => (
                  <Button
                    key={index}
                    variant="outline-danger"
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor:
                        selectedSize === size ? "rgba(255, 0, 0, 0.1)" : "",
                    }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div className="d-flex gap-3 mt-3">
              <Button
                variant="danger"
                size="lg"
                className="px-4 w-100"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={24} className="me-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline-danger"
                size="lg"
                className="rounded-pill px-4"
              >
                <Heart size={20} className="" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-4">
        <h3>Product Reviews</h3>
        <hr />
<div className="d-flex align-items-center">
      <Form.Control
        as="textarea"
        placeholder="Write something..."
        rows={2}
        className="me-2 mb-4"
        style={{ width: "300px", resize: "none" }}
      />
      <Button variant="outline-danger" size="lg" className="mb-4">
        Post
      </Button>
    </div>
        <Row>
          <Col>
            {" "}
            <Card>
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <small>@JohnnyDoins</small>
                <Card.Text>I absolutely love this bag its so good.</Card.Text>
                <div className="d-flex gap-2">
                  <ReactStars
                    count={5}
                    value={4}
                    onChange={ratingChanged}
                    size={25}
                    activeColor="#ffd700"
                  />{" "}
                  <small>2022-05-15</small>
                  <div className="me-2 ">
                    <LucideThumbsUp />
                    <LucideThumbsDown />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Mikhael Roze</Card.Title>
                <small>@Mikhael92ro</small>
                <Card.Text>I love this bag its so compact.</Card.Text>
                <div className="d-flex gap-2">
                  <ReactStars
                    count={5}
                    value={5}
                    onChange={ratingChanged}
                    size={25}
                    activeColor="#ffd700"
                  />{" "}
                  <small>2022-06-18</small>
                  <div className="me-2 ">
                    <LucideThumbsUp />
                    <LucideThumbsDown />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
