import { Link } from "react-router-dom";
import * as S from "./styled";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const Login = () => (
  <S.Box>
    <S.Form action="">
      <h1>Faça o seu Login</h1>
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="senha" />
      <Button type="submit">Entrar</Button>
      <S.Text>Ainda não tem registro?</S.Text>
      <Link to="/cadastre-se">Cadastre-se aqui!</Link>
    </S.Form>
  </S.Box>
);

export default Login;
