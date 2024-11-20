import { Button, Container, Row, Col } from "react-bootstrap";
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "your_email@example.com",
  amount: 10000, // 10000 is 10000 Naira
  publicKey: "pk_test_929dbc2148b38aeee1df3432f5fef20c33382ad4",
};
const onSuccess = (reference) => {
  console.log(reference);
};

const onClose = () => {
  console.log("Payment closed");
};

const PaystackHook = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <Button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        variant="danger"
      >
        Pay Now
      </Button>
    </div>
  );
};

const Checkout = () => {
  return (
    <div>
      <h1 className="text-center fw-bold">Checkout</h1>

      <Container fluid>
        <Row>
          <Col>
            <h1>Click the button to make your payment</h1>{" "}
          </Col>
          <Col>
            <Container className="d-flex flex gap-3">
              <PaystackHook />
              <Button href="/shop" variant="outline-danger" className="">
                Go to Shop
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
