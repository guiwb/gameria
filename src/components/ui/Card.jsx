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

const Category = styled.div`
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

const Card = ({ onClick, game }) => (
  <Wrapper onClick={onClick}>
    <Overlay />
    <Category>{game.category}</Category>
    <Rating>{game.rating}</Rating>
    <Image
      src={game.image}
      onError={(e) =>
        (e.target.src =
          "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/04/barras.png")
      }
    />
    <Title>{game.name}</Title>
  </Wrapper>
);

export default Card;
