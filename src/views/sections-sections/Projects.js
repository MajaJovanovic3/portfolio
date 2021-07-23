/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Projects() {
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="cd-section" id="projects">
        <div className="projects-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h6 className="text-muted">Our work</h6>
                <h2 className="title">Some of Our Awesome Products - 2</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your projects. Keep you user engaged by providing meaningful
                  information.
                </h5>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-plain">
                  <a
                    href="https://www.creative-tim.com/product/now-ui-kit-react?ref=nuk-pro-react-sections"
                    target="_blank"
                  >
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img-raised rounded"
                        src="https://s3.amazonaws.com/creativetim_bucket/products/170/original/opt_nuk_react_thumbnail.jpg"
                      ></img>
                    </div>
                  </a>
                  <CardBody>
                    <a
                      href="https://www.creative-tim.com/product/now-ui-kit-react?ref=nuk-pro-react-sections"
                      target="_blank"
                    >
                      <CardTitle tag="h4">Now UI Kit React</CardTitle>
                    </a>
                    <h6 className="category text-info">Free UI Kit</h6>
                    <p className="card-description">
                      Now UI Kit React is a free Bootstrap 4, React, React Hooks
                      and Reactstrap UI Kit provided for free by Invision and
                      Creative Tim. It is a beautiful cross-platform UI kit
                      featuring over 50 elements and 3 templates.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <a
                    href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=nuk-pro-react-sections"
                    target="_blank"
                  >
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img-raised rounded"
                        src="https://s3.amazonaws.com/creativetim_bucket/products/155/original/opt_adp_react_thumbnail.jpg?1554905507"
                      ></img>
                    </div>
                  </a>
                  <CardBody>
                    <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=nuk-pro-react-sections"
                      target="_blank"
                    >
                      <CardTitle tag="h4">Argon Dashboard PRO React</CardTitle>
                    </a>
                    <h6 className="category text-info">Premium Template</h6>
                    <p className="card-description">
                      Argon is a completely new product built on our newest
                      re-built from scratch framework structure that is meant to
                      make our products more intuitive, more adaptive and,
                      needless to say, so much easier to customize.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <a
                    href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=nuk-pro-react-sections"
                    target="_blank"
                  >
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img-raised rounded"
                        src="https://s3.amazonaws.com/creativetim_bucket/products/168/original/opt_pkp_react_thumbnail.jpg"
                      ></img>
                    </div>
                  </a>
                  <CardBody>
                    <a
                      href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=nuk-pro-react-sections"
                      target="_blank"
                    >
                      <CardTitle tag="h4">Paper Kit PRO React</CardTitle>
                    </a>
                    <h6 className="category text-info">Premium UI Kit</h6>
                    <p className="card-description">
                      Paper Kit PRO React is a Premium Bootstrap 4, Reactstrap,
                      React, React Hooks and Paper Design UI Kit with pale
                      colors, beautiful typography and thoughtful drawings.
                      We've created it having paper and drawings in mind.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="projects-3" data-background-color="black">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h6 className="category text-muted">Our work</h6>
                <h2 className="title">Some of Our Awesome Projects - 3</h2>
              </Col>
            </Row>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/dashboard.jpeg").default +
                        ")",                        
                        height:"360px"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Amber Interiors is available to assist in all aspects of
                      a project from start to finish including consulting with
                      Architects and Builders"
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/tasks.jpeg").default +
                        ")",
                        height:"360px"
                    }}
                  ></div>
                  <h6 className="category text-info">Design</h6>
                  <CardTitle tag="h4">Coco Kelley</CardTitle>
                  <p>
                    Amber Lewis’s interior design blog takes you inside the
                    creative workings of her Los Angeles–based studio. Keep an
                    eye on this website for an industry insider’s point of view.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/project24.jpg").default +
                        ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "We provide a simple, approachable way to decorate your
                      desired space with ease. Each e-décor is completely
                      individualized"
                    </p>
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/project23.jpg").default +
                        ")",
                    }}
                  ></div>
                  <h6 className="category text-info">E-Decor</h6>
                  <CardTitle tag="h4">Red Trad</CardTitle>
                  <p>
                    We designed this new build family home located in Santa
                    Monica with a mission to make the large size of the
                    property, feel cozy, collected, and unique.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="projects-4" data-background-color="gray">
          <Container fluid>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="8">
                <h6 className="category text-muted">Our work</h6>
                <h2 className="title">Some of Our Awesome Projects - 4</h2>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/tasks.jpeg").default +
                      ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          The “crazy idea that could lead to a big future
                          commission” project.
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons objects_globe"></i>
                          The “Crazy idea” project
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="6">
                <div className="card-container">
                  <Card className="card-fashion">
                    <CardTitle tag="div">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <h4>
                          The next time you’re on vacation, take advantage of
                          all the work you can get done...
                        </h4>
                      </a>
                    </CardTitle>
                    <CardBody>
                      <CardFooter>
                        <div className="stats">
                          <span>
                            <i className="now-ui-icons education_paper"></i>
                            The “I’m on vacation” project
                          </span>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                  <Card
                    className="card-fashion card-background"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/project15.jpg").default +
                        ")",
                    }}
                  ></Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="6">
                <div className="card-container">
                  <Card
                    className="card-fashion card-background"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/project17.jpg").default +
                        ")",
                    }}
                  ></Card>
                  <Card className="card-fashion arrow-left">
                    <CardTitle tag="div">
                      <h4>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          The elements of Agile Project Management have been
                          around for decades...
                        </a>
                      </h4>
                    </CardTitle>
                    <CardBody>
                      <CardFooter>
                        <div className="stats">
                          <span>
                            <i className="now-ui-icons design_app"></i>
                            The "Agile Project" project
                          </span>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/project16.jpg").default +
                      ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Performing a Project Premortem
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons media-2_sound-wave"></i>
                          The "Premortem" project
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="projects-5">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Some of Our Awesome Projects - 5</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your projects. Keep you user engaged by providing meaningful
                  information.
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project8.jpg").default + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">Social Analytics</CardTitle>
                    <p className="card-description">
                      Insight to help you create, connect, and convert.
                      Understand Your Audience's Interests, Influence,
                      Interactions, and Intent. Discover emerging topics and
                      influencers to reach new audiences.
                    </p>
                    <Badge className="badge-neutral">Analytics</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons ui-2_chat-round"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      Listen to Social Conversations
                    </h4>
                    <p className="description">
                      Gain access to the demographics, psychographics, and
                      location of unique people who talk about your brand.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons business_chart-pie-36"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Performance Analyze</h4>
                    <p className="description">
                      Unify data from Facebook, Instagram, Twitter, LinkedIn,
                      and Youtube to gain rich insights from easy-to-use
                      reports.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Social Conversions</h4>
                    <p className="description">
                      Track actions taken on your website that originated from
                      social, and understand the impact on your bottom line.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Work With Any Team</h4>
                    <p className="description">
                      Whether it’s for work or even the next family vacation,
                      Trello helps your team.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">A Productivity Platform</h4>
                    <p className="description">
                      Integrate the apps your team already uses directly into
                      your workflow.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Always In Sync</h4>
                    <p className="description">
                      No matter where you are, Trello stays in sync across all
                      of your devices.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project9.jpg").default + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">Trello lets you work.</CardTitle>
                    <p className="card-description">
                      Trello’s boards, lists, and cards enable you to organize
                      and prioritize your projects in a fun, flexible and
                      rewarding way.
                    </p>
                    <Badge className="badge-neutral">Trello</Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Projects;
