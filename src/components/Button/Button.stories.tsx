// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"
import { ReactComponent as Instagram } from "@/assets/image/instagram.svg"

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

export const IconButton: Story = {
  render: () => (
    <Button>
      <Instagram className="fill-white" />
    </Button>
  ),
}
