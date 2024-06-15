import * as DateFns from "date-fns"
import { Timestamp } from "firebase/firestore"

export type DateArg = Date | string | number

export interface FormatDate {
  date: DateArg
  stringFormat?: string
  fallback?: string
}

export type TimestampLike = { _seconds: number; _nanoseconds: number }

export const DATE_ERROR_MESSAGE =
  "An invalid date was passed as an argument for 'date'."

export const isTimeStampLike = (date: unknown) => {
  if (!date) return false

  if (typeof date !== "object") return false

  if ("_seconds" in date && "_nanoseconds" in date) return true

  return false
}

export const isTimeStamp = (
  date: unknown,
): date is Timestamp | TimestampLike => {
  return date instanceof Timestamp || isTimeStampLike(date)
}

export const parseDate = (date: DateArg) => {
  let parsedDate: Date

  if (isTimeStamp(date)) {
    parsedDate = parseTimestamp(date)
  } else if (typeof date !== "number" && typeof date !== "string") {
    parsedDate = date
  } else {
    parsedDate = new Date(date)
  }

  return parsedDate
}

export const parseTimestamp = (timestamp: Timestamp | TimestampLike) => {
  if ("toDate" in timestamp) {
    return timestamp.toDate()
  } else {
    return new Date(
      timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000,
    )
  }
}

export const formatDate = ({
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

export const isPast = (date: DateArg): boolean => {
  try {
    const parsedDate = parseDate(date)
    return DateFns.isPast(parsedDate)
  } catch (err) {
    console.error(DATE_ERROR_MESSAGE)
    return false
  }
}
