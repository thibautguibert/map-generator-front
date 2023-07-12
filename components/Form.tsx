import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BIOMES, Biome, DEFAULT_BASE_BIOME, DEFAULT_SELECTED_BIOMES } from "@lib/biome";
import { FormControl } from "@mui/material";
import { centeredColumn } from "@styles/index.style";
import { useMap } from "hooks/MapProvider";
import { useState } from "react";

import CheckboxGroup from "./form/CheckboxGroup";
import InputSlider from "./form/InputSlider";
import Selector from "./form/Selector";
import SubmitButton from "./form/SubmitButton";
import SwitchButton from "./form/SwitchButton";

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

const ErrorText = styled.div`
  color: red;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
`;

function Form(): JSX.Element {
  const [biomes, setBiomes] = useState<Biome[]>(DEFAULT_SELECTED_BIOMES);
  const [baseBiome, setBaseBiome] = useState<Biome>(DEFAULT_BASE_BIOME);
  const [numberOfBiomes, setNumberOfBiomes] = useState<number>(5);
  const [mapWidth, setMapWidth] = useState<number>(10);
  const [mapHeight, setMapHeight] = useState<number>(10);
  const [isSquare, setIsSquare] = useState<boolean>(false);

  const { generateMapSettings, loading, apiError } = useMap();

  const handleBiomesChange = (value: Biome[]) => {
    setBiomes(value);
  };

  const handleBaseBiomeChange = (value: Biome) => {
    setBaseBiome(value);
  };

  const handleSubmit = () => {
    generateMapSettings({
      availableBiome: biomes,
      baseBiome,
      numberOfBiomes,
      width: mapWidth,
      height: mapHeight,
      squaredBiomes: isSquare,
    });
  };

  return (
    <FormContainer>
      <FormControl style={{ gap: "1.5rem" }}>
        <CheckboxGroup options={BIOMES} value={biomes} onChange={handleBiomesChange} />
        <Selector options={BIOMES} value={baseBiome} onChange={handleBaseBiomeChange} />
        <InputSlider setValue={setNumberOfBiomes} value={numberOfBiomes} min={1} max={15} label="Number of biomes" />
        <InputSlider setValue={setMapWidth} value={mapWidth} min={2} max={20} label="Width of the Map" />
        <InputSlider setValue={setMapHeight} value={mapHeight} min={2} max={20} label="Height of the Map" />
        <SwitchButton label="Biome areas are squared" value={isSquare} onChange={setIsSquare} />
        {apiError && <ErrorText>{apiError.message}</ErrorText>}
        <SubmitButton onSubmit={handleSubmit} ctaText="Generate Map" loading={loading} />
      </FormControl>
    </FormContainer>
  );
}

export default Form;
