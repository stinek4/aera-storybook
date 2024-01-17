import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle } from 'styled-components';

// import "../src/styles/styles.css"

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];



const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
