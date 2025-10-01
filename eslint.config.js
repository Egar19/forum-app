import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import pluginCypress from 'eslint-plugin-cypress/flat';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  daStyle,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  pluginCypress.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
