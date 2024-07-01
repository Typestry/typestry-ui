import { Meta, StoryObj } from "@storybook/react"
import CardHeader from "./CardHeader"

const meta: Meta<typeof CardHeader> = {
  title: "Components/CardHeader",
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
  },
}

export default meta
type Story = StoryObj<typeof CardHeader>

export const Example: Story = {
  render: (args) => <CardHeader {...args} />,
}
