import React from "react";
import Wrapper from "./Contact.styled";
import githubIcon from "../../assets/icons/github-logo.png";
import linkedInIcon from "../../assets/icons/linkedin-logo.png";
import facebookIcon from "../../assets/icons/facebook-logo.png";

const Contact = () => {
  return (
    <Wrapper className="contact flex">
      <div className="socials flex-c">
        <button className="btn">
          <img src={githubIcon} alt="" />
        </button>
        <button className="btn">
          <img src={linkedInIcon} alt="" />
        </button>
        <button className="btn">
          <img src={facebookIcon} alt="" />
        </button>
      </div>
      <div className="content flex-c">
        <div className="email fs-400">
          <h4 className="fs-300 fw-l text-secondary">email:</h4>
          <span className="fw-m text-dark fs-400">ronrk11@gmail.com</span>
        </div>

        <div className="cta flex">
          <button className="btn btn-resume fs-200">resume</button>
          <button className="btn btn-contact fs-200">contact</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
