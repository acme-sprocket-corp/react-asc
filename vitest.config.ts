import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        exclude: ["main.tsx", "**/**.stories.*", "**/**index.ts"],
        thresholds: {
          branches: 100,
        },
      },
      environment: "jsdom",
      globals: true,
      root: "src",
      setupFiles: ["setup-tests.ts"],
    },
  }),
);
