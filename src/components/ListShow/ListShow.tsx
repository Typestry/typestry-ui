import { ComponentProps, useMemo } from "react"
import { Show } from "../../types/Show"
import { DateUtils } from "../../utils/dateUtils/dateUtils"
import { Button } from "../Button"
import classNames from "classnames"

interface ListShowProps extends ComponentProps<"div"> {
  shows: Array<Show>
}

export const ListShow = ({ shows, ...rest }: ListShowProps) => {
  const filteredShows = useMemo(() => shows.filter(removePastShows), [shows])

  return (
    <div
      {...rest}
      className={classNames("grid grid-flow-row gap-y-24", rest.className)}
    >
      {filteredShows.length ? (
        filteredShows.map((show) => (
          <div key={show.date}>
            <div className="flex justify-between border-b-2 border-fuchsia-300 font-bold pb-3">
              <p>{DateUtils.formatDate({ date: show.date })}</p>
              <p>{show.city}</p>
            </div>
            <div className="grid grid-cols-1 gap-y-8 pt-8 items-center">
              <p className="font-bold">${show.price}</p>
              <p>{show.description}</p>
              <p className="font-bold">{show.venue}</p>
              <a
                target="_blank"
                href={show.callToAction.url}
                aria-label={show.callToAction.altText}
              >
                <Button>{show.callToAction.label}</Button>
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="flex justify-center items-center">No Upcoming Shows</p>
      )}
    </div>
  )
}

const removePastShows = (show: Show) => {
  return !DateUtils.isPast(show.date)
}
