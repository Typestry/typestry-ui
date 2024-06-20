// ContactForm.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import ContactForm from "./ContactForm"

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
}

export default meta
type Story = StoryObj<typeof ContactForm>

export const Example: Story = {
  render: () => <ContactForm template_id="" service_id="" user_id="" />,
}
