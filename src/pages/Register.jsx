import { Link } from "react-router-dom";
import Title from "../components/ui/Title";
import Box from "../components/ui/Box";
import Form from "../components/ui/Form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Text from "../components/ui/Text";

const Register = () => (
  <Box>
    <Form action="">
      <Title>
        <b>Cadastre-se</b> na plataforma!
      </Title>
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="senha" />
      <Input
        type="password"
        name="passwordConfirm"
        placeholder="confirme a senha"
      />
      <Button type="submit">cadastre-me</Button>
      <Text>Já tem registro?</Text>
      <Link to="/login">Faça o login aqui!</Link>
    </Form>
  </Box>
);

export default Register;
