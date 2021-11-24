import React from "react";
import LightSpeed from 'react-reveal/LightSpeed';

function HomeHeader() {
  return (
    <>
      <div className="page-header clear-filter">
        <div className="rellax-header" >
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/home.jpg")
                  .default +
                ")",
            }}
          ></div>
        </div>
        <div className="rellax-text-container ">
          <LightSpeed>
            <h3 className="h3-description rellax-text" data-rellax-speed="-1">
              Welcome to my portfolio
              <br />
              Frontend and backend developer
            </h3>
          </LightSpeed>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
