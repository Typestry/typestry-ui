import ReactDOM from "react-dom/client"
import React from "react"
import { App } from "./components/App"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"
import * as Sentry from "@sentry/react"
import { ErrorPage } from "./components/ErrorPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import FirebaseService from "./services/FirebaseClient"
import { SentryConfig } from "../sentry.config"

Sentry.init(SentryConfig)

FirebaseService.init({
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
  functionsUrl: import.meta.env.VITE_APP_FUNCTIONS_URL,
})

const client = new QueryClient()

const app = (
  <HelmetProvider>
    <React.StrictMode>
      <QueryClientProvider {...{ client }}>
        <Sentry.ErrorBoundary fallback={ErrorPage}>
          <App />
        </Sentry.ErrorBoundary>
      </QueryClientProvider>
    </React.StrictMode>
  </HelmetProvider>
)

ReactDOM.createRoot(document.getElementById("root")!).render(app)
