// ListShow.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { Gallery } from "@/Gallery"

const meta: Meta<typeof Gallery> = {
  component: Gallery,
}

export default meta
type Story = StoryObj<typeof Gallery>

export const Example: Story = {
  args: {
    images: [
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/400",
    ],
    slotProps: {
      image: {
        className: "border-4 border-white",
      },
    },
  },
}
