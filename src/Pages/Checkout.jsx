import { Button, Container, Row, Col } from "react-bootstrap";
import { usePaystackPayment } from "react-paystack";
import { Link } from "react-router-dom";
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
      <Container className="justify-content-center">
        <h1>Under construction at the moment </h1>
        <br />
        <h1>
          go back to <Link to="/cart">Cart</Link>
        </h1>
      </Container>
    </div>
  );
};

export default Checkout;
