import styled from "styled-components";

export default styled.form`
  display: flex;
  flex-direction: ${({ direction = "column" }) => direction};
  align-items: center;
`;
