import styled from "styled-components";

const ListError = styled.div`
  width: 100%;
  padding: 50px 0;
  text-align: center;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.4);
`;

const Error = ({ children }) => <ListError>{children}</ListError>;

export default Error;
