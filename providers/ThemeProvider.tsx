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
  spacing: {
    l: "1em",
    xl: "2em",
  },
};

interface IProps {
  children: ReactNode;
}

function ThemeProvider({ children }: IProps): JSX.Element {
  return <EmotionThemeProvider theme={THEME}>{children}</EmotionThemeProvider>;
}

export default ThemeProvider;
