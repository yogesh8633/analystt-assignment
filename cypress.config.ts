import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "src/**/*.test.{ts,tsx}",
    viewportWidth          : 1500,
    viewportHeight         : 900,
  },
});
