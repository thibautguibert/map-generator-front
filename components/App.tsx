import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { globalStyle, centeredColumn, topRow } from "@styles/index.style";
import MapProvider from "hooks/MapProvider";
import ThemeProvider from "providers/ThemeProvider";

import Form from "./Form";
import Header from "./Header";
import Map from "./Map";

const StyledAppContainer = styled.div`
  ${centeredColumn}
  font-family: ${({ theme: { fontFamily } }) => fontFamily.main};
`;

const MainContainer = styled.main(
  ({ theme: { mobileThreshold, space } }) => css`
    ${topRow}
    width: 100%;
    padding: ${space.xl};

    @media (max-width: ${mobileThreshold}px) {
      ${centeredColumn}
    }
  `,
);

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MapProvider>
        <Global styles={globalStyle} />
        <StyledAppContainer>
          <Header />
          <MainContainer>
            <Form />
            <Map />
          </MainContainer>
        </StyledAppContainer>
      </MapProvider>
    </ThemeProvider>
  );
}

export default App;
