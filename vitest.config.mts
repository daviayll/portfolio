import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    exclude: ["**/node_modules/**", "**/e2e/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      exclude: [
        "node_modules/**",
        "src/__tests__/**",
        "src/test/**",
        "*.config.*",
        "src/app/opengraph-image.tsx",
        "src/app/case-studies/[slug]/opengraph-image.tsx",
        "src/app/sitemap.ts",
        "src/app/robots.ts",
      ],
    },
  },
});
