import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const review = () => {
  return (
    <div className="happy-clients">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Happy Clients</h2>

              <a href="testimonials.html">
                read more <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-12">
            <OwlCarousel
              className="owl-clients owl-carousel text-center"
              navContainerClass="d-none"
              loop
              margin={10}
              nav
            >
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="down-content">
                  <h4>John Doe</h4>
                  <p className="n-m">
                    <em>
                      Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat.
                    </em>
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="down-content">
                  <h4>Jane Smith</h4>
                  <p className="n-m">
                    <em>
                      Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat.
                    </em>
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="down-content">
                  <h4>Antony Davis</h4>
                  <p className="n-m">
                    <em>
                      Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat.
                    </em>
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="down-content">
                  <h4>John Doe</h4>
                  <p className="n-m">
                    <em>
                      Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat.
                    </em>
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="down-content">
                  <h4>Jane Smith</h4>
                  <p className="n-m">
                    <em>
                      Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat.
                    </em>
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="down-content">
                  <h4>Antony Davis</h4>
                  <p className="n-m">
                    <em>
                      Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat.
                    </em>
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default review;
