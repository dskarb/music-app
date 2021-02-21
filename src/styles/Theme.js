import { ThemeProvider } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const theme = {
  colors: {
    deepBlack: "#000",
    white: "#fff",
    black: "#1f1f1f",
    grey: "#727272",
    greyText: "#798285",
    lightGrey: "#acacac",
    buttonBorder: "#b3b5b5",
    lighterGrey: "#f5f6f6",
  },
  transition: "cubic-bezier(.165,.84,.44,1) .5s",
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
