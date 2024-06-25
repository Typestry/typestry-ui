import { ComponentPropsWithoutRef, useMemo } from "react"
import Event from "@/types/Event"
import { isPast } from "@/utils/dateUtils"
import Button from "@/components/Button"
import Card from "@/components/Card"
import CardActions from "@/components/CardActions"
import CardContent from "../CardContent"
import { CardHeader } from "../CardHeader/CardHeader"
import CardBody from "../CardBody"
import CardMedia from "../CardMedia"

export interface ListEventProps {
  events: Array<Event>
  slotProps?: {
    root?: ComponentPropsWithoutRef<"div">
  }
}

const ListEvent = ({ events = [], slotProps }: ListEventProps) => {
  const upcomingShows = useMemo(() => events.filter(removePastShows), [events])
  const hasUpcomingShows = upcomingShows.length > 0

  return (
    <div {...slotProps?.root}>
      {hasUpcomingShows ? (
        upcomingShows.map((event) => (
          <EventItem key={event.date} event={event} />
        ))
      ) : (
        <p className="flex justify-center items-center">No Upcoming Shows</p>
      )}
    </div>
  )
}

export const EventItem = ({ event }: { event: Event }) => {
  return (
    <Card>
      <CardContent>
        <CardHeader
          title="Carried by Bees w/ Means Motive"
          className="md:flex justify-between"
          subtitle="Kansas City, MO"
        />
        {event.eventImage && <CardMedia src={event.eventImage} />}
        <CardBody>{event.description}</CardBody>
        <CardActions>
          {event.callToAction && (
            <Button href={event.callToAction.url} target="_blank">
              {event.callToAction.label}
            </Button>
          )}
          {event.address && (
            <Button
              href={`https://www.google.com/maps/place/${event.address}`}
              target="_blank"
            >
              Directions
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  )
}

const removePastShows = (show: Event) => !(show.date && isPast(show.date))

export default ListEvent