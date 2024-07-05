import type { StoryContext, StoryFn } from "@storybook/react"
import React, { useEffect } from "react"
import { withThemeByClassName } from "@storybook/addon-themes"

import "../src/index.css"

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

const preview = {
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
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview
