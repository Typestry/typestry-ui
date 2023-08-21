// SocialContainer.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { SocialContainer } from "./SocialContainer"
import { SocialLink } from "../SocialLink"
import { socialData } from "../../constants/socialData"

const meta: Meta<typeof SocialContainer> = {
  component: SocialContainer,
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <>
        <SocialLink {...socialData["apple"]} />
        <SocialLink {...socialData["bandcamp"]} />
        <SocialLink {...socialData["instagram"]} />
        <SocialLink {...socialData["spotify"]} />
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof SocialContainer>

export const Example: Story = {
  render: (args) => <SocialContainer {...args} />,
}
