import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const FeaturedProduct = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Sweater",
      image:
        "https://images.unsplash.com/photo-1510347026072-2c042ed96d42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN3ZWF0ZXJ8ZW58MHx8MHx8fDA%3D",
      price: 19.99,
      description: "A stylish and comfortable sweater.",
    },
    {
      id: 2,
      name: "Shirt",
      image:
        "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      price: 15.99,
      description: "A versatile and stylish shirt.",
    },
    {
      id: 3,
      name: "Pants",
      image:
        "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      price: 24.99,
      description: "A comfortable and stylish pair of pants.",
    },
    {
      id: 4,
      name: "Crop Top",
      image:
        "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      price: 20.99,
      description: "A stylish pair of Crop top.",
    },
    // Add more products as needed
  ];

  return (
    <>
      <section className="py-5">
        <Container>
          <h1 className="display-4 font-weight-bold mb-5 text-center">
            Our Featured Products
          </h1>{" "}
          <Row>
            {featuredProducts.map((product) => (
              <Col key={product.id} md={6} lg={3} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="text-muted">
                      {product.price}
                    </Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="outline-danger" className="mt-auto">
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FeaturedProduct;
