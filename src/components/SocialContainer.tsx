import { JSXElement } from "solid-js"

interface SocialContainerProps {
  children: JSXElement
}

export const SocialContainer = ({ children }: SocialContainerProps) => {
  return (
    <section class="grid grid-flow-col gap-x-8 grid-cols-4 h-full">
      {children}
    </section>
  )
}
