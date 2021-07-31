import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import yaml from "@rollup/plugin-yaml";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), yaml()],
});
