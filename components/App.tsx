import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { globalStyle, centeredColumn, topRow } from "@styles/index.style";
import ThemeProvider from "providers/ThemeProvider";

import Form from "./Form";
import Header from "./Header";

const StyledAppContainer = styled.div`
  ${centeredColumn}
  font-family: ${({ theme: { fontFamily } }) => fontFamily.main};
`;

const MainContainer = styled.main(
  ({ theme: { mobileThreshold, spacing } }) => css`
    ${topRow}
    width: 100%;
    padding: ${spacing.xl};

    @media (max-width: ${mobileThreshold}px) {
      ${centeredColumn}
    }
  `,
);

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Global styles={globalStyle} />
      <StyledAppContainer>
        <Header />
        <MainContainer>
          <Form />
          <div>Map</div>
        </MainContainer>
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
