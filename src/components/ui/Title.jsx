import styled from "styled-components";

export default styled.h1`
  font-size: 26px;
  text-align: center;

  b {
    color: ${(props) => props.theme.colors.blue};
  }
`;
