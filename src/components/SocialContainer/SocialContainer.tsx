import { ReactNode } from "react"

interface SocialContainerProps {
  children: ReactNode
}

export const SocialContainer = ({ children }: SocialContainerProps) => {
  return <div className="flex gap-x-4 md:gap-x-8 h-full">{children}</div>
}
