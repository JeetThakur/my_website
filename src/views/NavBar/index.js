import React from "react";
import { Navbar } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <Navbar expand="lg">
      <div
        className="mr-auto"
        style={{
          color: "#ffffff",
          fontSize: 18,
          fontFamily: "RobotoMono",
          height: 30,
          marginTop: 5,
          fontFamily: "Piedra",
        }}
      >
        About Me
      </div>
      <div
        className="mr-auto mx-auto"
        style={{
          color: "#ffffff",
          fontSize: 18,
          fontFamily: "RobotoMono",
          height: 30,
          marginTop: 5,
          fontFamily: "Piedra",
        }}
      >
        Jeet Bhavesh Thakur
      </div>
      <div
        className="ml-auto "
        style={{
          color: "#ffffff",
          fontSize: 18,
          fontFamily: "RobotoMono",
          height: 30,
          marginTop: 5,
          fontFamily: "Piedra",
        }}
      >
        Resume
      </div>
    </Navbar>
  );
};

export default NavBar;
