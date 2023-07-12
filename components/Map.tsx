import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Biome, BiomeArea } from "@lib/biome";

import { useMap } from "../hooks/MapProvider";

const biomeColors: { [key: string]: string } = {
  // Remplacez ces valeurs par les couleurs appropriées pour chaque type de biome
  ocean: "#23A3F7",
  forest: "#13AE5B",
  desert: "#FECD2A",
  plain: "#AFF4C5",
};

interface IStyledBiomeProps {
  biomeArea: BiomeArea;
  theme?: Theme;
  index: number;
}

const StyledBiome = styled.div(
  ({ theme, biomeArea, index }: IStyledBiomeProps) => css`
    position: absolute;
    left: ${biomeArea.x * 25}px;
    top: ${biomeArea.y * 25}px;
    width: ${biomeArea.width * 25}px;
    height: ${biomeArea.height * 25}px;
    background-color: ${biomeColors[biomeArea.biome]};
    z-index: ${index + 1};
    border-radius: ${theme?.radius?.s};
  `,
);

interface IStyledMapProps {
  width: number;
  height: number;
  baseBiome: Biome;
}

const StyledMap = styled.div(
  ({ width, height, baseBiome }: IStyledMapProps) => css`
    position: relative;
    width: ${width * 25}px;
    height: ${height * 25}px;
    background-color: ${biomeColors[baseBiome]};
    overflow: hidden;
  `,
);

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Placeholder = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.darkerMain};
`;

function Map() {
  const {
    mapSettings: { biomeAreas, width, height, baseBiome },
  } = useMap();
  return (
    <MapContainer>
      {(width === 0 || height === 0) && <Placeholder>Generate a map to see it here</Placeholder>}
      <StyledMap width={width} height={height} baseBiome={baseBiome}>
        {biomeAreas.map((biomeArea, index) => (
          <StyledBiome key={`${biomeArea.biome}-${biomeArea.x}-${biomeArea.y}`} index={index} biomeArea={biomeArea} />
        ))}
      </StyledMap>
    </MapContainer>
  );
}

export default Map;
