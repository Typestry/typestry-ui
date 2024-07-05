import { Meta, StoryObj } from "@storybook/react"
import { Card } from "@/Card"
import { CardContent } from "@/CardContent"
import { CardActions } from "@/CardActions"
import { Button } from "@/Button"
import { CardHeader } from "@/CardHeader"
import { CardBody } from "@/CardBody"
import { CardMedia } from "@/CardMedia"
import { ComponentType } from "react"

const meta = {
  title: "Components/Card",
  component: Card,
  subcomponents: {
    CardContent: CardContent as ComponentType<unknown>,
    CardActions: CardActions as ComponentType<unknown>,
    Button: Button as ComponentType<unknown>,
    CardHeader: CardHeader as ComponentType<unknown>,
    CardBody: CardBody as ComponentType<unknown>,
    CardMedia: CardMedia as ComponentType<unknown>,
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia, tortor vel ultricies luctus, purus orci fringilla nunc, nec fermentum nunc felis nec sapien. Nullam sit amet enim nec justo ultrices ultricies. Nulla facilisi. Nullam ultricies, eros at condimentum tincidunt, mi felis tincidunt libero, nec tincidunt libero eros nec sapien. Nulla facilisi. Nullam ultricies, eros at condimentum tincidunt, mi felis tincidunt libero, nec tincidunt libero eros nec sapien. Nulla facilisi. Nullam ultricies, eros at condimentum tincidunt, mi felis tincidunt libero, nec tincidunt libero eros nec sapien. Nulla facilisi. Nullam ultricies, eros at condimentum tincidunt.",
    className: "border max-w-xl",
  },
}

export const Composed: Story = {
  render: (args) => (
    <Card {...args} className="w-full">
      <CardContent>
        <CardHeader title="Event" subtitle="Event Name" />
        <CardMedia src="https://placehold.co/600" />
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lacinia, tortor vel ultricies luctus, purus orci fringilla nunc, nec
          fermentum nunc felis nec sapien. Nullam sit amet enim nec justo
          ultrices ultricies. Nulla facilisi. Nullam ultricies, eros at
          condimentum tincidunt, mi felis tincidunt libero, nec tincidunt libero
          eros nec sapien. Nulla facilisi. Nullam ultricies, eros at condimentum
          tincidunt, mi felis tincidunt libero, nec tincidunt libero eros nec
          sapien. Nulla facilisi. Nullam ultricies, eros at condimentum
          tincidunt, mi felis tincidunt libero, nec tincidunt libero eros nec
          sapien. Nulla facilisi. Nullam ultricies, eros at condimentum
          tincidunt, mi felis tincidunt libero, nec tincidunt libero eros nec
          sapien.
        </CardBody>
        <CardActions>
          <Button>Tickets</Button>
          <Button>Directions</Button>
        </CardActions>
      </CardContent>
    </Card>
  ),
}
