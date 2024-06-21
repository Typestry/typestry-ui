// ListShow.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import Section from "./Section"
import { endOfTomorrow } from "date-fns"

const meta: Meta<typeof Section> = {
  component: Section,
}

export default meta
type Story = StoryObj<typeof Section>

export const Article: Story = {
  args: {
    section: {
      data: "Carried By Bees is a new project by old friends.  Justin Klaas is a prolific singer/songwriter, multi-instrumentalist, producer/engineer and all-around DIY whiz kid from Kansas City who has seven solo albums to his name, as well as a string of collaboration and production credits.  John Benda is a drummer and songwriter in Lawrence, Kansas who has recorded and toured with an array of artists, including punk mainstays, Black Luck, and local darlings, Spencer Mackenzie Brown and Kat King.  The two met in college and formed a 15-years-long relationship of mutual musical back-scratching, but never endeavored to form a proper, collaborative band together.  Until now.They called the new project Carried By Bees (from a lyric by perennial favorites, The National), and set out to make a record that would push their individual musical skills to new heights while also leveraging their time-tested creative chemistry and friendship to make something that's the best of each of them.    On their debut album, _Bliss_, the band steers unflinchingly into a variety of musical styles, such as shoegaze (Engineers), new wave (Valleys and Peaks), and widescreen heartland rock&roll (Wolves).  They also drink thirstily from the pool of grand, turn of the century indie and alternative sounds that have been so influential to both band members (Today, I Can Fight, Every Time I Tried).  The tie that binds these songs together into a cohesive whole (other than the fact that Klaas and Benda recorded everything on the album by themselves on a two-channel interface in Klaas' bedroom) is the thematic idea of 'bliss' as a single word meant to stand in for the broad, complex nature of marriage and parenthood in all its triumphs and high water marks as well as its failings, missteps, arguments, and sleepless nights.  _Bliss_ is now available on all streaming platforms, and Carried By Bees is currently booking in the Kansas City area.  Contact the band for booking and press.",
      id: "1",
      sectionName: "Article Section",
      type: "article",
      name: "Article",
      order: 1,
    },
  },
}

export const Contact: Story = {
  args: {
    section: {
      data: {
        service_id: "service_id",
        template_id: "template_id",
        user_id: "user_id",
      },
      id: "2",
      sectionName: "Contact Section",
      type: "contact",
      name: "Contact",
      order: 2,
    },
  },
}

export const Gallery: Story = {
  args: {
    section: {
      data: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      id: "3",
      sectionName: "Gallery Section",
      type: "gallery",
      name: "Gallery",
      order: 3,
    },
  },
}

export const ListEvent: Story = {
  args: {
    section: {
      data: [
        {
          city: "Kansas City",
          date: endOfTomorrow().toISOString(),
          venue: "The Rino",
          address: "Kansas City, MO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          eventImage: "https://via.placeholder.com/1000",
          price: "$10",
          callToAction: {
            altText: "Buy Tickets",
            url: "https://www.therinokc.com/",
            label: "Buy Tickets",
          },
        },
      ],
      id: "4",
      sectionName: "List Show Section",
      type: "event",
      name: "List Show",
      order: 4,
    },
  },
}
