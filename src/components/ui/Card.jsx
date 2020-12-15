import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Genre = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 14px;
  color: #fff;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 190px;
  background: linear-gradient(
    180deg,
    rgba(34, 40, 49, 1) 0%,
    rgba(34, 40, 49, 0) 100%
  );
`;

const Rating = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 14px;
  color: #fff;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
`;

const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.blackMediumLight};
  border-radius: 60px;
  color: #fff;
  padding: 20px 50px;
  font-size: 16px;
  text-align: center;
  margin-top: -30px;
  text-transform: uppercase;
`;

const Card = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <Overlay />
    <Genre>Ação</Genre>
    <Rating>5.0</Rating>
    <Image src="https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.0-9/74352081_2228318253940054_1604344175396913152_n.jpg?_nc_cat=100&ccb=2&_nc_sid=a4a2d7&_nc_eui2=AeFaJB5HF68VFuX4rFZNJYeYzeAvrbHnI8zN4C-tsecjzAKSnqR_HhpFZPQxXg8UBKBz5kjE55y9b_AUhKOLPwgY&_nc_ohc=viJTlSujVk0AX_7lwUg&_nc_ht=scontent.fpoa8-1.fna&oh=5667e016a642221d32933cf78299efbf&oe=5FFD8488" />
    <Title>Mario Bros</Title>
  </Wrapper>
);

export default Card;
