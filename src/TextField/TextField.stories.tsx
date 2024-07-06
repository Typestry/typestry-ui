// TextField.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { TextField } from "@/TextField"
import { useState } from "react"

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {
    name: "firstName",
    label: "First Name",
  },
  argTypes: {
    onChange: { description: "onChange" },
    onBlur: { description: "onBlur" },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const ExampleControlled: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState("")
      return (
        <TextField
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )
    }
    return <Controlled />
  },
}

export const Error: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    error: true,
    helperText: "This is an error message",
  },
}
