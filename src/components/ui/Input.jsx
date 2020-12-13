import styled from "styled-components";

export default styled.input`
  background-color: ${(props) => props.theme.colors.blackMediumLight};
  border-radius: 30px;
  outline: none;
  border: none;
  padding: 15px 30px;
  text-transform: lowercase;
  color: #fff;
  transition: all 0.23s ease;
  margin: 5px 0;
  width: 240px;

  &:focus {
    background-color: ${(props) => props.theme.colors.black};
  }
`;
