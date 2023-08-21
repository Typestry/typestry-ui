// NavItem.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { NavItem } from "./NavItem"

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  args: {
    id: "1",
  },
}

export default meta
type Story = StoryObj<typeof NavItem>

export const Inactive: Story = {
  render: (args) => <NavItem {...args} name="Inactive" />,
}

export const Active: Story = {
  render: (args) => <NavItem {...args} name="Active" active />,
}
