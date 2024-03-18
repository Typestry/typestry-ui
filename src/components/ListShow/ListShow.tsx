import { ComponentProps, useMemo } from "react"
import { Show } from "../../types/Show"
import { DateUtils } from "../../utils/dateUtils/dateUtils"
import { Button } from "../Button"
import classNames from "classnames"
import { useGetDownloadUrls } from "../../hooks/useGetDownloadUrls"

interface ListShowProps extends ComponentProps<"div"> {
  shows: Array<Show>
}

export const ListShow = ({ shows, ...rest }: ListShowProps) => {
  const upcomingShows = useMemo(() => shows.filter(removePastShows), [shows])
  const hasUpcomingShows = upcomingShows.length > 0

  return (
    <div
      {...rest}
      className={classNames("grid grid-flow-row gap-y-24", rest.className)}
    >
      {hasUpcomingShows ? (
        upcomingShows.map((show) => <ShowItem key={show.date} show={show} />)
      ) : (
        <p className="flex justify-center items-center">No Upcoming Shows</p>
      )}
    </div>
  )
}

export const ShowItem = ({ show }: { show: Show }) => {
  const { data: eventImageUrl } = useGetDownloadUrls({
    paths: [show.eventImage ?? ""],
  })

  return (
    <div
      className={classNames("grid gap-4 items-center", {
        "md:grid-cols-2": Boolean(show.eventImage),
      })}
    >
      {eventImageUrl?.[0] && (
        <div className="h-full">
          <img
            src={eventImageUrl[0]}
            alt={`Event image for ${show.city}`}
            className="h-full"
          />
        </div>
      )}
      <div className="h-full flex flex-col gap-y-8">
        <div>
          <div className="flex justify-between border-fuchsia-300 font-bold pb-3">
            <p>{DateUtils.formatDate({ date: show.date })}</p>
            <p>{show.city}</p>
          </div>
          <div className="divider-light" />
        </div>

        <p className="font-bold">${show.price}</p>
        <p>{show.description}</p>
        <p className="font-bold">{show.venue}</p>
        <div className="flex flex-1 gap-4">
          <a
            className="mt-auto w-full"
            target="_blank"
            href={show.callToAction.url}
            aria-label={show.callToAction.altText}
          >
            <Button>{show.callToAction.label}</Button>
          </a>
          {show.address && (
            <a
              className="mt-auto w-full"
              target="_blank"
              href={`https://www.google.com/maps/place/${show.address}`}
              aria-label={show.callToAction.altText}
            >
              <Button>Directions</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const removePastShows = (show: Show) => {
  return !DateUtils.isPast(show.date)
}
