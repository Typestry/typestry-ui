import spinners from "cli-spinners"
import logUpdate from "log-update"

/**
 * A function that logs a message associate with an async operation.
 * This function returns a timer that should be cleared when the async operation is done.
 */
export const asyncLog = (message: string): NodeJS.Timeout => {
  let index = 0
  const { frames, interval } = spinners.dots

  return setInterval(
    () => logUpdate(frames[index++ % frames.length] + " " + message),
    interval,
  )
}
