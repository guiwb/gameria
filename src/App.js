import styled, { ThemeProvider } from "styled-components";
import Routes from "./routes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const colors = {
  black: "#222831",
  blackMediumLight: "#292F38",
  blackLight: "#393e46",
  blue: "#00adb5",
  blueDark: "#009da3",
  gray: "#eeeeee",
};

const App = () => (
  <ThemeProvider theme={{ colors }}>
    <Wrapper>
      <Routes />
    </Wrapper>
  </ThemeProvider>
);

export default App;
