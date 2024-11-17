import "../App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import HeroNavbar from "./HeroNavbar";

const Hero = () => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  return (
    <>
      <HeroNavbar className="navbar" />
      {/* Navbar */}
      <section className="py-5 position-relative overflow-hidden">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <h1
                className="display-4 font-weight-bold mb-4"
                style={{ fontFamily: "Bebas Neue" }}
              >
                Fashion meets{" "}
                <span className="text-danger">
                  <Typewriter
                    words={[
                      "Elegance",
                      "Sophistication",
                      "Glamour",
                      "Allure",
                      "Chic",
                      "Radiance",
                      "Grandeur",
                    ]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
              <p
                className="lead mb-4"
                style={{ fontFamily: "Montserrat", fontWeight: "normal" }}
              >
                Discover the latest trends and timeless classics in our curated
                collection. Elevate your style with Chic Boutique&apos;s
                exclusive fashion pieces.
              </p>
              <Button
                onClick={goToShop}
                variant="danger"
                size="lg"
                className="rounded-pill px-4"
              >
                Shop Now
              </Button>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fashion Model"
                className="img-fluid rounded shadow-lg hero-image"
                width={300}
                height={400}
              />
            </Col>
          </Row>
        </Container>
        <div
          className="position-absolute"
          style={{
            bottom: "-10px",
            left: 0,
            width: "100%",
            height: "100px",
            background: "linear-gradient(to top, #f8f9fa, transparent)",
          }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
