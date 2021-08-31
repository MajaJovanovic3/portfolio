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
              <Container className='rounded' style={{backgroundColor:"#536e35", boxShadow: '8px 8px 3px #ccc'}}>
                <Row>
                  <Col className="mr-auto ml-auto" md="6">
                    <h2 className="title">Positive. Communicative. Adventurer.</h2>
                    <h4 className="description" style={{color:'white'}}>
                    Hi, I'm Maja. I am a junior programmer. My first love was maths, which is not surprising considering that I graduated from the special mathematics department at Grammar school in Valjevo, but I switched to IT at university. 
Simply, I’ve seen greater application in the real world. It was challenging for me, I tried myself in various programming languages,  but in the end, I stayed at javascript, trying to learn both, the frontend and the backend part. 
I finished my own application “To-Do App”  using Node.js and React.js to present my acquired knowledge which I have shown here in Projects.
I would like to improve as much as possible and to have real useful projects behind me, which is my future goal. 
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
              <Container className='rounded' style={{backgroundColor:"#536e35", boxShadow: '8px 8px 3px #ccc'}}>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Basic info</h2>
                  <h4 className="description" style={{color:'white'}}>
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
              <Container className='rounded' style={{backgroundColor:"#536e35", boxShadow: '8px 8px 3px #ccc'}}>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Spare time</h2>
                  <h4 className="description" style={{color:'white'}}>
                  In addition to programming, I am keen on sports and adventure. 
I do recreational running, but that was no reason not to find myself on a podium. &nbsp; &nbsp;
<img src={require("assets/img/smile.png").default}  width="auto" height="25"></img>
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col style={{display:'flex', justifyContent:'space-evenly'}}> 
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/tribalion1.jpg").default}
                    width="auto" height="360"
                  ></img>
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/vranje.jpg").default}
                    width="auto" height="360"
                  ></img>
                <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/tribalionKanap.jpg").default}
                    width="auto" height="360"
                  ></img>
                </Col>
                </Row>
                <Row>
                <Col style={{display:'flex', justifyContent:'space-evenly'}}>
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/tribalion.jpg").default}
                    width="auto" height="360" 
                  ></img>
                   <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/adrenalin.jpg").default}
                    width="auto" height="360"
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
