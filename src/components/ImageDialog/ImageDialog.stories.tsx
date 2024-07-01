import { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ImageDialog from "./ImageDialog"

const meta: Meta<typeof ImageDialog> = {
  title: "Components/ImageDialog",
  component: ImageDialog,
}

export default meta
type Story = StoryObj<typeof ImageDialog>

export const Example: Story = {
  args: {
    imgSrc: "https://via.placeholder.com/800x600",
    isOpen: true,
    onClose: action("onClose"),
    onChange: action("onChange"),
  },
}
