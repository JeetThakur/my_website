import styled from "styled-components";

const Container = styled.div`
  width: 191px;
  height: 0px;
  background: #ffffff;
  z-index: 2;
  top: 80px;
  border: 0px solid black;
  margin-left: 15px;
  position: absolute;
  transition: all 200ms;
  transition-delay: 200ms;
  overflow: hidden;
  &.turn {
    height: 250px;
    border: 1px solid black;
  }
`;

const MenuItem = styled.div`
  height: 50px;
  z-index: 2;
  border: 1px;
  border-style: none none solid none;
`;

export { Container, MenuItem };
