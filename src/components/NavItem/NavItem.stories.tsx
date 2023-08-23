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

export const Example: Story = {
  render: (args) => <NavItem {...args} name="Example" />,
}
