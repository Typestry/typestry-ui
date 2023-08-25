import classNames from "classnames"
import { ComponentProps } from "react"
import { useBandPageContext } from "../../providers/BandPageProvider"

type InputProps = ComponentProps<"input">

interface TextFieldProps extends InputProps {
  "aria-label": string
  label: string
}

export const TextField = (props: TextFieldProps) => {
  const {
    bandPageConfig: { theme },
  } = useBandPageContext()

  return (
    <div className="group">
      <label
        htmlFor={props.name}
        className="block group-focus-within:font-bold mb-2 text-md text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        {props.label}
      </label>
      <input
        {...props}
        id={props.name}
        className={classNames(
          props.className,
          {
            "invalid:focus:border-b-red-900 invalid:border-b-red-900":
              props.value,
          },
          "border-b-2 outline-none required:rounded-none text-white border-t-0 border-l-0 border-r-0 border-[#222222] text-lg focus:ring-transparent transition-colors duration-500 focus:border-fuchsia-400 hover:border-fuchsia-400 block w-full p-4 bg-[#333333] disabled:opacity-50",
        )}
      />
    </div>
  )
}
