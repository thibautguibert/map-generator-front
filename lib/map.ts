import axios from "axios";

import { Biome, BiomeArea } from "./biome";

export interface MapConfig {
  availableBiome: Biome[];
  baseBiome: Biome;
  numberOfBiomes: number;
  width: number;
  height: number;
  squaredBiomes: boolean;
}

export interface MapSettings {
  biomeAreas: BiomeArea[];
  width: number;
  height: number;
  baseBiome: Biome;
}

export async function generateMapFromAPI(config: MapConfig): Promise<MapSettings> {
  const response = await axios.post("http://localhost:3005/api/map/random", config);
  return response.data as MapSettings;
}
