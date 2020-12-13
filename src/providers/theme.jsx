import { ThemeProvider } from "styled-components";

const colors = {
  black: "#222831",
  blackMediumLight: "#292F38",
  blackLight: "#393e46",
  blue: "#00adb5",
  blueDark: "#009da3",
  gray: "#eeeeee",
  red: "#D02020",
  redDark: "#bc1e1e",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={{ colors }}>{children}</ThemeProvider>
);

export default Theme;
