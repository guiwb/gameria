import styled from "styled-components";

export default styled.select`
  background-color: ${(props) => props.theme.colors.blackMediumLight};
  border-radius: 30px;
  outline: none;
  border: none;
  padding: 15px 20px;
  text-transform: lowercase;
  color: #fff;
  transition: all 0.23s ease;
  margin: 5px 0;
  border-right: 20px solid transparent;

  &:focus {
    background-color: ${({ light = false, theme }) =>
      light ? theme.colors.blackLight : theme.colors.black};
  }
`;
