import ReactDOM from "react-dom/client"
import React from "react"
import { App } from "./components/App"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"
import * as Sentry from "@sentry/react"
import { ErrorPage } from "./components/ErrorPage"
import { SentryConfig } from "../sentry.config"

Sentry.init(SentryConfig)

const app = (
  <HelmetProvider>
    <React.StrictMode>
      <Sentry.ErrorBoundary fallback={ErrorPage}>
        <App />
      </Sentry.ErrorBoundary>
    </React.StrictMode>
  </HelmetProvider>
)

ReactDOM.createRoot(document.getElementById("root")!).render(app)
