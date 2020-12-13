import styled from "styled-components";

const bgColor = ({ theme: { colors }, color = "blue" }) => colors[color];
const bgColorDarken = ({ theme: { colors }, color = "blue" }) =>
  colors[`${color}Dark`];

export default styled.button`
  background-color: ${bgColor};
  border-radius: 30px;
  outline: none;
  border: none;
  padding: 10px 20px;
  text-transform: lowercase;
  color: #fff;
  transition: all 0.23s ease;
  margin: 15px 0;
  cursor: pointer;

  &:hover {
    background-color: ${bgColorDarken};
  }
`;
