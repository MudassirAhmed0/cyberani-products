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
  {
    files: ["**/*.{ts,tsx}"], // Target TypeScript files
    rules: {
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/control-has-associated-label": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-autofocus": "off",
      "react/no-array-index-key": "off",
      "no-promise-executor-return": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "react/no-unescaped-entities": "off",
      "global-require": "off",
      "prettier/prettier": [
        "error",
        {
          "singleQuote": true,
          "endOfLine": "auto"
        }
      ], // Avoid conflict rule between Prettier and Airbnb Eslint
      "import/extensions": "off", // Avoid missing file extension errors, TypeScript already provides a similar feature
      // Disable Airbnb's specific rule
      "react/function-component-definition": "off", // Disable Airbnb's specific function type
      "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      "react/require-default-props": "off", // Allow non-defined react props as undefined
      "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
      "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
      "jsx-a11y/media-has-caption": "off", // Not necessary for all media elements
      "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
      "no-restricted-syntax": [
        "error",
        "ForInStatement",
        "LabeledStatement",
        "WithStatement"
      ], // Overrides Airbnb configuration and enable no-restricted-syntax
      "import/prefer-default-export": "off", // Named export is easier to refactor automatically
      "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
      "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
      "import/order": "off", // Avoid conflict rule between `eslint-plugin-import` and `eslint-plugin-simple-import-sort`
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-contradicting-classname": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-img-element": "off",
      "no-nested-ternary": "off",
      "react/button-has-type": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        { "argsIgnorePattern": "^_" }
      ]
    }
  }
];

export default eslintConfig;
