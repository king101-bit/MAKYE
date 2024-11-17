import React from "react";
import { useParams } from "react-router-dom";
import ShopNavbar from "./ShopNavbar";
import { Button } from "react-bootstrap";

const ProductDetails = () => {
  // Get the product ID from the URL
  const { id } = useParams();
  // Example: Mock product data (replace with real data from an API or context)
  const products = [
    {
      id: "1",
      name: "Shibuya Totepack",
      details: "Recycled PET Body",
      price: 180.0,
      image:
        "https://i.pinimg.com/736x/9c/79/b6/9c79b6230cf24eabcaa57e7c47c19f46.jpg",
    },
    {
      id: "2",
      name: "SoFo Backpack City",
      details: "Recycled Cotton Canvas",
      price: 250.0,
      image:
        "https://i.pinimg.com/736x/5f/d7/01/5fd7010a27121b4500cc794eab4095fa.jpg",
    },
  ];

  // Find the product by ID
  const product = products.find((prod) => prod.id === id);

  // Handle case where product is not found
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <ShopNavbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded img"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <p>{product.details}</p>
            <p className="h4">Price: &#8358;{product.price.toFixed(2)}</p>
            <Button variant="danger" size="lg" className="rounded-pill px-4">
              Add to Cart
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
