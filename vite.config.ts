import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// https://github.com/engrfabri/vite-react-starter/search?q=emotion if need be for emotion
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
  },
});
