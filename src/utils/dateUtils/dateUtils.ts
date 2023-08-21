import * as DateFns from "date-fns"

type DateArg = Date | string | number

interface FormatDate {
  date: DateArg
  stringFormat?: string
}

const DATE_ERROR_MESSAGE =
  "An invalid date was passed as an argument for 'date'."

const parseDate = (date: string | number | Date) => {
  let parsedDate = new Date(date)

  if (typeof date !== "number" && typeof date !== "string") {
    parsedDate = date
  }

  return parsedDate
}

const formatDate = ({
  date,
  stringFormat = "MMM dd - h:mm aaa",
}: FormatDate) => {
  try {
    const parsedDate = parseDate(date)
    return DateFns.format(parsedDate, stringFormat)
  } catch (err) {
    console.error(DATE_ERROR_MESSAGE)
    return null
  }
}

const isPast = (date: DateArg): boolean => {
  try {
    const parsedDate = parseDate(date)
    return DateFns.isPast(parsedDate)
  } catch (err) {
    console.error(DATE_ERROR_MESSAGE)
    return false
  }
}

export const DateUtils = {
  formatDate,
  isPast,
}
