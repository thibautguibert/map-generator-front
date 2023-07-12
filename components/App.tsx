import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { globalStyle, centeredColumn } from "@styles/index.style";
import ThemeProvider from "providers/ThemeProvider";

const StyledAppContainer = styled.div(
  ({ theme: { colors, spacing } }) => css`
    ${centeredColumn}
    padding: ${spacing.l} 0;
    background-color: ${colors.lavender};
  `,
);

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Global styles={globalStyle} />
      <StyledAppContainer>hello world!</StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
