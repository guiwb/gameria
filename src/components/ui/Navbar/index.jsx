import styled from "styled-components";
import Button from "../Button";
import Profile from "./Profile";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Index = () => (
  <Container>
    <Profile />
    <Button size="lg">Adicionar Jogo</Button>
  </Container>
);

export default Index;
