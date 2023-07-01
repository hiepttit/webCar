import React from "react";
import Image from "next/image";

const aboutUs = () => {
  return (
    <div className="best-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <p>
                Lorem ipsum dolor sit amet,
                <a href="#">consectetur</a> adipisicing elit. Explicabo, esse
                consequatur alias repellat in excepturi inventore ad
                <a href="#">asperiores</a> tempora ipsa. Accusantium tenetur
                voluptate labore aperiam molestiae rerum excepturi minus in
                pariatur praesentium, corporis, aliquid dicta.
              </p>
              <ul className="featured-list">
                <li>
                  <a href="#">Lorem ipsum dolor sit amet</a>
                </li>
                <li>
                  <a href="#">Consectetur an adipisicing elit</a>
                </li>
                <li>
                  <a href="#">It aquecorporis nulla aspernatur</a>
                </li>
                <li>
                  <a href="#">Corporis, omnis doloremque</a>
                </li>
              </ul>
              <a href="about-us.html" className="filled-button">
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <Image
                src="/assets/images/about-1-570x350.jpg"
                alt=""
                width={300}
                height={370}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
