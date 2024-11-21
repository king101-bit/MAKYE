import { useCart } from "../Constants/CartContext";
import ShopNavbar from "../Components/ShopNavbar";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const shippingFee = cart.length > 0 ? 1500 : 0;
  const finalTotal = parseFloat(totalPrice) + shippingFee;

  const getImage = (image) => image || "https://via.placeholder.com/200";

  if (cart.length === 0) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <>
      <ShopNavbar />
      <div>
        <h1 className="text-center">Your Cart</h1>
        <Container fluid>
          <Row>
            <Col>
              <hr />
              <ol style={{ fontSize: "25px" }}>
                {cart.map((item) => (
                  <li key={item.id} className="d-flex align-items-center mb-4">
                    {/* Product Image */}
                    <img
                      src={getImage(item.image)}
                      alt={item.name}
                      onError={(e) =>
                        (e.target.src = "https://via.placeholder.com/200")
                      }
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      className="rounded border me-3"
                    />

                    {/* Product Details */}
                    <div style={{ flex: 1 }}>
                      <h1>{item.name}</h1>
                      <p className="lead">&#8358;{item.price.toFixed(2)}</p>
                      <p className="lead">Size | {item.size}</p>
                      <p className="lead">Color | {item.color}</p>
                      <p className="lead">
                        <Button
                          variant="outline-danger"
                          className="ms-2 me-2"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </Button>
                        {item.quantity}
                        <Button
                          variant="outline-danger"
                          className="ms-2"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </Button>
                      </p>
                    </div>

                    {/* Remove Button */}
                    <div className="ms-auto">
                      <Button
                        variant="outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </li>
                ))}
                <hr />
              </ol>
            </Col>

            {/* Order Summary Section */}
            <Col>
              <Container
                className="border rounded p-4 shadow-sm"
                style={{ maxWidth: "450px", backgroundColor: "#FFFF" }}
              >
                <h4 className="text-center">Order Summary</h4>
                <hr />
                <Row>
                  <Col>
                    <p>Items:</p>
                  </Col>
                  <Col>
                    <p>{totalItems}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Subtotal</p>
                  </Col>
                  <Col>
                    <p className="lead">&#8358;{totalPrice}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Shipping:</p>
                  </Col>
                  <Col>
                    <p className="lead">&#8358;{shippingFee}</p>
                  </Col>
                </Row>
                <hr />
                <Row className="mt-3">
                  <Col className="text-end fw-bold">Total Price:</Col>
                  <Col className="fw-bold text-danger">
                    &#8358;{finalTotal.toFixed(2)}
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <Link
                      to={{
                        pathname: "/checkout",
                        state: { finalTotal, cart },
                      }}
                    >
                      <Button variant="danger" className="w-100">
                        Place Order
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cart;
