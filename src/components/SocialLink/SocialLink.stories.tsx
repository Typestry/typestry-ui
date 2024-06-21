// ListShow.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import SocialLink, { SocialLinkIcons } from "./SocialLink"

const meta: Meta<typeof SocialLink> = {
  component: SocialLink,
  argTypes: {
    type: {
      options: Object.keys(SocialLinkIcons),
      control: { type: "select" },
    },
  },
}

export default meta
type Story = StoryObj<typeof SocialLink>

export const Example: Story = {
  args: {
    url: "https://google.com",
    alt: "Google",
    type: "apple",
  },
}
