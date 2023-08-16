import { JSXElement } from "solid-js"

interface TooltipProps {
  id: string
  title: string
}

export const Tooltip = ({ title, id }: TooltipProps) => {
  return (
    <div
      id={id}
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      {title}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  )
}
