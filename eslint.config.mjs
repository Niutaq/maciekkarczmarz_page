import astro from "eslint-plugin-astro";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  ...astro.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
