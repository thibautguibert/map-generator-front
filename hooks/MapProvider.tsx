import { DEFAULT_BASE_BIOME } from "@lib/biome";
import { MapConfig, MapSettings, generateMapFromAPI } from "@lib/map";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";

export const DEFAULT_MAP_SETTINGS: MapSettings = {
  biomeAreas: [],
  width: 0,
  height: 0,
  baseBiome: DEFAULT_BASE_BIOME,
};

interface MapContextState {
  mapSettings: MapSettings;
  loading: boolean;
  apiError: Error | null;
  generateMapSettings: (mapConfig: MapConfig) => Promise<void>;
}

const DEFAULT_MAP_STATE: MapContextState = {
  mapSettings: DEFAULT_MAP_SETTINGS,
  loading: false,
  apiError: null,
  generateMapSettings: async () => {},
};

const MapContext = createContext(DEFAULT_MAP_STATE);

interface IMapProviderProps {
  children: ReactNode;
}

function MapProvider({ children }: IMapProviderProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<Error | null>(null);
  const [mapSettings, setMapSettings] = useState<MapSettings>(DEFAULT_MAP_SETTINGS);

  const generateMapSettings = async (mapConfig: MapConfig) => {
    setLoading(true);
    setApiError(null);
    setMapSettings(DEFAULT_MAP_SETTINGS);

    try {
      const generatedSettings = await generateMapFromAPI(mapConfig);
      setMapSettings(generatedSettings);
      setLoading(false);
    } catch (error: any) {
      setApiError(error);
      setLoading(false);
    }
  };

  const contextValue = useMemo(
    () => ({ loading, apiError, mapSettings, generateMapSettings }),
    [loading, mapSettings, apiError],
  );

  return <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>;
}

export function useMap() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
}

export default MapProvider;
