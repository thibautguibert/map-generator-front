import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ReactNode } from "react";

const THEME = {
  colors: {
    lighterMain: "#067F9E",
    main: "#025367",
    darkerMain: "#0D3D49",
    secondary: "#F3AA27",
    dark: "#3F3F3F",
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
  spacing: {
    m: "0.75em",
    l: "1em",
    xl: "2em",
  },
  radius: {
    s: "0.25em",
  },
  mobileThreshold: 768,
};

interface IProps {
  children: ReactNode;
}

function ThemeProvider({ children }: IProps): JSX.Element {
  return <EmotionThemeProvider theme={THEME}>{children}</EmotionThemeProvider>;
}

export default ThemeProvider;
