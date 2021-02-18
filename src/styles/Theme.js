import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    deepBlack: "#000",
    white: "#fff",
    black: "#1f1f1f",
    grey: "#727272",
    greyText: "#798285",
    lightGrey: "#acacac",
    buttonBorder: "#b3b5b5",
  },
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
  fonts: ["sans-serif", "Dosis"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
