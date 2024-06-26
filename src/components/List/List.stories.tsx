import { Meta, StoryObj } from "@storybook/react"
import List from "./List"
import ListItem from "@/components/ListItem"
import ListItemText from "@/components/ListItemText"
import { ArrowUpRight, Calendar } from "react-feather"

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
}

export default meta
type Story = StoryObj<typeof List>

export const Example: Story = {
  render: () => (
    <List className="color-white">
      <ListItem>
        <Calendar />
        <ListItemText>Kansas City, MO</ListItemText>
        <ArrowUpRight />
      </ListItem>
      <ListItem>
        <Calendar />
        <ListItemText>St. Louis, MO</ListItemText>
        <ArrowUpRight />
      </ListItem>
      <ListItem>
        <Calendar />
        <ListItemText>Chicago, IL</ListItemText>
        <ArrowUpRight />
      </ListItem>
    </List>
  ),
}
