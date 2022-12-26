import React from "react";
import Wrapper from "./Navbar.styled";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="logo"></div>
      <nav className="flex">
        <ul className="flex">
          <li>
            <a className="fs-400 text-light" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="fs-400 text-light" href="/">
              About me
            </a>
          </li>
          <li>
            <a className="fs-400 text-light" href="/">
              Projects
            </a>
          </li>
        </ul>
        <div className="cta flex">
          <button className="btn btn-resume fs-200">resume</button>
          <button className="btn btn-contact fs-200">contact</button>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
