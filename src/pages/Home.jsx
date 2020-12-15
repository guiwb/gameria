import styled from "styled-components";
import Navbar from "../components/ui/Navbar";
import Card from "../components/ui/Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  font-size: 28px;
  margin: 50px 0;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  border-radius: 100px;
  width: 100%;
  text-align: center;
`;

const List = styled.div`
  width: 100%auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Home = () => (
  <Container>
    <Navbar />
    <Title>Meus jogos</Title>
    <List>
      <Card />
      <Card />
      <Card />
      <Card />
    </List>
  </Container>
);

export default Home;
