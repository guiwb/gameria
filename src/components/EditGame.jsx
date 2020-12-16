import Modal from "./ui/Modal";
import Form from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Title from "./ui/Title";
import { gamesRef } from "../firebase";
import { useState } from "react";

const NewGame = ({ clickedOut, game }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const getField = (name) =>
    document.querySelector(`input[name=${name}]`).value.toLowerCase();

  const deleteGame = async () => {
    setDeleteLoading(true);
    try {
      await gamesRef.child(game.id).remove();
      clickedOut();
    } catch (error) {
      console.log("Ocorreu um erro ao deletar o jogo!");
    }
    setDeleteLoading(false);
  };

  const updateGame = async (e) => {
    e.preventDefault();
    setUpdateLoading(true);

    try {
      const image = getField("image");
      const name = getField("name");
      const category = getField("category");
      const rating = getField("rating");

      const data = { image, name, category, rating };

      await gamesRef.child(game.id).update(data);
      clickedOut();
    } catch (error) {}

    setUpdateLoading(false);
  };

  return (
    <Modal clickedOut={clickedOut}>
      <Title>
        Altere o <b>jogo</b>
      </Title>
      <Form onSubmit={updateGame}>
        <Input
          type="text"
          name="image"
          placeholder="imagem"
          defaultValue={game.image}
        />
        <Input
          type="text"
          name="name"
          placeholder="nome"
          defaultValue={game.name}
        />
        <Input
          type="text"
          name="category"
          placeholder="categoria"
          defaultValue={game.category}
        />
        <Input
          type="number"
          min="0"
          max="5"
          step="0.1"
          name="rating"
          placeholder="avaliação"
          defaultValue={game.rating}
        />
        <Button type="submit" loading={updateLoading}>
          Alterar
        </Button>
        <Button
          type="button"
          color="red"
          onClick={deleteGame}
          loading={deleteLoading}
        >
          Deletar
        </Button>
      </Form>
    </Modal>
  );
};

export default NewGame;
