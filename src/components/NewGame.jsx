import Modal from "./ui/Modal";
import Form from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Title from "./ui/Title";

const NewGame = ({ clickedOut }) => (
  <Modal clickedOut={clickedOut}>
    <Title>
      Insira um <b>jogo</b>
    </Title>
    <Form>
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
      <Button type="submit">Cadastrar</Button>
    </Form>
  </Modal>
);

export default NewGame;
