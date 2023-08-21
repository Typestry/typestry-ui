import { Show } from "../../types/Show"
import { DateUtils } from "../../utils/dateUtils/dateUtils"

interface ListShowProps {
  shows: Array<Show>
}

export const ListShow = ({ shows }: ListShowProps) => {
  return (
    <div className="bg-[rgb(51,51,51,0.8)] px-8 md:px-16 py-12 md:py-24 grid grid-flow-row gap-y-4">
      {shows.length ? (
        shows.map((show) => (
          <div key={show.date}>
            <div className="flex justify-between border-b-2 font-bold border-fuchsia-300 pb-1">
              <p>{DateUtils.formatDate({ date: show.date })}</p>
              <p>{show.city}</p>
            </div>
            <div className="grid grid-cols-3 pt-2">
              <p className="mr-auto">${show.price}</p>
              <p className="mx-auto">{show.description}</p>
              <p className="ml-auto">{show.venue}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="flex justify-center items-center">No Upcoming Shows</p>
      )}
    </div>
  )
}
