// TextField.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { TextField } from "./TextField"

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {
    label: "First Name",
  },
  argTypes: {
    onChange: { description: "onChange" },
    onBlur: { description: "onBlur" },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Example: Story = {
  render: (args) => <TextField {...args} />,
}
