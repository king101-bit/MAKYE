import { Container, Row, Col } from "react-bootstrap";
import Icon from "../assets/team.svg";

const About = () => {
  return (
    <>
      <section className="py-5" id="about">
        <Container>
          <h1 className="display-4 fw-bold mb-5 text-center">About Us</h1>
          <Row>
            <Col>
              <img src={Icon} width={350} height={250} alt="" />
            </Col>
            <Col>
              <h1>
                We&lsquo;re a small group of persons who sell clothes at an
                affordable price
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                mollitia voluptates dolorem consequuntur tenetur, eius nam quam
                doloremque dolores adipisci omnis ducimus illum delectus quia?
                Asperiores pariatur commodi distinctio recusandae.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
