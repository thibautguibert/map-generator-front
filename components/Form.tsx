import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BIOMES, Biome, DEFAULT_SELECTED_BIOMES } from "@lib/biome";
import { FormControl } from "@mui/material";
import { centeredColumn } from "@styles/index.style";
import { useState } from "react";

import CheckboxGroup from "./form/CheckboxGroup";

const FormContainer = styled.div(
  ({ theme: { mobileThreshold, colors, space, radius } }) => css`
    ${centeredColumn}
    color: ${colors.darkerMain};
    padding: ${space.m};
    background-color: ${colors.lightGrey};
    border-radius: 0 ${radius?.l} 0 ${radius?.l};
    box-shadow: 0 0 8px ${colors.transparentDark};

    @media (max-width: ${mobileThreshold}px) {
      padding: ${space.m};
    }
  `,
);

function Form(): JSX.Element {
  const [biomes, setBiomes] = useState<Biome[]>(DEFAULT_SELECTED_BIOMES);
  const handleChange = (value: Biome[]) => {
    setBiomes(value);
  };

  return (
    <FormContainer>
      <FormControl component="fieldset" variant="standard">
        <CheckboxGroup options={BIOMES} value={biomes} onChange={handleChange} />
      </FormControl>
    </FormContainer>
  );
}

export default Form;
