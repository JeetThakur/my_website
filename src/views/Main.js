import React from "react";
import ImageHolder from "../components/ImageHolder";
import NavBar from "../components/NavBar";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar />
        <ImageHolder />
      </>
    );
  }
}

export default Main;
