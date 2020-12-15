import { Link } from "react-router-dom";
import Title from "../components/ui/Title";
import Box from "../components/ui/Box";
import Form from "../components/ui/Form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Text from "../components/ui/Text";
import { loginWithEmailAndPassword } from "../firebase";

const Login = () => {
  const login = async (e) => {
    e.preventDefault();

    const email = document.querySelector("input[type=email]").value;
    const password = document.querySelector("input[type=password]").value;

    try {
      await loginWithEmailAndPassword(email, password);
    } catch (e) {
      alert("Usuário ou senha inválidos!");
    }
  };

  return (
    <Box>
      <Form onSubmit={login}>
        <Title>
          Faça o seu <b>Login</b>!
        </Title>
        <Input type="email" name="email" placeholder="email" />
        <Input type="password" name="password" placeholder="senha" />
        <Button type="submit">Entrar</Button>
        <Text>Ainda não tem registro?</Text>
        <Link to="/cadastre-se">Cadastre-se aqui!</Link>
      </Form>
    </Box>
  );
};

export default Login;
