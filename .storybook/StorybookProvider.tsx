import classNames from "classnames"
import { BandPageProvider } from "../src/providers/BandPageProvider"
import React, { FC } from "react"

export const StorybookProvider = (Story: FC) => {
  return (
    <BandPageProvider
      root={() => <Story />}
      bandPageConfig={{
        bandName: "A Band",
        description: "A really cool band",
        keywords: ["1", "2", "3"],
        mediaLinks: {
          apple: {
            alt: "Listen on Apple Music",
            icon: "../src/assets/apple.svg",
            title: "Apple Music",
            url: "",
          },
          spotify: {
            alt: "Listen on Spotify",
            icon: "../src/assets/spotify.svg",
            title: "Spotify",
            url: "",
          },
        },
        socialImage: "",
        theme: {
          bannerClassName: "capitalize",
          bannerTextClassName: "capitalize",
          linkClassName: (active) =>
            classNames("hover:text-fuchsia-300", {
              "text-fuchsia-300": active,
            }),
        },
      }}
      sections={[
        {
          id: "home",
          name: "Home",
          sectionName: "Home",
          component: () => <p>Hello</p>,
        },
        {
          id: "shows",
          name: "Shows",
          sectionName: "Shows",
          component: () => <p>Hello</p>,
        },
        {
          id: "contact",
          name: "Contact",
          sectionName: "Contact",
          component: () => <p>Hello</p>,
        },
      ]}
    />
  )
}
