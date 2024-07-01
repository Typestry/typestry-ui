import { Meta, StoryObj } from "@storybook/react"
import CardBody from "./CardBody"

const meta: Meta = {
  title: "Components/CardBody",
  component: CardBody,
  args: {
    children: "This is the body of the card.",
  },
}

export default meta
type Story = StoryObj<typeof CardBody>

export const Example: Story = {
  render: (args) => <CardBody {...args} />,
}
