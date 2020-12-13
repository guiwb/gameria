import styled from "styled-components";
import Navbar from "../components/ui/Navbar";

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
  padding: 15px 60px;
  border-radius: 100px;
  width: 100%;
  text-align: center;
`;

const Home = () => (
  <Container>
    <Navbar />
    <Title>Meus jogos</Title>
  </Container>
);

export default Home;
