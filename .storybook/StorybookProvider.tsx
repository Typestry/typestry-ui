import { BandPageProvider } from "../src/providers/BandPageProvider"
import React, { FC } from "react"
import { HelmetProvider } from "react-helmet-async"

export const StorybookProvider = (Story: FC) => {
  return (
    <HelmetProvider>
      <BandPageProvider
        root={() => <Story />}
        bandPageConfig={{
          bannerImageUrl: "",
          bandName: "A Band",
          description: "A really cool band",
          keywords: ["1", "2", "3"],
          mediaLinks: {
            facebook: {
              alt: "Like us on Facebook",
              title: "Facebook",
              url: "",
            },
            bandcamp: {
              alt: "Listen on Bandcamp",
              title: "Bandcamp",
              url: "",
            },
            instagram: {
              alt: "Follow us on Instagram",
              title: "Instagram",
              url: "",
            },
            apple: {
              alt: "Listen on Apple Music",
              title: "Apple Music",
              url: "",
            },
            spotify: {
              alt: "Listen on Spotify",
              title: "Spotify",
              url: "",
            },
          },
          socialImage: "",
        }}
        sections={[
          {
            id: "home",
            name: "Home",
            sectionName: "Home",
            type: "article",
            data: "",
            order: 0,
          },
          {
            id: "shows",
            name: "Shows",
            sectionName: "Shows",
            type: "show",
            data: [],
            order: 1,
          },
          {
            id: "contact",
            name: "Contact",
            sectionName: "Contact",
            type: "contact",
            data: {
              template_id: "",
              user_id: "",
              service_id: "",
            },
            order: 2,
          },
        ]}
      />
    </HelmetProvider>
  )
}
