import React from "react";
import Image from "next/image";

const post = () => {
  return (
    <div
      className="services"
      style={{
        backgroundImage:
          "url(assets/images/other-image-fullscren-1-1920x900.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Latest blog posts</h2>

              <a href="blog.html">
                read more <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <a href="#" className="services-item-image">
                <Image
                  src="/assets/images/blog-1-370x270.jpg"
                  className="img-fluid"
                  alt=""
                  width={470}
                  height={270}
                />
              </a>

              <div className="down-content">
                <h4>
                  <a href="#">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit hic
                  </a>
                </h4>

                <p style={{ margin: 0 }}>
                  John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                  &nbsp;&nbsp;|&nbsp;&nbsp; 114
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <a href="#" className="services-item-image">
                <Image
                  src="/assets/images/blog-2-370x270.jpg"
                  className="img-fluid"
                  alt=""
                  width={470}
                  height={270}
                />
              </a>

              <div className="down-content">
                <h4>
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </a>
                </h4>

                <p style={{ margin: 0 }}>
                  John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                  &nbsp;&nbsp;|&nbsp;&nbsp; 114
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <a href="#" className="services-item-image">
                <Image
                  src="/assets/images/blog-3-370x270.jpg"
                  className="img-fluid"
                  alt=""
                  width={470}
                  height={270}
                />
              </a>

              <div className="down-content">
                <h4>
                  <a href="#">Aperiam modi voluptatum fuga officiis cumque</a>
                </h4>

                <p style={{ margin: 0 }}>
                  John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                  &nbsp;&nbsp;|&nbsp;&nbsp; 114
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
