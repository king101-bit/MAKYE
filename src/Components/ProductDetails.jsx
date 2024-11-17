import React from "react";
import { useParams } from "react-router-dom";
import ShopNavbar from "./ShopNavbar";
import { Button, Carousel, Container } from "react-bootstrap";
import { Heart, ShoppingBag } from "lucide-react";
import ErrorPage from "../Components/ErrorPage";

const ProductDetails = () => {
  const { id, slug } = useParams();
  console.log("ID:", id, "Slug:", slug);

  // Mock product data
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
      colors: ["red", "blue", "black"],
    },
    {
      id: "2",
      slug: "sofo-backpack-city",
      name: "SoFo Backpack City",
      details: "Recycled Cotton Canvas",
      price: 25000.0,
      images: [
        "https://i.pinimg.com/736x/5f/d7/01/5fd7010a27121b4500cc794eab4095fa.jpg",
        "https://i.pinimg.com/736x/3e/6f/5e/3e6f5e81cbcae0bc2ad5d15d89420430.jpg",
      ],
      colors: ["green", "grey"],
    },
  ];

  // Find the product by ID && Slug
  const product = products.find((p) => p.id === id && p.slug === slug);
  console.log("Matched Product:", product);

  // Handle error scenarios (missing product or slug mismatch)
  if (!product) {
    return (
      <>
        <ErrorPage
          message="The product you are looking for doesn't exist. Please browse our shop for more options."
          redirectPath="/shop"
          redirectLabel="Go to Shop"
        />{" "}
      </>
    );
  }

  return (
    <>
      <ShopNavbar />
      <Container className="mt-5">
        <div className="row">
          {/* Carousel Section */}
          <div className="col-md-6">
            <Carousel>
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
            <div>
              <small>Specifications:</small>
              <div className="d-flex gap-3 mt-2">
                {product.colors.map((color, index) => (
                  <Button
                    key={index}
                    style={{
                      backgroundColor: color,
                      width: "40px",
                      height: "40px",
                    }}
                    className="rounded-circle border border-secondary"
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
                    style={{ width: "40px", height: "40px" }}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <p className="h4 mt-4">Price: &#8358;{product.price.toFixed(2)}</p>
            <div className="d-flex gap-3 mt-3">
              <Button variant="danger" size="lg" className="rounded-pill px-4">
                <ShoppingBag size={24} className="me-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline-danger"
                size="lg"
                className="rounded-pill px-4"
              >
                <Heart size={20} className="me-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
