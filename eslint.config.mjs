import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.rules( {
    "@typescript-eslint/no-unused-vars": "off", // Ignore unused variables
    "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type
    "react/no-unescaped-entities": "off", // Allow unescaped entities like `'`
    "react-hooks/exhaustive-deps": "warn", // Keep warnings for dependencies but not errors
  }),
];

export default eslintConfig;
