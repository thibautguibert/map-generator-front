export const BIOMES = ["plain", "desert", "forest", "ocean"];
export type Biome = typeof BIOMES[number];

export const DEFAULT_SELECTED_BIOMES: Biome[] = ["plain", "desert", "forest"];
export const DEFAULT_BASE_BIOME: Biome = "ocean";
