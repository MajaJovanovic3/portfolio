import React, { useState } from "react";
import sl1 from '../../assets/img/sl1.jpg'
import sl2 from '../../assets/img/sl2.jpg'
import Rellax from "rellax";
import pretraga from '../../assets/img/pretraga.jpg'
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import ProjectHeader from "components/Headers/ProjectHeader.js";
import Carausel from "./Carausel";
import Footer from "components/Footers/Footer.js";
import Tetris from "components/Tetris/Tetris";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

const itemsForCarausel = [
  {
    src: require("assets/img/izvor.jpg").default,
    altText: "",
    height: "400px",
    width: "auto",
    style: { paddingLeft: '25px' }
  },
  {
    src: require("assets/img/izvor2.jpg").default,
    altText: "",
    height: "400px",
    width: "auto",
    style: { paddingLeft: '25px' }
  },
  {
    src: require("assets/img/darkMode.jpg").default,
    altText: "",
    height: "400px",
    width: "auto",
    style: { paddingLeft: '25px' }
  },
];

function changeScroll() {
  let style = document.body.style.overflow
  document.body.style.overflow = (style === 'hidden') ? 'auto' : 'hidden'
}


function Projects() {
  const [startTetris, setStartTetris] = useState(false)
  React.useEffect(() => {
    document.body.classList.add("project");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (window.innerWidth >= 991) {
      setTimeout(function () {
        new Rellax(".rellax", {
          center: true,
        });
      }, 5000);
      new Rellax(".rellax-header");
      new Rellax(".rellax-text");
    }
    return function cleanup() {
      document.body.classList.remove("project");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  function startT() {
    setStartTetris(true)
  }
  return (
    <div className="projects">
      <>
        <DropdownFixedNavbar project={true} />
        <ProjectHeader />
        <div className="cd-section" id="projects" style={{ backgroundColor: "#ebf1ff" }}>
          <div className="projects-3" style={{ backgroundImage: "url(" + require("assets/img/projectBackground.jpg").default + ")", }}>
            <Container>
              <Zoom>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h6 className="category text-muted">Some of my projects</h6>
                    <h2 className="title">To-Do App</h2>
                  </Col>
                </Row>
              </Zoom>
              <Fade bottom fraction="0.1" cascade delay={500}>
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
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          marginBottom: "50px"
                        }}>
                      </div>
                      <p style={{ paddingRight: '70px', color: '#3f51b5', fontSize: "16px", fontWeight: '600' }}>
                        To-Do App helps you to better organize and successfully manage your day.
                        For the selected date, add a to-do list, and check each one you complete. Try to check everything you have planned by the end of the day.
                        &nbsp;
                        <img src={require("assets/img/smile.png").default} width="auto" height="25"></img>
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
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <CardTitle tag="h4" className="category text-muted" >Functionalities</CardTitle>
                      <p style={{ color: '#3f51b5', fontSize: "16px", fontWeight: '600' }}>
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
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          marginBottom: "50px"
                        }}
                      >
                      </div>
                      <p style={{ color: '#3f51b5', fontWeight: '600', padding: '70px' }}>
                        Code of this project is on my github page: <br />
                        <a href='https://github.com/MajaJovanovic3/ToDoAppFront' target="_blank" style={{ color: '#6c757d', fontWeight: 'bold', textDecoration: 'underline' }}>frontend</a>  <br />
                        <a href='https://github.com/MajaJovanovic3/ToDoApp' target="_blank" style={{ color: '#6c757d', fontWeight: 'bold', textDecoration: 'underline' }}>backend</a>
                      </p>
                    </Col>
                    <Col md="6">
                      <div
                        className="image-container image-right"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("assets/img/taskDetail.jpeg").default +
                            ")",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <h6 className="category text-muted">Skills</h6>
                      <p style={{ color: '#3f51b5', fontWeight: '600' }}>
                        ReactJS, NodeJs, MongoDb
                      </p>
                    </Col>
                  </Row>
                </div>
              </Fade>
            </Container>
          </div>
          <hr
            style={{
              color: "#3f51b5",
              backgroundColor: "#3f51b5",
              height: 3
            }}
          />
          <div className="projects-4" style={{ backgroundImage: "url(" + require("assets/img/projectBackground.jpg").default + ")", }}>
            <Container fluid>
              <Row>
                <Col className="mr-auto ml-auto text-center" md="8">
                  <h6 className="category text-muted">Some of my projects</h6>
                  <Zoom >  <h2 className="title">Novine Srbija</h2> </Zoom>
                </Col>
              </Row>
              <Slide left>
                {(window.innerWidth >= 1350) ?
                  <Row style={{ justifyContent: "space-evenly" }}>
                    <Col className="px-0" md="4">
                      <div
                        className="image-container image-left"
                      />
                      <img src={sl1} width="225" height="400" style={{ paddingRight: "10px" }} />
                      <img src={sl2} width="225" height="400" />
                    </Col>
                    <Col>
                      <div class="row">
                        <div class="col-sm-4" style={{ textAlign: 'center', width: '100px', margin: '10px 0px 10px 0px' }}>
                          <div tag="div"  >
                            <h4 >
                              Novine Srbija provides users with daily information on current events in Serbia from sources they consider reliable and relevant. Also, user can choose the topics
                              he wants to follow, which allows him to quickly and easily get to the news that interests him.
                            </h4>
                          </div>
                        </div>
                        <div class="col-sm-3" style={{ textAlign: 'center', width: '100px', margin: '10px 0px 10px 0px' }}>
                          <h4>
                            Application has more than 50 sources, daily news, daily newspapers, magazines and blogs
                          </h4>
                        </div>
                        <div class="col-sm-5" >
                          <Carausel items={itemsForCarausel} />
                        </div>
                      </div>
                    </Col>
                  </Row> :
                  <>
                    <div class="row" style={{ flexDirection: "row", flex: 1, marginTop: 20, alignItems: 'center' }} >
                      <div>
                        {window.innerWidth >= 460 ?
                          <>
                            <img src={sl1} width="225" height="400" style={{ flex: 1, paddingRight: "10px" }} />
                            <img src={sl2} width="225" height="400" style={{ flex: 2 }} />
                          </> :
                          <>
                            <img src={sl1} width="100" height="173" style={{ flex: 1, paddingRight: "10px" }} />
                            <img src={sl2} width="100" height="173" style={{ flex: 2 }} />
                          </>}
                      </div>
                      <div style={{ flex: 3, textAlign: 'center', margin: '10px 0px 10px 0px', position: 'auto' }}>
                        <h4 >
                          Novine Srbija provides users with daily information on current events in Serbia from sources they consider reliable and relevant. Also, user can choose the topics
                          he wants to follow, which allows him to quickly and easily get to the news that interests him.
                        </h4>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', margin: '10px 0px 10px 0px' }}>
                      <h4>
                        Application has more than 50 sources, daily news, daily newspapers, magazines and blogs
                      </h4>
                    </div>
                    <div >
                      <Carausel items={itemsForCarausel} />
                    </div>
                  </>}
              </Slide>
              <Slide right>
                <Row >
                  <div class="row" style={{ flexDirection: "row", flex: 1, marginTop: 30, alignItems: 'center' }}>
                    <Col md="2" style={{ flex: 1, alignItems: 'center' }}>
                      <img src={pretraga} width="217" height="386" />
                    </Col>
                    <Col md="2" style={{ textAlign: 'center', flex: 2 }}>
                      <div tag="div">
                        <h4>
                          With the given words, the search returns all the news relevant to you from all sources that contain that topic.
                        </h4>
                      </div>
                    </Col>
                    <Col md="2" >
                      <div className="card-container" style={{ textAlign: 'center', flex: 3 }}>
                        <h4>
                          The following skills were used to create the application: Android, Java, NodeJS.
                          My part in making the app was a complete backend part done using NodeJS
                        </h4>
                      </div>
                    </Col>
                    <Col className="px-0" md="6">
                      <Card
                        className="fashion card-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("../../assets/img/tablet.jpg").default +
                            ")",
                          height: '386', width: '617',
                          flex: 4
                        }}
                      >
                        <CardBody>
                          <CardTitle className="text-left" tag="div">
                            <h2>
                              <a href="https://www.novinesrbija.rs/" target="_blank" style={{ color: "white" }}>
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
                  </div>
                </Row>
              </Slide>
            </Container>
          </div>
          <div>
            <hr
              style={{
                color: "#3f51b5",
                backgroundColor: "#3f51b5",
                height: 3
              }}
            />
            <div className="section-story-overview" style={{ backgroundImage: "url(" + require("assets/img/projectBackground.jpg").default + ")", }}>
              <Container fluid onMouseEnter={startT} >
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h6 className="category text-muted">Some of my projects</h6>
                    <Zoom >  <h2 className="title">Tetris</h2> </Zoom >
                  </Col>
                </Row>
                <Row>
                  <div class="row" style={{ flexDirection: "row", flex: 1, }}>
                    <Slide left>
                      <div tag="div" style={{ flex: 1, textAlign: 'center', padding: "20px" }}>
                        <h4>
                          Another one of my projects is Tetris that you can try right away. You can see the whole code on my github page.
                        </h4>
                      </div>
                    </Slide>
                  </div>
                  <div style={{ flex: 2 }} id='tetris' onMouseEnter={changeScroll} onMouseLeave={changeScroll}
                    style={{ backgroundColor: "rgba(177,218,222,255)" }}>
                    <Container >
                      <Tetris start={startTetris} />
                      {window.innerWidth >= 414 ?
                        <div tag="div">
                          <h4>
                            Click in this container to move the tetris figures!
                          </h4>
                        </div> : <div>Click in this container to move the tetris figures!</div>}
                    </Container>
                  </div>
                </Row>
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    </div>
  );
}

export default Projects;
