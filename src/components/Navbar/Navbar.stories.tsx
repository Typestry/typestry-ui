// Navbar.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { Navbar } from "./Navbar"

const navItems = [
  { id: "1", name: "One" },
  { id: "2", name: "Two" },
  { id: "3", name: "Three" },
]

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  args: {
    activeItem: navItems[0],
    navItems,
  },
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Example: Story = {
  render: (args) => <Navbar {...args} />,
}
