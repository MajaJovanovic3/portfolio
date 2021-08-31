import React from "react";
import emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import Footer from "components/Footers/Footer.js";

function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [alertMes, setAlertMes] = React.useState('');
  const [values, setValues] = React.useState({
    name: null,
    email: null,
    number: null,
    message: null
  })
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    setLoading(true)
    var templateParams = {
      myName: 'Maja',
      email: values.email,
      name: values.name,
      message: values.message
    };
    emailjs.send('service_cdhqysa', 'template_b1b2xyc', templateParams, 'user_MXRXdK3B39HVNMY3IjVyv')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        if (response.status == 200) {
          setLoading(false)
          console.log(show)
          setAlertMes("The message was successfully sent!")
          setShow(true)
        }
        setValues('')
        document.getElementsByName('name')[0].value = ''
        document.getElementsByName('email')[0].value = ''
        document.getElementsByName('message')[0].value = " "
      }, (err) => {
        setLoading(false)
        console.log('FAILED...', err);
        setAlertMes("The message wasn't sent!")
        setShow(true)
      });
  }

  return (
    <>
      <DropdownFixedNavbar contact={true} />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
              <Container className='rounded' style={{backgroundColor:"#bebeb4", boxShadow: '8px 8px 3px #E2D5DD'}}>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Send me a message</h2>
                  <p className="description" style={{ color: "black" }}>
                    <b> You can contact me with anything related to my work.
                      I'll get in touch with you as soon as possible. </b>  <br></br>
                    <br></br>
                  </p>
                  <Form id="contact-form" method="post" role="form">
                    <label><b>Your name</b></label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i> &nbsp;
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Your Name..."
                        autoComplete="name"
                        placeholder="Your Name..."
                        type="text"
                        name="name"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                        onChange={handleChange}
                        value={values.name}
                      ></Input>
                    </InputGroup>
                    <label><b>Email address</b></label>
                    <InputGroup
                      className={emailFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i> &nbsp;
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Email Here..."
                        autoComplete="email"
                        placeholder="Email Here..."
                        type="email"
                        name="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        onChange={handleChange}
                        value={values.email}
                      ></Input>
                    </InputGroup>
                    <FormGroup>
                      <label><b>Your message</b></label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                        onChange={handleChange}
                        value={values.message}
                      ></Input>
                    </FormGroup>
                    <div className="submit text-center" 
                        style={{paddingBottom:"20px"}}>
                      <Button
                        className="btn-raised btn-round"
                        color="info"
                        defaultValue="Contact Us"
                        onClick={handleSubmit}
                      >
                        Contact me
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
              <Alert show={show} variant="info">
                <p>
                  {alertMes}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow(false)} variant="outline-success">
                    Close!
                  </Button>
                </div>
              </Alert>
              {loading ? <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Spinner animation="border" role="status" /> &nbsp; Please wait...
              </div> : null}
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
