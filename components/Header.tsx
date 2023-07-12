import styled from "@emotion/styled";
import { centeredColumn } from "@styles/index.style";

const HeaderContainer = styled.div`
  ${centeredColumn}
  padding: ${({ theme }) => theme.spacing.l} 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lighterMain};
  text-transform: uppercase;
`;

const HeaderSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`;

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderTitle>Random Map Generator</HeaderTitle>
      <HeaderSubtitle>Play with parameters to create the best possible map</HeaderSubtitle>
    </HeaderContainer>
  );
}

export default Header;
