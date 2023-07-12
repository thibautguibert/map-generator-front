import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { centeredColumn } from "@styles/index.style";

const HeaderContainer = styled.div(
  ({ theme: { mobileThreshold, spacing, colors } }) => css`
    ${centeredColumn}
    width: 100%;
    padding: ${spacing.xl} 0;
    background-color: ${colors.lightGrey};

    @media (max-width: ${mobileThreshold}px) {
      padding: ${spacing.l} 0;
    }
  `,
);

const HeaderTitle = styled.h1(
  ({ theme: { colors, mobileThreshold, fontSize } }) => css`
    font-size: ${fontSize.xl};
    font-weight: 600;
    color: ${colors.lighterMain};
    text-transform: uppercase;
    text-align: center;

    @media (max-width: ${mobileThreshold}px) {
      font-size: ${fontSize.l};
    }
  `,
);

const HeaderSubtitle = styled.h2(
  ({ theme: { colors, mobileThreshold, fontSize } }) => css`
    font-size: ${fontSize.l};
    font-weight: 500;
    color: ${colors.secondary};
    text-align: center;

    @media (max-width: ${mobileThreshold}px) {
      font-size: ${fontSize.m};
      max-width: 15rem;
    }
  `,
);

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderTitle>Random Map Generator</HeaderTitle>
      <HeaderSubtitle>Play with parameters to create the best possible map</HeaderSubtitle>
    </HeaderContainer>
  );
}

export default Header;
