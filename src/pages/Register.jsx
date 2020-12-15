import { Link } from "react-router-dom";
import Title from "../components/ui/Title";
import Box from "../components/ui/Box";
import Form from "../components/ui/Form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Text from "../components/ui/Text";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    const photoURL = document.querySelector("input[name=picture]").value;
    const displayName = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[type=email]").value;
    const password = document.querySelector("input[type=password]").value;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.updateProfile({ displayName, photoURL });
      history.push("/");
    } catch (e) {
      console.log(e);
      alert(`Ocorreu o seguinte erro ao criar o usuário: ${e.message}`);
    }
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
        <Button type="submit">cadastre-me</Button>
        <Text>Já tem registro?</Text>
        <Link to="/login">Faça o login aqui!</Link>
      </Form>
    </Box>
  );
};

export default Register;
