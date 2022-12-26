import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/skills/Skills";
import ProjectBox from "../components/Projects/ProjectBox";
import Wrapper from "./Home.styled";
import img from "../assets/images/ron.png";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <Wrapper className="grid-container">
      <Hero />

      <Skills />
      <div className="home__projects">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
      <img src={img} alt="my portrait" className="home__img" />
    </Wrapper>
  );
};

export default Home;
