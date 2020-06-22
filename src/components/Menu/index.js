import React from "react";
import { Container, MenuItem } from "./styled";
const Menu = (props) => {
  return (
    <Container className={props.className}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </Container>
  );
};

export default Menu;
