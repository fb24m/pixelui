import type { Preview } from '@storybook/react'
import { PixieProvider } from '../components/PixieProvider/PixieProvider'

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
      theme: pixelDarkTheme,
    }
  },
  decorators: [
    (Outlet) => <PixieProvider>
      <Outlet />
    </PixieProvider>
  ]
};

export default preview;
