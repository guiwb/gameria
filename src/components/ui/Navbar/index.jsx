import styled from "styled-components";
import Button from "../Button";
import Profile from "./Profile";
import NewGame from "../../NewGame";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Profile />
      <Button onClick={() => setShowModal(true)} size="lg">
        Adicionar Jogo
      </Button>
      {showModal && <NewGame clickedOut={() => setShowModal(false)} />}
    </Container>
  );
};

export default Index;
