import styled from "styled-components";
import Button from "../Button";

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
`;

const Profile = () => (
  <Wrapper>
    <Picture src="https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.0-9/74352081_2228318253940054_1604344175396913152_n.jpg?_nc_cat=100&ccb=2&_nc_sid=a4a2d7&_nc_eui2=AeFaJB5HF68VFuX4rFZNJYeYzeAvrbHnI8zN4C-tsecjzAKSnqR_HhpFZPQxXg8UBKBz5kjE55y9b_AUhKOLPwgY&_nc_ohc=viJTlSujVk0AX_7lwUg&_nc_ht=scontent.fpoa8-1.fna&oh=5667e016a642221d32933cf78299efbf&oe=5FFD8488" />
    <Name>Seja bem-vindo, Guilherme</Name>
    <Button color="red">logout</Button>
  </Wrapper>
);

export default Profile;
