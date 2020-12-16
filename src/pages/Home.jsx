import styled from "styled-components";
import Navbar from "../components/ui/Navbar";
import Card from "../components/ui/Card";
import UIForm from "../components/ui/Form";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import Error from "../components/ui/Error";
import EditGame from "../components/EditGame";
import { useEffect, useState } from "react";
import { gamesRef, handleSnapshot } from "../firebase";

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

const SearchButton = styled(Button)`
  margin-left: 20px;
  transform: scale(1.2);
`;

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [loadingButton, setLoadingButton] = useState(false);
  const [orderField, setOrderField] = useState("rating");
  const [games, setGames] = useState([]);

  const handleGames = (snapshot) => {
    const allGames = [];
    snapshot.forEach((snap) => {
      allGames.push(handleSnapshot(snap));
    });

    setGames(allGames);
  };

  const getGames = () => {
    gamesRef.orderByChild(orderField).on("value", handleGames);
  };

  const searchGames = async (e) => {
    e.preventDefault();

    setLoadingButton(true);
    const search = document
      .querySelector("input[name=search]")
      .value.toString();

    try {
      await gamesRef
        .orderByChild(orderField)
        .startAt(search)
        .endAt(`${search}\uf8ff`)
        .on("value", handleGames);
    } catch (e) {
      alert("Ocorreu um erro ao buscar os jogos!");
    }

    setLoadingButton(false);
  };

  const removeGame = (id) => {
    const allGames = games.filter((game) => game.id !== id);
    setGames(allGames);
  };

  useEffect(getGames, [orderField]);

  const ListGames = () =>
    games.map((game) => (
      <Card onClick={() => setSelectedGame(game)} game={game} key={game.id} />
    ));

  return (
    <Container>
      <Navbar />
      <Title>Meus jogos</Title>

      <Form direction="row" onSubmit={searchGames}>
        <div>
          <Input
            name="search"
            type="text"
            placeholder="Busque por um jogo..."
            light
          />
          <SearchButton loading={loadingButton} type="submit">
            Buscar
          </SearchButton>
        </div>

        <div>
          <label>Ordenar por: </label>
          <Select
            id="orderBy"
            name="orderBy"
            value={orderField}
            onChange={(e) => setOrderField(e.target.value)}
            light
          >
            <option value="name">Nome</option>
            <option value="rating">Avaliação</option>
            <option value="category">Categoria</option>
          </Select>
        </div>
      </Form>

      {games.length ? (
        <List>
          <ListGames />
        </List>
      ) : (
        <Error>Ops! Não encontramos nenhum jogo :/</Error>
      )}

      {selectedGame && (
        <EditGame
          game={selectedGame}
          clickedOut={() => setSelectedGame(null)}
          onDelete={removeGame}
        />
      )}
    </Container>
  );
};

export default Home;
