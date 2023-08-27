// ContactForm.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { ContactForm } from "./ContactForm"

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
  decorators: [],
}

export default meta
type Story = StoryObj<typeof ContactForm>

export const Example: Story = {
  render: (args) => <ContactForm {...args} />,
}
