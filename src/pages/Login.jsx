import { Link } from "react-router-dom";
import Title from "../components/ui/Title";
import Box from "../components/ui/Box";
import Form from "../components/ui/Form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Text from "../components/ui/Text";

const Login = () => (
  <Box>
    <Form action="">
      <Title>Faça o seu Login</Title>
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="senha" />
      <Button type="submit">Entrar</Button>
      <Text>Ainda não tem registro?</Text>
      <Link to="/cadastre-se">Cadastre-se aqui!</Link>
    </Form>
  </Box>
);

export default Login;
