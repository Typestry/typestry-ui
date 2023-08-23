import * as DateFns from "date-fns"
import { Timestamp } from "firebase/firestore"

type DateArg = Date | string | number

interface FormatDate {
  date: DateArg
  stringFormat?: string
}

const DATE_ERROR_MESSAGE =
  "An invalid date was passed as an argument for 'date'."

const parseDate = (date: DateArg) => {
  let parsedDate: Date

  if (date instanceof Timestamp) {
    parsedDate = parseTimestamp(date)
  } else if (typeof date !== "number" && typeof date !== "string") {
    parsedDate = date
  } else {
    parsedDate = new Date(date)
  }

  return parsedDate
}

const parseTimestamp = (timestamp: Timestamp) => {
  return timestamp.toDate()
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
