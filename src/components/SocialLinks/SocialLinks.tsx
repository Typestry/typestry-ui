"use client"

import raise from "@/utils/raise"
import SocialLink from "@/components/SocialLink"

import useConfig from "@/hooks/useConfig"
import Config from "@/types/Config"

const SocialLinks = () => {
  const { data, status } = useConfig()

  switch (status) {
    case "pending":
      return null
    case "error":
      return raise("Error loading config")
  }

  return (
    <div className="flex lg:flex-col gap-12 p-6">
      {Object.entries(data.mediaLinks)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([type, datum]) => (
          <SocialLink
            key={datum.title}
            className="z-50"
            {...{ ...datum, type: type as keyof Config["mediaLinks"] }}
          />
        ))}
    </div>
  )
}

export default SocialLinks
