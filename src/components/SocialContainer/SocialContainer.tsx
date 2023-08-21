import { ReactNode } from "react"

interface SocialContainerProps {
  children: ReactNode
}

export const SocialContainer = ({ children }: SocialContainerProps) => {
  return (
    <section className="grid grid-flow-col gap-x-8 grid-cols-4 h-full">
      {children}
    </section>
  )
}
