import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [products] = useState([
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
    // Add more products...
  ]);

  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} lg={3}>
          <Link
            to={`/shop/products/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card className="border-0 rounded-none h-100">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
                height={200}
                width={300}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>&#8358;{product.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCard;
