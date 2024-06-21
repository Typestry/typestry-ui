// ListShow.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import ListEvent from "./ListEvent"
import { events } from "./mocks/events"
import { endOfYesterday } from "date-fns"

const meta: Meta<typeof ListEvent> = {
  component: ListEvent,
}

export default meta
type Story = StoryObj<typeof ListEvent>

export const WithData: Story = {
  args: {
    events,
  },
}

export const WithoutData: Story = {
  args: {
    events: [],
  },
}

export const WithPastShows: Story = {
  args: { events: [{ ...events[0], date: String(endOfYesterday()) }] },
}
