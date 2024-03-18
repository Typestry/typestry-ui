import { FallbackRender } from "@sentry/react"
import { FC, ComponentProps } from "react"
import { Button } from "../Button"

interface ErrorPageProps extends ComponentProps<FallbackRender> {}

export const ErrorPage: FC<ErrorPageProps> = ({ resetError }) => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 max-w-sm">
        <h6>Whoops, you weren't suppose to see this.</h6>
        <p>Maybe try reloading the page ¯\_(ツ)_/¯</p>
        <Button onClick={resetError}>Reload</Button>
      </div>
    </div>
  )
}
