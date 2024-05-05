import * as Sentry from "@sentry/react"

export const SentryConfig: Sentry.BrowserOptions = {
  environment: process.env.NODE_ENV,
  dsn: "https://562e3239b8df3858f33db876c0eb7e23@o4506929340481536.ingest.us.sentry.io/4506929341726720",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: [
    "localhost",
    /^https:\/\/(www\.meansmotive\.com|admin\.meansmotive\.com)$/,
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
}
