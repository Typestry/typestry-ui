import { Meta, StoryObj } from "@storybook/react"
import CardActions from "./CardActions"
import Button from "@/Button"

const meta: Meta = {
  title: "Components/CardActions",
  component: CardActions,
  argTypes: {
    children: { description: "The content of the card actions." },
    className: {
      description: "The class name for the card actions.",
      control: { type: "text" },
    },
  },
  args: {
    children: (
      <>
        <Button>Tickets</Button>
        <Button>Directions</Button>
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof CardActions>

export const Example: Story = {
  render: (args) => <CardActions {...args} />,
}
