// ListShow.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { ListShow, ShowItem } from "./ListShow"
import { shows } from "./mocks/shows"
import { endOfYesterday } from "date-fns"

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

export const WithPastShows: Story = {
  render: () => (
    <ListShow shows={[{ ...shows[0], date: String(endOfYesterday()) }]} />
  ),
}

export const ShowItemExample: Story = {
  render: () => <ShowItem show={shows[0]} />,
}
