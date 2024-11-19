import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section id="contact">
      <Container className="my-5">
        <h1 className="text-center mb-4 fw-bold">Contact Us</h1>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message..."
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your message.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="danger" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3 className=""> We&#39;re here to help!</h3>
            <p>
              Please fill out the form below and we&lsquo;ll get back to you as
              soon as possible.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
