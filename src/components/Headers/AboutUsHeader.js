import React from "react";
import LightSpeed from 'react-reveal/LightSpeed';

import { Row, Col } from "reactstrap";

function AboutUsHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =  pageHeader.current!=null ?
          "translate3d(0," + windowScrollTop + "px,0)" : console.log(null) ;
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/about-me.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>

        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <LightSpeed>
                <h1 className="title">About Me</h1>
                <h4>
                  Meet me and find out more
                  about my interest.
                </h4>
              </LightSpeed>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
