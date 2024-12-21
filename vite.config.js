import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  scripts: {
    dev: "webpack-dev-server --config webpack.dev.js",
  },
  server: {
    host: true,
  },
});
