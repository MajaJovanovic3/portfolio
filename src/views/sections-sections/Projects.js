/*eslint-disable*/
import React from "react";
import sl1 from '../../assets/img/sl1.jpg'
import sl2 from '../../assets/img/sl2.jpg'
import izvor from '../../assets/img/izvor.jpg'
import izvor2 from '../../assets/img/izvor2.jpg'
import tablet from '../../assets/img/tablet.jpg'
import pretraga from '../../assets/img/pretraga.jpg'
import darkMode from '../../assets/img/darkMode.jpg'
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
        <div className="projects-3" data-background-color="black">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h6 className="category text-muted">Some of my projects</h6>
                <h2 className="title">To-Do App</h2>
              </Col>
            </Row>
            <div className="section-story-overview">
              <Row >
                <Col md="6" style={{ display: "block" }}>
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/dashboard.jpeg").default +
                        ")",
                      width: "700px",
                      height: "400px"
                    }}>
                  </div>
                  <p style={{ color: "white", padding: '70px' }}>
                    To-Do App helps you to better organize and successfully manage your day.
                    For the selected date, add a to-do list, and check each one you complete. Try to check everything you have planned by the end of the day. :)
                  </p>
                </Col>
                <Col md="6">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/register.jpeg").default +
                        ")",
                      width: "700px",
                      height: "400px"
                    }}
                  ></div>
                  <CardTitle tag="h4">Functionalities</CardTitle>
                  <p>
                    login, logout, register, add tasks by dates, edit, delete and check task when it is completed, upload one or more files within task, live search...
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
                        require("assets/img/tasks.jpeg").default +
                        ")",
                      width: "700px",
                      height: "400px"
                    }}
                  >
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/taskDetail.jpeg").default +
                        ")",
                      width: "700px",
                      height: "400px"
                    }}
                  ></div>
                  <h6 className="category text-info">Skills</h6>
                  <p>
                    ReactJS, NodeJs, MongoDb
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
                <h6 className="category text-muted">Some of my projects</h6>
                <h2 className="title">Novine Srbija</h2>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="5">
                <Card
                >
                  <div
                    className="image-container image-left"
                  />
                  <img src={sl1} width="300" height="400" style={{ paddingRight: "10px" }} />
                  <img src={sl2} width="300" height="400" />
                </Card>
              </Col>
              <Col className="px-0" md="7">
                <div className="card-container">
                  <Card className="card-fashion">
                    <CardTitle tag="div">
                      <h4>
                        Novine Srbija provides users with daily information on current events in Serbia from sources they consider reliable and relevant. Also, user can choose the topics
                        he wants to follow, which allows him to quickly and easily get to the news that interests him.
                      </h4>
                    </CardTitle>
                  </Card>
                  <img src={izvor} width="250" height="400" style={{ marginRight: "0px" }} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="4">
                <div className="card-container">
                  <Card
                  >
                    <img src={izvor2} width="240" height="400" style={{ paddingRight: "10px" }} />
                    <img src={darkMode} width="240" height="400" />
                  </Card>
                </div>
              </Col>
              <Col className="px-0" md="4">
                <div className="card-container">
                  <Card className="card-fashion">
                    <CardTitle tag="div">
                      <h4>
                        Application has more than 50 sources, daily news, daily newspapers, magazines and blogs
                      </h4>
                    </CardTitle>
                  </Card>
                  <img src={pretraga} width="250" height="400" />
                </div>
              </Col>
              <Col className="px-0" md="4">
                <div className="card-container">
                  <Card className="card-fashion">
                    <CardTitle tag="div">
                      <h4>
                      With the given words, the search returns all the news relevant to you from all sources that contain that topic.
                      </h4>
                    </CardTitle>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
            <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    marginRight:"50px",
                    backgroundImage:
                      "url(" +
                      require("../../assets/img/tablet.jpg").default +
                      ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="https://www.novinesrbija.rs/" target="_blank" >
                          Click here for more information ...
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons media-2_sound-wave"></i>
                          visit our website
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="6">
                <div className="card-container">
                  <Card className="card-fashion" style={{marginLeft:"80px"}}>
                    <CardTitle tag="div">
                      <h4>
                      The following skills were used to create the application: Android, Java, NodeJS.
                      My part in making the app was a complete backend part done using NodeJS
                      </h4>
                    </CardTitle>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Projects;
