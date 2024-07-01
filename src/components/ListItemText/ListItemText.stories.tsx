import { Meta, StoryObj } from "@storybook/react"
import ListItemText from "./ListItemText"

const meta: Meta<typeof ListItemText> = {
  title: "Components/ListItemText",
  component: ListItemText,
}

export default meta
type Story = StoryObj<typeof ListItemText>

export const Example: Story = {
  args: {
    children: "List Typography",
  },
}
