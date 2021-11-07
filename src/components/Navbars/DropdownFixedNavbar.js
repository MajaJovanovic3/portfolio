import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  NavLink,
  Container,
  Card,
} from "reactstrap";

function DropdownFixedNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
        <Container>
          <div className="navbar-translate">
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
              }}
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
            <NavbarBrand>
              <div class="rounded justify-content-center  d-flex align-items-center" style={{ backgroundColor: 'black' }}>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                  <b><h5 style={{ color: "white", margin: '7px' }}>Maja Lukić </h5></b>
                </Link>
              </div>
            </NavbarBrand>
          </div>
          <Collapse navbar style={{ color: 'white' }}>
            <Nav className="ml-auto" navbar >
              <NavItem active={props.home}>
                <NavLink to="/" tag={Link} >
                  Home
                </NavLink>
              </NavItem>
              <NavItem id="about" active={props.about}>
                <NavLink to="/about-us" tag={Link}>
                  About me
                </NavLink>
              </NavItem>
              <NavItem active={props.project}>
                <NavLink to="/projects" tag={Link}>
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem active={props.contact}>
                <NavLink to="/contact-us" tag={Link} >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DropdownFixedNavbar;
