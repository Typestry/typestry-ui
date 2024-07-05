// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/Button"

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => <Button>Hello Button!</Button>,
}
