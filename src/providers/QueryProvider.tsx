"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC, PropsWithChildren, useMemo } from "react"

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = useMemo(() => new QueryClient(), [])

  return <QueryClientProvider {...{ client }}>{children}</QueryClientProvider>
}
