import { Meta, StoryObj } from "@storybook/react"
import { CardMedia } from "@/CardMedia"

const meta: Meta<typeof CardMedia> = {
  title: "Components/CardMedia",
  component: CardMedia,
  argTypes: {
    src: {
      description: "The image source.",
      control: { type: "text" },
    },
    alt: {
      description: "The alt text for the image.",
      control: { type: "text" },
    },
  },
  args: {
    src: "https://via.placeholder.com/1200",
    alt: "Placeholder",
  },
}

export default meta
type Story = StoryObj<typeof CardMedia>

export const Example: Story = {
  render: (args) => <CardMedia {...args} />,
}
