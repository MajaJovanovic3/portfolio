import React from "react";
import { Row, Col } from "reactstrap";

function ProjectHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current != null ? pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)" : console.log('null')
        pageHeader.current != null ? pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)" : console.log(null)
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
              "url(" + require("assets/img/projects.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>

        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title"></h1>
              <h4>
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default ProjectHeader;
