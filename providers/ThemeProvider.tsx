import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ReactNode } from "react";

const THEME = {
  colors: {
    lavender: "lavender",
  },
  spacing: {
    l: "1em",
  },
};

interface IProps {
  children: ReactNode;
}

function ThemeProvider({ children }: IProps): JSX.Element {
  return <EmotionThemeProvider theme={THEME}>{children}</EmotionThemeProvider>;
}

export default ThemeProvider;
