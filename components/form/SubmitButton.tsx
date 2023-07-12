import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledButton = styled.button(
  ({ theme: { space, colors, radius } }) => css`
    width: 75%;
    align-self: center;
    padding: ${space.s} ${space.m};
    background-color: ${colors.secondary};
    border-radius: ${radius?.s};
    box-shadow: 0 2px 2px ${colors.transparentDark};
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
  `,
);

const Text = styled.p(
  ({ theme: { space, colors } }) => css`
    font-size: ${space.l};
    font-weight: 600;
    color: ${colors.darkerMain};
  `,
);

interface ISubmitButtonProps {
  onSubmit: () => void;
  ctaText: string;
  loading: boolean;
}

function SubmitButton({ onSubmit, ctaText, loading }: ISubmitButtonProps) {
  return (
    <StyledButton disabled={loading} onClick={onSubmit}>
      <Text>{loading ? "Loading..." : ctaText}</Text>
    </StyledButton>
  );
}

export default SubmitButton;
