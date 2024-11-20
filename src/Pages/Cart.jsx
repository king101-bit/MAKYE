import React from "react";
import { useCart } from "../Constants/CartContext";
import ShopNavbar from "../Components/ShopNavbar";
import { Container, Button, Col, Row } from "react-bootstrap";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <>
      <ShopNavbar />
      <div>
        <h1 className="text-center">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <Container fluid>
            <Row>
              <Col>
                <hr />
                <ol style={{ fontSize: "25px" }}>
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="d-flex align-items-center mb-4"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image || "https://via.placeholder.com/200"} // Use the image property from the cart item
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
                      <p className="lead">&#8358;1,500</p>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>Total Price:</Col>
                    <Col>
                      &#8358;{(parseFloat(totalPrice) + 1500).toFixed(2)}
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <Button
                        variant="danger"
                        href="/checkout"
                        className="w-100"
                      >
                        Place Order
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default Cart;
