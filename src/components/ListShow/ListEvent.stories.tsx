// ListShow.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import ListEvent, { ShowItem } from "./ListEvent"
import { events } from "./mocks/events"
import { endOfYesterday } from "date-fns"

const meta: Meta<typeof ListEvent> = {
  component: ListEvent,
}

export default meta
type Story = StoryObj<typeof ListEvent>

export const WithData: Story = {
  render: () => <ListEvent events={events} />,
}

export const WithoutData: Story = {
  render: () => <ListEvent events={[]} />,
}

export const WithPastShows: Story = {
  render: () => (
    <ListEvent events={[{ ...events[0], date: String(endOfYesterday()) }]} />
  ),
}

export const ShowItemExample: Story = {
  render: () => <ShowItem show={events[0]} />,
}
