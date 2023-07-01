import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h2>
              Car Dealer <em>Website</em>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <ul className="navbar-nav ml-auto">
                <li
                  className={
                    router.pathname == "/" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="cars">
                    Cars
                  </Link>
                </li>

                {/* <li className="nav-item dropdown">
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">More</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Team</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Testimonials
                    </NavDropdown.Item>
                  </NavDropdown>
                </li> */}

                <li
                  className={
                    router.pathname == "/about-us"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link className="nav-link" href="about-us">
                    About Us
                  </Link>
                </li>

                <li
                  className={
                    router.pathname == "/contact"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link className="nav-link" href="contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
