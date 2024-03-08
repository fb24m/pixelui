import type { Preview } from '@storybook/react'
import '../src/layout.css'

import { pixelDarkTheme } from './brand-theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: pixelDarkTheme
    }
  }
};

export default preview;
