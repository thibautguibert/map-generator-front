import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { centeredColumn } from "@styles/index.style";

const FormContainer = styled.div(
  ({ theme: { mobileThreshold, colors, spacing, radius } }) => css`
    ${centeredColumn}
    width: 10rem;
    color: ${colors.white};
    padding: ${spacing.m};
    background-color: ${colors.darkerMain};
    border-radius: ${radius?.s};

    @media (max-width: ${mobileThreshold}px) {
      padding: ${spacing.m};
    }
  `,
);

function Form(): JSX.Element {
  return (
    <FormContainer>
      <h1>InputForm</h1>
    </FormContainer>
  );
}

export default Form;
