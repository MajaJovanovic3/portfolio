import React from "react";
import { Link } from "react-router-dom";

import { Container } from "reactstrap";

function FooterBlack() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
               <Link to='/about-us'>About Me</Link>
              </li>
              <li>
               <Link to='/projects'>Projects</Link>
              </li>
              <li>
               <Link to='/contact-us'>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()},
            All Rights Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
