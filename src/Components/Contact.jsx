import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("mzzbvlpb");

  return (
    <section id="contact">
      <Container className="my-5">
        <h1 className="display-4 text-center mb-4 fw-bold">Contact Us</h1>
        <Row className="justify-content-between">
          <Col md={6} className="mb-4 mb-md-0">
            {state.succeeded && (
              <Alert variant="success" className="mb-4">
                🎉 Your message has been sent successfully! Thank you for
                reaching out to us.
              </Alert>
            )}

            {!state.succeeded && (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="py-3"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter your message..."
                    className="py-3"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  variant="danger"
                  className="w-100 py-3"
                >
                  <strong>
                    {state.submitting ? "Submitting..." : "Submit"}
                  </strong>
                </Button>
              </Form>
            )}
          </Col>
          <Col md={5}>
            <h2 className="display-5 mb-4">We&apos;re here to help!</h2>
            <p className="lead text-muted">
              Please fill out the form below and we&apos;ll get back to you as
              soon as possible.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
