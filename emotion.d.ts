import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: Record<string, string>;
    fontFamily: Record<string, string>;
    fontSize: Record<string, string>;
    screens?: Record<string, string>;
    spacing: Record<string, string>;
    radius?: Record<string, string>;
    mobileThreshold?: number;
  }
}
