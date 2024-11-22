import { Container, Row, Col } from "react-bootstrap";
import Icon from "../assets/team.svg";

const About = () => {
  return (
    <>
      <section className="py-5" id="about">
        <Container>
          <h1 className="display-4 fw-bold mb-5 text-center">About Us</h1>
          <Row>
            <Col lg={6}>
              <h1 className="display-5 mb-4">
                Affordable Fashion, Curated for You
              </h1>
              <p className="lead text-muted">
                We are a passionate team dedicated to offering stylish and
                high-quality clothing at prices that won’t break the bank. Our
                goal is to make fashion accessible to everyone while ensuring
                exceptional value and timeless designs.
              </p>
            </Col>
            <Col lg={6}>
              <img src={Icon} width={350} height={250} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
