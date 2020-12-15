import { Link } from "react-router-dom";
import Title from "../components/ui/Title";
import Box from "../components/ui/Box";
import Form from "../components/ui/Form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Text from "../components/ui/Text";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();

    const email = document.querySelector("input[type=email]").value;
    const password = document.querySelector("input[type=password]").value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (e) {
      console.log(e);
      alert("Usuário ou senha inválidos!");
    }
  };

  return (
    <Box>
      <Form onSubmit={submit}>
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
