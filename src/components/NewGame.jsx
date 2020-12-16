import Modal from "./ui/Modal";
import Form from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Title from "./ui/Title";
import { gamesRef } from "../firebase";
import { useState } from "react";
import { getFieldValue } from "../utils";

const NewGame = ({ clickedOut }) => {
  const [loading, setLoading] = useState(false);

  const insert = async (e) => {
    e.preventDefault();
    setLoading(true);
    const image = getFieldValue("image", false);
    const name = getFieldValue("name");
    const category = getFieldValue("category");
    const rating = getFieldValue("rating");

    const data = { image, name, category, rating };

    try {
      await gamesRef.push(data);
      clickedOut();
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar o jogo!");
    }
    setLoading(false);
  };

  return (
    <Modal clickedOut={clickedOut}>
      <Title>
        Insira um <b>jogo</b>
      </Title>
      <Form onSubmit={insert}>
        <Input type="text" name="image" placeholder="imagem" />
        <Input type="text" name="name" placeholder="nome" />
        <Input type="text" name="category" placeholder="categoria" />
        <Input
          type="number"
          min="0"
          max="5"
          step="0.1"
          name="rating"
          placeholder="avaliação"
        />
        <Button type="submit" loading={loading}>
          Cadastrar
        </Button>
      </Form>
    </Modal>
  );
};

export default NewGame;
