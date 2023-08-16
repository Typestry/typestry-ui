interface SocialContainerProps {
  children: HTMLElement
}

export const createSocialContainer = ({ children }: SocialContainerProps) => {
  const container = document.createElement("section")

  container.ariaLabel = "social media and music links"
  container.id = "social"
  container.className = "grid grid-flow-col gap-x-8 grid-cols-4 h-full"
  container.appendChild(children)
}
