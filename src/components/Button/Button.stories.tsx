// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"
import { FC } from "react"

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story: FC, ctx) => {
      console.log("Button", ctx)
      return (
        <div style={{ backgroundColor: "red" }}>
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => <Button>Hello Button!</Button>,
}
