import React from "react";
import HamburgerMenu from "../../components/HamburgerMenu";
import { Navbar } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <div style={{ height: 60, width: "100%" }} className="mx-auto">
        <HamburgerMenu style={{ marginTop: 15 }} />
      </div>
    </Navbar>
  );
};

export default NavBar;
