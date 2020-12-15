import Modal from "./ui/Modal";
import Form from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Title from "./ui/Title";
import { gamesRef } from "../firebase";
import { useState } from "react";

const NewGame = ({ clickedOut, game, onDelete }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const deleteGame = async () => {
    setDeleteLoading(true);
    try {
      await gamesRef.child(game.id).remove();
      onDelete(game.id);
      clickedOut();
    } catch (error) {
      console.log("Ocorreu um erro ao deletar o jogo!");
    }
    setDeleteLoading(false);
  };

  return (
    <Modal clickedOut={clickedOut}>
      <Title>
        Altere o <b>jogo</b>
      </Title>
      <Form>
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
        <Button type="submit">Alterar</Button>
        <Button
          type="button"
          onClick={deleteGame}
          color="red"
          loading={deleteLoading}
        >
          Deletar
        </Button>
      </Form>
    </Modal>
  );
};

export default NewGame;
