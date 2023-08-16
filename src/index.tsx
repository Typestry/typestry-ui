import { render } from "solid-js/web"
import { App } from "./components/App"
import "./index.css"
import "flowbite"

render(() => <App />, document.getElementById("app") as HTMLElement)
