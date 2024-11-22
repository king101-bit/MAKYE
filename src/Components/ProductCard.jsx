import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  // Handle the case where no products match the search
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} lg={3}>
          <Link
            to={`/shop/products/${product.id}/${product.slug}`}
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
