"use client"

import SocialLink from "@/components/SocialLink"
import Config from "@/types/Config"
import classNames from "classnames"
import { ComponentPropsWithoutRef } from "react"

interface SocialLinksProps extends Pick<Config, "mediaLinks"> {
  slotProps?: {
    root?: ComponentPropsWithoutRef<"div">
    link?: ComponentPropsWithoutRef<typeof SocialLink>
  }
}

const SocialLinks = ({ mediaLinks, slotProps }: SocialLinksProps) => {
  return (
    <div
      {...slotProps?.root}
      className={classNames(
        "flex lg:flex-col gap-12 p-6",
        slotProps?.root?.className,
      )}
    >
      {Object.entries(mediaLinks)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([type, datum]) => (
          <SocialLink
            {...slotProps?.link}
            key={datum.title}
            slotProps={{
              ...slotProps?.link?.slotProps,
              icon: { className: "z-50", ...slotProps?.link?.slotProps?.icon },
            }}
            {...{ ...datum, type: type as keyof Config["mediaLinks"] }}
          />
        ))}
    </div>
  )
}

export default SocialLinks
