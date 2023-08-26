import { BandPageProvider } from "../src/providers/BandPageProvider"
import React, { FC } from "react"

export const StorybookProvider = (Story: FC) => {
  return (
    <BandPageProvider
      bandPageConfig={{
        bandName: "A Band",
        description: "A really cool band",
        keywords: ["1", "2", "3"],
        mediaLinks: {},
        socialImage: "",
        theme: {
          bannerClassName: "bg-white",
        },
      }}
      sections={[
        {
          id: "home",
          name: "home",
          sectionName: "Home",
          component: () => <p>Hello</p>,
        },
      ]}
    >
      <Story />
    </BandPageProvider>
  )
}
