import Navbar from "@/components/Navbar"
import * as React from "react"
import SocialLinks from "@/components/SocialLinks"
import { QueryProvider } from "@/providers/QueryProvider"
import FirebaseAdmin from "@/services/FirebaseAdmin"
import Config from "@/types/Config"
import { Metadata } from "next"

import "../index.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <div>
            <Navbar />
            <main
              id="home"
              className="flex flex-col h-full w-full items-center px-4 lg:px-8 py-12 pb-[calc(72px+32px)] md:pb-[calc(78px+32px)]"
            >
              {children}
            </main>
            <footer className="fixed bottom-0 lg:top-0 flex justify-center left-0 right-0 lg:right-auto bg-[var(--background-color)] lg:bg-transparent lg:justify-start shadow-md shadow-gray-300 lg:shadow-none z-30">
              <SocialLinks />
            </footer>
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}

const getConfig = async () => {
  const admin = FirebaseAdmin.getInstance()
  const db = admin.getApp().firestore()
  const result = await db.collection("configs").get()
  const config = result.docs[0].data() as Config

  return config
}

export async function generateMetadata(): Promise<Metadata> {
  const config = await getConfig()

  return {
    title: config.bandName,
    description: config.description,
    keywords: config.keywords,
  }
}
