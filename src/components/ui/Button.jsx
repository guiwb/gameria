import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => props.theme.colors.blue};
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
    background-color: ${(props) => props.theme.colors.blueDark};
  }
`;
