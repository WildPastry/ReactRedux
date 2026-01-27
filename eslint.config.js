import { defineConfig, globalIgnores } from 'eslint/config';
import { fileURLToPath } from 'node:url';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import wildpastryConfig from '@wildpastry/eslint-config';

const tsconfigRootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig([
  globalIgnores(['dist', '**/*.spec.tsx']),

  ...wildpastryConfig,

  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended
    ],
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir
      }
    }
  }
]);
