import ReactDOM from "react-dom/client"
import React from "react"
import { App } from "./components/App"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"

const app = (
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
)

ReactDOM.createRoot(document.getElementById("root")!).render(app)
