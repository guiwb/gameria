import styled from "styled-components";
import Navbar from "../components/ui/Navbar";
import Card from "../components/ui/Card";
import UIForm from "../components/ui/Form";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import EditGame from "../components/EditGame";
import { useState } from "react";

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
  margin: 50px 0 20px;
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

const Form = styled(UIForm)`
  width: 100%;
  margin-bottom: 30px;
  justify-content: space-between;

  label {
    color: #fff;
  }
`;

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [loadingButton, setLoadingButton] = useState(false);

  return (
    <Container>
      <Navbar />
      <Title>Meus jogos</Title>

      <Form direction="row">
        <div>
          <Input
            name="search"
            type="text"
            placeholder="Busque por um jogo..."
            light
          />
          <Button
            loading={loadingButton}
            onClick={() => setLoadingButton(!loadingButton)}
            type="button"
          >
            Buscar
          </Button>
        </div>

        <div>
          <label for="orderBy">Ordenar por: </label>
          <Select id="orderBy" name="orderBy" light>
            <option value="name" selected>
              Nome
            </option>
            <option value="rating">Avaliação</option>
            <option value="category">Categoria</option>
          </Select>
        </div>
      </Form>

      <List>
        <Card
          onClick={() =>
            setSelectedGame({
              name: "Mario",
              image: "",
              category: "aventura",
              rating: "5",
            })
          }
        />
        <Card />
        <Card />
        <Card />
      </List>
      {selectedGame && (
        <EditGame
          game={selectedGame}
          clickedOut={() => setSelectedGame(null)}
        />
      )}
    </Container>
  );
};

export default Home;
