import React from "react";
import Wrapper from "./Skills.styled";
import cssLogo from "../../assets/icons/css3-logo.png";
import htmlLogo from "../../assets/icons/html-logo.png";
import reactLogo from "../../assets/icons/react-logo.png";
import jsLogo from "../../assets/icons/javascript-logo.png";
import scLogo from "../../assets/icons/styled-components-logo.png";
import muiLogo from "../../assets/icons/mui-logo.png";
import reduxLogo from "../../assets/icons/redux-logo.png";
import nodeLogo from "../../assets/icons/node-logo.png";
import img from "../../assets/images/IMG_0099.JPG";

const Skills = () => {
  return (
    <Wrapper className="skills flex-c">
      <h3 className="text-dark fs-500 fw-m">My Skills</h3>
      <div className="skills__icons">
        <img className="logo" src={htmlLogo} />
        <img className="logo" src={cssLogo} />
        <img className="logo" src={jsLogo} />
        <img className="logo" src={reactLogo} />
        <img className="logo" src={reduxLogo} />
        <img className="logo" src={scLogo} />
        <img className="logo" src={muiLogo} />
        <img className="logo" src={nodeLogo} />
      </div>
    </Wrapper>
  );
};

export default Skills;
