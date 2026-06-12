// @ts-check
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  // Global Ignores
  {
    ignores: ["dist/", ".astro/"],
  },

  // Base TypeScript Config
  {
    files: ["**/*.ts"],
    extends: [js.configs.recommended, tseslint.configs.strictTypeChecked],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Astro Recommended Configs
  ...eslintPluginAstro.configs.recommended,

  // Astro Client-Side Scripts
  {
    files: ["**/*.astro"],
    processor: "astro/client-side-ts",
  },

  // Disable Type-Aware Linting for Astro files to prevent parsing crashes
  {
    files: ["**/*.astro", "**/*.astro/*.ts"],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: {
      parserOptions: { 
        projectService: false 
      },
    },
  },
]);