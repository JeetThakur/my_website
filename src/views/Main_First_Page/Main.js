import React from "react";
import ImageHolder from "../../components/ImageHolder";
import NavBar from "../NavBar";
import HamburgerMenu from "../../components/HamburgerMenu";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar />
        <ImageHolder style={{ height: "calc(100vh - 77px)", width: "100vw" }} />
      </>
    );
  }
}

export default Main;
