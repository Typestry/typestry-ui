"use client"

import React from "react"
import dynamic from "next/dynamic"
import { FirebaseClient } from "../../services/FirebaseClient"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const Main = dynamic(() => import("./Main"), { ssr: false })

FirebaseClient.getInstance()

const client = new QueryClient()

export function ClientOnly() {
  return (
    <QueryClientProvider {...{ client }}>
      <Main />
    </QueryClientProvider>
  )
}
