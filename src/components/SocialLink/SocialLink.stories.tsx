// SocialLink.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { SocialLink } from "./SocialLink"
import { socialData } from "../../constants/socialData"

const meta: Meta<typeof SocialLink> = {
  component: SocialLink,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof SocialLink>

export const Spotify: Story = {
  render: () => <SocialLink {...socialData["spotify"]} />,
}

export const Apple: Story = {
  render: () => <SocialLink {...socialData["apple"]} />,
}

export const Instagram: Story = {
  render: () => <SocialLink {...socialData["instagram"]} />,
}

export const Bandcamp: Story = {
  render: () => <SocialLink {...socialData["bandcamp"]} />,
}
