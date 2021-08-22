import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  NavLink,
  Container,
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
                <NavbarBrand >
                  Maja Lukić
                </NavbarBrand>
              </div>
              <Collapse navbar >
                <Nav className="ml-auto" navbar>
                  <NavItem>
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
                      My projects
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
