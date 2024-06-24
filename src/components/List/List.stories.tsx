import { Meta, StoryObj } from "@storybook/react"
import List from "./List"
import ListItem from "@/components/ListItem"

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
}

export default meta
type Story = StoryObj<typeof List>

export const Example: Story = {
  args: {
    children: (
      <>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
      </>
    ),
  },
}
