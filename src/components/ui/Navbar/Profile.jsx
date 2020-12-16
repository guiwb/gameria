import styled from "styled-components";
import Button from "../Button";
import { auth } from "../../../firebase";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  height: 60px;
  border-radius: 60px;
  background-color: ${(props) => props.theme.colors.blackMediumLight};
  display: flex;
  align-items: center;
  padding: 0 15px 0 0;
`;

const Picture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
`;

const Name = styled.p`
  margin: 0 20px;
  font-size: 16px;
  color: #fff;

  b {
    text-transform: capitalize;
  }
`;

const Profile = () => {
  const history = useHistory();

  const logout = async () => {
    try {
      await auth.signOut();
      history.push("/login");
    } catch (error) {
      alert("Ocorreu um erro ao deslogar!");
    }
  };

  return (
    <Wrapper>
      <Picture
        src={auth.currentUser.photoURL}
        onError={(e) =>
          (e.target.src =
            "https://i0.wp.com/www.techcult.com.br/wp-content/uploads/2017/03/perfil-twitter.png?resize=1024%2C1024&ssl=1")
        }
      />
      <Name>
        Seja bem-vindo, <b>{auth.currentUser.displayName}</b>
      </Name>
      <Button onClick={logout} color="red">
        logout
      </Button>
    </Wrapper>
  );
};

export default Profile;
