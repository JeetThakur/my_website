import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid grey;
`;
const MenuLineOne = styled.div`
  height: 0.1px;
  width: 20px;
  margin-bottom: 5px;
  border: 0.5px solid;
  margin-top: 12px;
  margin-left: 10px;
  transition: transform 200ms linear;
  transform-origin: top left;

  &.turn {
    transform: translate(2px, 0) rotate(45deg);
  }
`;
const MenuLineTwo = styled.div`
  height: 0.1px;
  width: 20px;
  margin-bottom: 5px;
  border: 0.5px solid;
  margin-left: 10px;

  &.turn {
    visibility: hidden;
  }
`;

const MenuLineThree = styled.div`
  height: 0.1px;
  width: 20px;
  margin-bottom: 5px;
  border: 0.5px solid;
  margin-left: 10px;
  margin-left: 10px;
  transition: transform 200ms linear;
  transform-origin: top left;

  &.turn {
    transform: translate(2px, 0) rotate(-45deg);
  }
`;

export { MenuLineOne, MenuLineTwo, MenuLineThree, Container };
