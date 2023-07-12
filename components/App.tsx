import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { globalStyle, centeredColumn } from "@styles/index.style";
import ThemeProvider from "providers/ThemeProvider";

import Header from "./Header";

const StyledAppContainer = styled.div(
  ({ theme: { colors, spacing } }) => css`
    ${centeredColumn}
    padding: ${spacing.l} 0;
    background-color: ${colors.lightGrey};
  `,
);

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Global styles={globalStyle} />
      <StyledAppContainer>
        <Header />
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
