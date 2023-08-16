interface TooltipProps {
  title: string
  children: HTMLElement
}

export const createTooltip = ({ title, children }: TooltipProps) => {
  const tooltip = document.createElement("div")

  tooltip.id = `tooltip-default-${title}`
  tooltip.role = "tooltip"
  tooltip.className =
    "absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
  tooltip.textContent = title

  return children.appendChild(tooltip)
}
