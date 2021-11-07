import React from "react";
import Rellax from "rellax";

import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import HomeHeader from "components/Headers/HomeHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
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
      document.body.classList.remove("presentation-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    <DropdownFixedNavbar home={true}/>
      <div className="wrapper">
        <HomeHeader />
        <FooterBlack />
      </div>
    </>
  );
}

export default Presentation;
