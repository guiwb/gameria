import Modal from "./ui/Modal";
import Form from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Title from "./ui/Title";

const NewGame = ({ clickedOut, game }) => (
  <Modal clickedOut={clickedOut}>
    <Title>
      Altere o <b>jogo</b>
    </Title>
    <Form>
      <Input type="text" name="image" placeholder="imagem" value={game.image} />
      <Input type="text" name="name" placeholder="nome" value={game.name} />
      <Input
        type="text"
        name="category"
        placeholder="categoria"
        value={game.category}
      />
      <Input
        type="number"
        min="0"
        max="5"
        step="0.1"
        name="rating"
        placeholder="avaliação"
        value={game.rating}
      />
      <Button type="submit">Alterar</Button>
    </Form>
  </Modal>
);

export default NewGame;
