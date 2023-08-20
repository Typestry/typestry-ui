interface TooltipProps {
  id: string
  title: string
}

export const Tooltip = ({ title, id }: TooltipProps) => {
  return (
    <div
      id={id}
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-[#555555] rounded-lg shadow-sm opacity-0 tooltip"
    >
      {title}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  )
}
