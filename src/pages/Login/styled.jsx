import styled from "styled-components";

export const Box = styled.section`
  background-color: ${(props) => props.theme.colors.blackLight};
  border-radius: 8px;
  width: 300px;
  padding: 20px 40px;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  margin-bottom: 0;
`;
