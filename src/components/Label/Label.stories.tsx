import { Meta, StoryObj } from "@storybook/react"
import Label from "./Label"

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
}

export default meta
type Story = StoryObj<typeof Label>

export const Example: Story = {
  args: {
    children: "Label",
    id: "label",
  },
}
