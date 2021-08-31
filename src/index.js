/*!

=========================================================
* Now UI Kit PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages
import AboutUs from "views/examples/AboutUs.js";
import ContactUs from "views/examples/ContactUs.js";
import Home from "views/Home.js";
import Projects from "views/examples/Projects.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/projects" render={(props) => <Projects {...props} />} />
       <Route
        path="/home"
        render={(props) => <Home {...props} />}
      />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
