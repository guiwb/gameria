import { Link } from "react-router-dom";
import Title from "../components/ui/Title";
import Box from "../components/ui/Box";
import Form from "../components/ui/Form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Text from "../components/ui/Text";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const getField = (name, lower = true) => {
    const { value } = document.querySelector(`input[name=${name}]`);
    return lower ? value.toLowerCase() : value;
  };

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const photoURL = getField("picture");
    const displayName = getField("name");
    const email = getField("email");
    const password = getField("password", false);

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.updateProfile({ displayName, photoURL });
      history.push("/");
    } catch (e) {
      console.log(e);
      alert(`Ocorreu o seguinte erro ao criar o usuário: ${e.message}`);
    }
    setLoading(false);
  };

  return (
    <Box>
      <Form onSubmit={submit}>
        <Title>
          <b>Cadastre-se</b> na plataforma!
        </Title>
        <Input type="text" name="picture" placeholder="foto de perfil" />
        <Input type="text" name="name" placeholder="nome completo" />
        <Input type="email" name="email" placeholder="email" />
        <Input type="password" name="password" placeholder="senha" />
        <Button type="submit" loading={loading}>
          cadastre-me
        </Button>
        <Text>Já tem registro?</Text>
        <Link to="/login">Faça o login aqui!</Link>
      </Form>
    </Box>
  );
};

export default Register;
