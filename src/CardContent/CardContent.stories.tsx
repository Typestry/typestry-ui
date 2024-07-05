import { Meta, StoryObj } from "@storybook/react"
import CardContent from "@/CardContent"
import Typography from "@/Typography"

const meta: Meta<typeof CardContent> = {
  title: "components/CardContent",
  component: CardContent,
}

export default meta
type Story = StoryObj<typeof CardContent>

export const Example: Story = {
  args: {
    children: <Typography>Card Content</Typography>,
  },
}
