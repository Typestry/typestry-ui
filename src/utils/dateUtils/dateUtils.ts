import { format } from "date-fns"

interface FormatDate {
  date: Date | string | number
  stringFormat?: string
}

const formatDate = ({
  date,
  stringFormat = "MMM dd - h:mm aaa",
}: FormatDate) => {
  try {
    let parsedDate = new Date(date)

    if (typeof date !== "number" && typeof date !== "string") {
      parsedDate = date
    }

    return format(parsedDate, stringFormat)
  } catch (err) {
    console.error("An invalid date was passed as an argument for 'date'.")
    return null
  }
}

export const DateUtils = {
  formatDate,
}
