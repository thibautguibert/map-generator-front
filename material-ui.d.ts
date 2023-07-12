import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    colors?: Record<string, string>;
    fontFamily?: Record<string, string>;
    fontSize?: Record<string, string>;
    screens?: Record<string, string>;
    space?: Record<string, string>;
    radius?: Record<string, string>;
    mobileThreshold?: number;
  }
}
