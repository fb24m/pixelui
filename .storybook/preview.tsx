import type { Preview } from "@storybook/react";
import '../src/pages/Layout/Layout.scss'

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
      toc: true
    }
  }
};

export default preview;
