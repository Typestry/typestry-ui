import type { Preview } from "@storybook/react"
import "../src/index.css"
import { StorybookProvider } from "./StorybookProvider"

const preview: Preview = {
  decorators: [StorybookProvider],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
