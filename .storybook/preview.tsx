import type { Preview, StoryContext, StoryFn } from "@storybook/react"
import React, { useEffect } from "react"
import "../src/index.css"
import { withThemeByDataAttribute } from "@storybook/addon-styling"

const WithThemeProvider = (Story: StoryFn, context: StoryContext) => {
  useEffect(() => {
    if (context.globals.theme === "light") {
      document.body.style.backgroundColor = "#fff"
    }
    if (context.globals.theme === "dark") {
      document.body.style.backgroundColor = "#333"
    }
  }, [context.globals.theme])

  return <Story {...context} />
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    WithThemeProvider,
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
      attributeName: "data-mode",
    }),
  ],
}

export default preview
