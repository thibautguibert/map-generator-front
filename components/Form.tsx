import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BIOMES, Biome, DEFAULT_BASE_BIOME, DEFAULT_SELECTED_BIOMES } from "@lib/biome";
import { FormControl } from "@mui/material";
import { centeredColumn } from "@styles/index.style";
import { useState } from "react";

import CheckboxGroup from "./form/CheckboxGroup";
import Selector from "./form/Selector";

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
  const [baseBiome, setBaseBiome] = useState<Biome>(DEFAULT_BASE_BIOME);
  const handleBiomesChange = (value: Biome[]) => {
    setBiomes(value);
  };

  const handleBaseBiomeChange = (value: Biome) => {
    setBaseBiome(value);
  };

  return (
    <FormContainer>
      <FormControl variant="standard" style={{ gap: "1rem" }}>
        <CheckboxGroup options={BIOMES} value={biomes} onChange={handleBiomesChange} />
        <Selector options={BIOMES} value={baseBiome} onChange={handleBaseBiomeChange} />
      </FormControl>
    </FormContainer>
  );
}

export default Form;
