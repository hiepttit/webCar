import React from "react";
import Image from "next/image";

const carDetail = () => {
  return (
    <>
      <div
        className="page-heading about-heading header-text"
        style={{
          backgroundImage: "url(assets/images/heading-6-1920x500.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>
                  <del>$11999.00</del>{" "}
                  <strong className="text-primary">$11779.00</strong>
                </h4>
                <h2>Lorem ipsum dolor sit amet</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <Image
                  src="/assets/images/product-details-1-740x540.jpg"
                  alt=""
                  className="img-fluid wc-image"
                  width={750}
                  height={540}
                />
              </div>
              <br />
              <div className="row">
                <div className="col-sm-4 col-6">
                  <div>
                    <Image
                      src="/assets/images/product-1-370x270.jpg"
                      alt=""
                      className="img-fluid"
                      width={750}
                      height={540}
                    />
                  </div>
                  <br />
                </div>
                <div className="col-sm-4 col-6">
                  <div>
                    <Image
                      src="/assets/images/product-2-370x270.jpg"
                      alt=""
                      className="img-fluid"
                      width={750}
                      height={540}
                    />
                  </div>
                  <br />
                </div>
                <div className="col-sm-4 col-6">
                  <div>
                    <Image
                      src="/assets/images/product-3-370x270.jpg"
                      alt=""
                      className="img-fluid"
                      width={750}
                      height={540}
                    />
                  </div>
                  <br />
                </div>

                <div className="col-sm-4 col-6">
                  <div>
                    <Image
                      src="/assets/images/product-4-370x270.jpg"
                      alt=""
                      className="img-fluid"
                      width={750}
                      height={540}
                    />
                  </div>
                  <br />
                </div>
                <div className="col-sm-4 col-6">
                  <div>
                    <Image
                      src="/assets/images/product-5-370x270.jpg"
                      alt=""
                      className="img-fluid"
                      width={750}
                      height={540}
                    />
                  </div>
                  <br />
                </div>
                <div className="col-sm-4 col-6">
                  <div>
                    <Image
                      src="/assets/images/product-6-370x270.jpg"
                      alt=""
                      className="img-fluid"
                      width={750}
                      height={540}
                    />
                  </div>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <form action="#" method="post" className="form">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Type</span>

                      <strong className="pull-right">Used vehicle</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Make</span>

                      <strong className="pull-right">
                        Lorem ipsum dolor sit
                      </strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left"> Model</span>

                      <strong className="pull-right">
                        Lorem ipsum dolor sit
                      </strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">First registration</span>

                      <strong className="pull-right">05/2010</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Mileage</span>

                      <strong className="pull-right">5000 km</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Fuel</span>

                      <strong className="pull-right">Diesel</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Engine size</span>

                      <strong className="pull-right">1800 cc</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Power</span>

                      <strong className="pull-right">85 hp</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Gearbox</span>

                      <strong className="pull-right">Manual</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Number of seats</span>

                      <strong className="pull-right">4</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Doors</span>

                      <strong className="pull-right">2/3</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Color</span>

                      <strong className="pull-right">Black</strong>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-heading">
                <h2>Vehicle Description</h2>
              </div>

              <div className="left-content">
                <p>
                  - Colour coded bumpers
                  <br />- Tinted glass
                  <br />- Immobiliser
                  <br />- Central locking - remote
                  <br />- Passenger airbag
                  <br />- Electric windows
                  <br />- Rear head rests
                  <br />- Radio
                  <br />- CD player
                  <br />- Ideal first car
                  <br />- Warranty
                  <br />- High level brake light
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="section-heading">
                <h2>Vehicle Extras</h2>
              </div>

              <div className="left-content">
                <p>
                  - ABS <br />
                  -Leather seats <br />
                  -Power Assisted Steering <br />
                  -Electric heated seats <br />
                  -New HU and AU <br />
                  -Xenon headlights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-heading">
                <h2>Contact Details</h2>
              </div>

              <div className="left-content">
                <p>
                  <span>Name</span>

                  <br />

                  <strong>John Smith</strong>
                </p>

                <p>
                  <span>Phone</span>

                  <br />

                  <strong>
                    <a href="tel:123-456-789">123-456-789</a>
                  </strong>
                </p>

                <p>
                  <span>Mobile phone</span>

                  <br />

                  <strong>
                    <a href="tel:456789123">456789123</a>
                  </strong>
                </p>

                <p>
                  <span>Email</span>

                  <br />

                  <strong>
                    <a href="mailto:john@carsales.com">john@carsales.com</a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default carDetail;
