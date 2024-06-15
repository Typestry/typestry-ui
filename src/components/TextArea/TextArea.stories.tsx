// TextArea.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import TextArea from "./TextArea"

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  args: {
    label: "First Name",
  },
  argTypes: {
    onChange: { description: "onChange" },
    onBlur: { description: "onBlur" },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Example: Story = {
  render: (args) => <TextArea {...args} />,
}
