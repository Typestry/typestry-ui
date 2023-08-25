import { useMemo } from "react"
import { Show } from "../../types/Show"
import { DateUtils } from "../../utils/dateUtils/dateUtils"
import { Button } from "../Button"
import { useBandPageContext } from "../../providers/BandPageProvider"

interface ListShowProps {
  shows: Array<Show>
}

export const ListShow = ({ shows }: ListShowProps) => {
  const {
    bandPageConfig: { theme },
  } = useBandPageContext()
  const filteredShows = useMemo(() => shows.filter(removePastShows), [shows])

  return (
    <div className="bg-[rgb(51,51,51,0.8)] px-8 md:px-16 py-12 md:py-24 grid grid-flow-row gap-y-8">
      {filteredShows.length ? (
        filteredShows.map((show) => (
          <div key={show.date}>
            <div
              style={{
                borderColor: theme?.secondaryColor
                  ? theme.secondaryColor
                  : "white",
              }}
              className="flex justify-between border-b-2 font-bold pb-1"
            >
              <p>{DateUtils.formatDate({ date: show.date })}</p>
              <p>{show.city}</p>
            </div>
            <div className="grid grid-cols-1 gap-y-2 pt-2 items-center">
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
