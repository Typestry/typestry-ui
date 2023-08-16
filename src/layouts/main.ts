interface MainLayoutProps {
  children: HTMLElement
}

export const createMainLayout = ({ children }: MainLayoutProps) => {
  const layout = document.createElement("main")

  layout.className = "flex flex-col h-full w-full items-center gap-8 p-4 md:p-8"
  layout.appendChild(children)

  return layout
}
