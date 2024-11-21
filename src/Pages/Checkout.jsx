import { Button, Container, Row, Col } from "react-bootstrap";
import { usePaystackPayment } from "react-paystack";
import { Link } from "react-router-dom";
import { useCart } from "../Constants/CartContext"; // Import the cart context hook
import { useLocation } from "react-router-dom";

const PaystackHook = ({ email, amount }) => {
  const config = {
    reference: new Date().getTime().toString(), // Unique transaction reference
    email: email || "default_email@example.com", // Replace with the actual user email
    amount: amount * 100, // Amount in Kobo (1 Naira = 100 Kobo)
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // Correct Public Key
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    console.log("Payment successful:", reference);
    // Optionally verify the payment on your server here
  };

  const onClose = () => {
    console.log("Payment closed");
  };

  return (
    <Button
      onClick={() => initializePayment(onSuccess, onClose)}
      variant="danger"
    >
      Pay Now
    </Button>
  );
};

const Checkout = () => {
  const location = useLocation();
  const { finalTotal, cart } = location.state || {}; // Get finalTotal from state

  const userEmail = "user@example.com"; // Replace with actual user data from context or props

  return (
    <div>
      <h1 className="text-center fw-bold">Checkout</h1>

      <Container fluid>
        <Row>
          <Col>
            <h1>Click the button to make your payment</h1>
          </Col>
          <Col>
            <Container className="d-flex gap-3">
              {/* Use finalTotal instead of totalPrice */}
              <PaystackHook email={userEmail} amount={finalTotal} />
              <Button variant="outline-danger" as={Link} to="/cart">
                Go to Cart
              </Button>
            </Container>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h4>Total Price: &#8358;{finalTotal}</h4> {/* Display finalTotal */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
