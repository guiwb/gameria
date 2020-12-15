import styled from "styled-components";
import ThemeProvider from "./providers/theme";
import Routes from "./routes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 950px;
  margin: 0 auto;
  min-height: 100vh;
`;

const App = () => (
  <ThemeProvider>
    <Wrapper>
      <Routes />
    </Wrapper>
  </ThemeProvider>
);

export default App;
