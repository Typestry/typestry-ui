import { Meta, StoryObj } from "@storybook/react"
import HelperText from "."

const meta: Meta<typeof HelperText> = {
  title: "Components/HelperText",
  component: HelperText,
}

export default meta
type Story = StoryObj<typeof HelperText>

export const Example: Story = {
  args: {
    children: "This is a helper text",
  },
}
