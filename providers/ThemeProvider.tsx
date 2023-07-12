import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const THEME = createTheme({
  colors: {
    lighterMain: "#067F9E",
    main: "#025367",
    darkerMain: "#0D3D49",
    secondary: "#F3AA27",
    dark: "#3F3F3F",
    transparentDark: "rgba(63, 63, 63, 0.33)",
    lightGrey: "#FAFAFA",
    white: "#FFFFFF",
  },
  fontSize: {
    s: "0.75rem",
    m: "1rem",
    l: "1.5rem",
    xl: "2.5rem",
  },
  fontFamily: {
    main: '"Open Sans", sans-serif',
  },
  space: {
    s: "0.5em",
    m: "0.75em",
    l: "1em",
    xl: "2em",
  },
  radius: {
    s: "0.25em",
    l: "1em",
  },
  mobileThreshold: 768,
});

interface IProps {
  children: ReactNode;
}

function ThemeProvider({ children }: IProps): JSX.Element {
  return <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
