import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="/assets/images/slider-image-1-1920x600.jpg"
          alt="First slide"
          className="d-block w-100"
          width={1280}
          height={700}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/assets/images/slider-image-2-1920x600.jpg"
          alt="First slide"
          className="d-block w-100"
          width={1280}
          height={700}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/assets/images/slider-image-3-1920x600.jpg"
          alt="First slide"
          className="d-block w-100"
          width={1280}
          height={700}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default banner;
