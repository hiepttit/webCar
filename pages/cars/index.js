import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cars = () => {
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
                <h4>Lorem ipsum dolor sit amet</h4>
                <h2>Cars</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-form">
                <form action="#">
                  <label>Used/New:</label>

                  <select className="form-control">
                    <option value="">All</option>
                    <option value="new">New vehicle</option>
                    <option value="used">Used vehicle</option>
                  </select>

                  <label>Vehicle Type:</label>

                  <select className="form-control">
                    <option value="">--All --</option>
                    <option value="">--All --</option>
                    <option value="">--All --</option>
                    <option value="">--All --</option>
                    <option value="">--All --</option>
                  </select>

                  <label>Make:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Model:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Price:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Mileage:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Engine size:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Power:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Fuel:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Gearbox:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Doors:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <label>Number of seats:</label>

                  <select className="form-control">
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                    <option value="">-- All --</option>
                  </select>

                  <button type="submit" className="filled-button btn-block">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-item">
                    <Link href="/cars/1">
                      <Image
                        src="/assets/images/product-1-370x270.jpg"
                        alt=""
                        width={370}
                        height={300}
                      />
                    </Link>
                    <div className="down-content">
                      <Link href="/cars/1">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                      </Link>

                      <h6>
                        <small>
                          <del> $11199.00</del>
                        </small>{" "}
                        $11179.00
                      </h6>

                      <p>
                        190 hp &nbsp;/&nbsp; Petrol &nbsp;/&nbsp; 2008
                        &nbsp;/&nbsp; Used vehicle
                      </p>

                      <small>
                        <strong title="Author">
                          <i className="fa fa-dashboard"></i> 130 000km
                        </strong>{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Author">
                          <i className="fa fa-cube"></i> 1800cc
                        </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Views">
                          <i className="fa fa-cog"></i> Manual
                        </strong>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product-item">
                    <Link href="/cars/1">
                      <Image
                        src="/assets/images/product-2-370x270.jpg"
                        alt=""
                        width={370}
                        height={300}
                      />
                    </Link>
                    <div className="down-content">
                      <Link href="/cars/1">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                      </Link>

                      <h6>
                        <small>
                          <del> $11199.00</del>
                        </small>{" "}
                        $11179.00
                      </h6>

                      <p>
                        190 hp &nbsp;/&nbsp; Petrol &nbsp;/&nbsp; 2008
                        &nbsp;/&nbsp; Used vehicle
                      </p>

                      <small>
                        <strong title="Author">
                          <i className="fa fa-dashboard"></i> 130 000km
                        </strong>{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Author">
                          <i className="fa fa-cube"></i> 1800cc
                        </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Views">
                          <i className="fa fa-cog"></i> Manual
                        </strong>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product-item">
                    <Link href="/cars/1">
                      <Image
                        src="/assets/images/product-3-370x270.jpg"
                        alt=""
                        width={370}
                        height={300}
                      />
                    </Link>
                    <div className="down-content">
                      <Link href="/cars/1">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                      </Link>

                      <h6>
                        <small>
                          <del> $11199.00</del>
                        </small>{" "}
                        $11179.00
                      </h6>

                      <p>
                        190 hp &nbsp;/&nbsp; Petrol &nbsp;/&nbsp; 2008
                        &nbsp;/&nbsp; Used vehicle
                      </p>

                      <small>
                        <strong title="Author">
                          <i className="fa fa-dashboard"></i> 130 000km
                        </strong>{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Author">
                          <i className="fa fa-cube"></i> 1800cc
                        </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Views">
                          <i className="fa fa-cog"></i> Manual
                        </strong>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product-item">
                    <Link href="/cars/1">
                      <Image
                        src="/assets/images/product-4-370x270.jpg"
                        alt=""
                        width={370}
                        height={300}
                      />
                    </Link>
                    <div className="down-content">
                      <Link href="/cars/1">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                      </Link>

                      <h6>
                        <small>
                          <del> $11199.00</del>
                        </small>{" "}
                        $11179.00
                      </h6>

                      <p>
                        190 hp &nbsp;/&nbsp; Petrol &nbsp;/&nbsp; 2008
                        &nbsp;/&nbsp; Used vehicle
                      </p>

                      <small>
                        <strong title="Author">
                          <i className="fa fa-dashboard"></i> 130 000km
                        </strong>{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Author">
                          <i className="fa fa-cube"></i> 1800cc
                        </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Views">
                          <i className="fa fa-cog"></i> Manual
                        </strong>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product-item">
                    <Link href="/cars/1">
                      <Image
                        src="/assets/images/product-5-370x270.jpg"
                        alt=""
                        width={370}
                        height={300}
                      />
                    </Link>
                    <div className="down-content">
                      <Link href="/cars/1">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                      </Link>

                      <h6>
                        <small>
                          <del> $11199.00</del>
                        </small>{" "}
                        $11179.00
                      </h6>

                      <p>
                        190 hp &nbsp;/&nbsp; Petrol &nbsp;/&nbsp; 2008
                        &nbsp;/&nbsp; Used vehicle
                      </p>

                      <small>
                        <strong title="Author">
                          <i className="fa fa-dashboard"></i> 130 000km
                        </strong>{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Author">
                          <i className="fa fa-cube"></i> 1800cc
                        </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Views">
                          <i className="fa fa-cog"></i> Manual
                        </strong>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product-item">
                    <Link href="/cars/1">
                      <Image
                        src="/assets/images/product-6-370x270.jpg"
                        alt=""
                        width={370}
                        height={300}
                      />
                    </Link>
                    <div className="down-content">
                      <Link href="/cars/1">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                      </Link>

                      <h6>
                        <small>
                          <del> $11199.00</del>
                        </small>{" "}
                        $11179.00
                      </h6>

                      <p>
                        190 hp &nbsp;/&nbsp; Petrol &nbsp;/&nbsp; 2008
                        &nbsp;/&nbsp; Used vehicle
                      </p>

                      <small>
                        <strong title="Author">
                          <i className="fa fa-dashboard"></i> 130 000km
                        </strong>{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Author">
                          <i className="fa fa-cube"></i> 1800cc
                        </strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <strong title="Views">
                          <i className="fa fa-cog"></i> Manual
                        </strong>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <ul className="pages">
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
