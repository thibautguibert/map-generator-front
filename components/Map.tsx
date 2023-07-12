import React from "react";

import { useMap } from "../hooks/MapProvider";

const biomeColors: { [key: string]: string } = {
  // Remplacez ces valeurs par les couleurs appropriées pour chaque type de biome
  ocean: "#23A3F7",
  forest: "#13AE5B",
  desert: "#FECD2A",
  plain: "#AFF4C5",
};

function Map() {
  const {
    mapSettings: { biomeAreas, width, height, baseBiome },
  } = useMap();
  return (
    <div
      style={{
        position: "relative",
        width: `${width * 25}px`,
        height: `${height * 25}px`,
        backgroundColor: biomeColors[baseBiome],
        overflow: "hidden",
      }}
    >
      {biomeAreas.map((biomeArea, index) => (
        <div
          key={`${biomeArea.biome}-${biomeArea.x}-${biomeArea.y}`}
          style={{
            position: "absolute",
            left: `${biomeArea.x * 25}px`,
            top: `${biomeArea.y * 25}px`,
            width: `${biomeArea.width * 25}px`,
            height: `${biomeArea.height * 25}px`,
            backgroundColor: biomeColors[biomeArea.biome],
            zIndex: index + 1,
          }}
        />
      ))}
    </div>
  );
}

export default Map;
