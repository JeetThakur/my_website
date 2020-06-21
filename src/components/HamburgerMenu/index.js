import React from "react";
import { MenuLineOne, MenuLineTwo, MenuLineThree, Container } from "./styled";

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };
  }

  render() {
    const change = () => {
      this.setState({ isFocused: !this.state.isFocused });
    };
    const turn = this.state.isFocused ? "turn" : "";
    return (
      <Container style={this.props.style} onClick={change}>
        <MenuLineOne className={turn} />
        <MenuLineTwo className={turn} />
        <MenuLineThree className={turn} />
      </Container>
    );
  }
}

export default HamburgerMenu;
