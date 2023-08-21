// ListShow.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { ListShow } from "./ListShow"
import { shows } from "./mocks/shows"

const meta: Meta<typeof ListShow> = {
  component: ListShow,
}

export default meta
type Story = StoryObj<typeof ListShow>

export const WithData: Story = {
  render: () => <ListShow shows={shows} />,
}

export const WithoutData: Story = {
  render: () => <ListShow shows={[]} />,
}
