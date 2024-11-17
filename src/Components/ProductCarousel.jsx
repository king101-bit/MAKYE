import React from "react";
import { Carousel, Button } from "react-bootstrap";

const ProductCarousel = ({ images }) => {
  return (
    <div>
      {/* Carousel Component */}
      <Carousel interval={null}>
        {" "}
        {/* `interval={null}` disables auto-slide */}
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.url}
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h5>{image.caption}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Dynamic Buttons */}
      <div className="mt-3 d-flex justify-content-center">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="outline-dark"
            className="mx-1"
            onClick={() =>
              document
                .querySelectorAll(".carousel-indicators > li")
                [index].click()
            }
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
