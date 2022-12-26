import React from "react";
import Wrapper from "./Hero.styled";
import Contact from "./Contact/Contact";

const Hero = () => {
  return (
    <Wrapper className="hero flex-c">
      <span className="text-dark fs-500">
        Hi, i'm <span className="text-secondary fw-m fs-600">Ron</span>
      </span>
      <h1 className="text-dark fs-900">Full Stack Web Developer</h1>
      <div className="content flex">
        <p className="fs-400 text-dark">
          Full stack javascript web developer.
          <br /> build Landing pages, Apps, Websites and more.
          <br /> Focus on design as well as performance,
          <br /> for more info about me, visit the About page.
          <br /> to Projects examples
        </p>
        <Contact />
      </div>
    </Wrapper>
  );
};

export default Hero;
