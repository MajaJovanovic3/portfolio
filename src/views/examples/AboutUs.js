import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import Footer from "components/Footers/Footer.js";

<style>

</style>
function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <DropdownFixedNavbar about={true}/>
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
            <div className="features-3">
              <Container style={{backgroundColor:"#536e35"}}>
                <Row>
                  <Col className="mr-auto ml-auto" md="6">
                    <h2 className="title">Simple. Communicative. Adventurer.</h2>
                    <h4 className="description">
                    Hi, I'm Maja. I am a junior programmer. My first love was maths, which is not surprising considering that I graduated from the special mathematics department at Grammar school in Valjevo, but I switched to IT at university. 
Simply, I’ve seen greater application in the real world. It was challenging for me, I tried myself in various programming languages,  but in the end, I stayed at javascript, trying to learn both, the frontend and the backend part. 
I finished my own application “To-Do App”  using Node.js and React.js to present my acquired knowledge which I show it here in part Projects.
I would like to improve as much as possible and to have real useful projects behind me, which is my further goal. 
                    </h4>
                  </Col>
                  <Col className="mr-auto ml-auto" md="4" style={{ display: "block", margin: "auto"}}>
                  <img
                    alt="..." 
                    className="rounded img-raised"
                    src={require("assets/img/maja.jpg").default}
                  ></img>
                  </Col>
                </Row>
              </Container>              
          </div>
          <div className="separator-line bg-info"></div>
          <Container style={{backgroundColor:"#536e35"}}>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Basic info</h2>
                  <h4 className="description">
                    Name: Maja Lukić <br/>
                    Nationality: Serbian  <br/>
                    Date of birth: 14-12-1995  <br/>
                    Town: Belgrade  <br/>
                    Email: majajovanovic95@gmail.com  <br/>
                  </h4>
                  </Col>
                  </Row>
                  </Container>
          <div className="separator-line bg-info"></div>
          <div className="about-office">
            <Container style={{backgroundColor:"#536e35"}}>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Spare time</h2>
                  <h4 className="description">
                  In addition to programming, I am keen on sports and adventure. 
I do recreational running, but that was no reason not to find myself on a podium. :D
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/tribalionKanap.jpg").default}
                    width="540" height="360"
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/vranje.jpg").default}
                    width="540" height="360"
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/adrenalin.jpg").default}
                    width="540" height="360"
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/tribalion.jpg").default}
                    width="540" height="360"
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/tribalion1.jpg").default}
                    width="540" height="360"
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
