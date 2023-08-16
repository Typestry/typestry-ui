import { JSXElement } from "solid-js"

interface MainLayoutProps {
  children: JSXElement
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main class="flex flex-col h-full w-full items-center gap-8 p-4 md:p-8">
      {children}
    </main>
  )
}
