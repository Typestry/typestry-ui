import { Show } from "../../../types/Show"

export const shows: Show[] = [
  {
    city: "Kansas City, MO",
    date: "2023-09-22T24:00:00.000Z",
    description: "A description",
    price: 15,
    venue: "The Rhino",
    callToAction: {
      url: "https://google.com",
      label: "Tickets",
      altText: "Purchase tickets",
    },
  },
  {
    city: "Los Angeles, CA",
    date: "2023-09-22T24:00:00.000Z",
    description: "An exciting show",
    price: 20,
    venue: "The Music Hall",
    callToAction: {
      url: "https://google.com",
      label: "Tickets",
      altText: "Purchase tickets",
    },
  },
  {
    city: "New York, NY",
    date: "2023-09-22T24:00:00.000Z",
    description: "A night to remember",
    price: 25,
    venue: "Broadway Theater",
    callToAction: {
      url: "https://google.com",
      label: "Tickets",
      altText: "Purchase tickets",
    },
  },
]