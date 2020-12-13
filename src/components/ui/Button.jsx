import styled from "styled-components";

const bgColor = ({ theme: { colors }, color = "blue" }) => colors[color];
const bgColorDarken = ({ theme: { colors }, color = "blue" }) =>
  colors[`${color}Dark`];

const SCALES = {
  sm: 0.7,
  md: 1,
  lg: 1.3,
};

const scaleSize = ({ size = "md" }) => SCALES[size];

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
  transform: scale(${scaleSize});

  &:hover {
    background-color: ${bgColorDarken};
  }
`;
