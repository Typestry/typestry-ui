import { Meta, StoryObj } from "@storybook/react"
import { ErrorPage } from "."

const meta: Meta<typeof ErrorPage> = {
  title: "components/ErrorPage",
  component: ErrorPage,
}

export default meta
type Story = StoryObj<typeof ErrorPage>

export const Example: Story = {
  render: () => (
    <ErrorPage
      componentStack=""
      error={new Error()}
      eventId="123"
      resetError={() => null}
    />
  ),
}
