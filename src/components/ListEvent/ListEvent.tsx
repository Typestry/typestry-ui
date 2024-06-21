import { ComponentProps, useMemo } from "react"
import Event from "@/types/Event"
import { formatDate, isPast } from "@/utils/dateUtils"
import Button from "@/components/Button"
import classNames from "classnames"

export interface ListEventProps {
  events: Array<Event>
  slotProps?: {
    root?: ComponentProps<"div">
  }
}

const ListEvent = ({ events = [], slotProps }: ListEventProps) => {
  const upcomingShows = useMemo(() => events.filter(removePastShows), [events])
  const hasUpcomingShows = upcomingShows.length > 0

  return (
    <div
      {...slotProps?.root}
      className={classNames(
        "grid grid-flow-row gap-y-24",
        slotProps?.root?.className,
      )}
    >
      {hasUpcomingShows ? (
        upcomingShows.map((show) => <ShowItem key={show.date} show={show} />)
      ) : (
        <p className="flex justify-center items-center">No Upcoming Shows</p>
      )}
    </div>
  )
}

export const ShowItem = ({ show }: { show: Event }) => {
  return (
    <div
      className={classNames("grid gap-4 items-center", {
        "md:grid-cols-2": Boolean(show.eventImage),
      })}
    >
      {show.eventImage && (
        <img
          src={show.eventImage}
          alt={`Event image for ${show.city}`}
          className="object-contain"
        />
      )}
      <div className="flex flex-col gap-y-8 mb-auto">
        <div>
          <div className="flex justify-between border-fuchsia-300 font-bold pb-3">
            <p>{show.date ? formatDate({ date: show.date }) : "TBA"}</p>
            <p>{show.city}</p>
          </div>
          <div className="divider-light" />
        </div>
        {show.price && <p className="font-bold">{show.price}</p>}
        {show.description && <p>{show.description}</p>}
        <p className="font-bold">{show.venue}</p>
        <div className="flex flex-1 gap-4">
          {show.callToAction && (
            <a
              className="mt-auto w-full"
              target="_blank"
              href={show.callToAction.url}
              aria-label={show.callToAction.altText}
            >
              <Button>{show.callToAction.label}</Button>
            </a>
          )}
          {show.address && (
            <a
              className="mt-auto w-full"
              target="_blank"
              href={`https://www.google.com/maps/place/${show.address}`}
            >
              <Button>Directions</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const removePastShows = (show: Event) => !(show.date && isPast(show.date))

export default ListEvent
