// ListShow.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"
import { Gallery } from "./Gallery"

const meta: Meta<typeof Gallery> = {
  component: Gallery,
}

export default meta
type Story = StoryObj<typeof Gallery>

export const WithData: Story = {
  render: () => (
    <Gallery
      images={Array.from(Array(5)).map(
        () =>
          "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true",
      )}
    />
  ),
}
