import { createHome } from "./pages/home"
import "./index.css"

const app = document.querySelector<HTMLDivElement>("#app") as HTMLDivElement

const home = createHome()

app.appendChild(home)
