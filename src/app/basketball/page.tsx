import type { Metadata } from "next"

import Basketball from "./client"

export const metadata: Metadata = {
  title: "Fulcrum Shot",
  alternates: {
    canonical: "https://fulcrumtechnologies.ai/basketball"
  }
}

export default function Page() {
  return <Basketball />
}
