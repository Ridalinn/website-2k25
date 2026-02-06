import type { Metadata } from "next"

import { Contact } from "@/components/layout/contact"

import { Brands } from "./brands"
import { Capabilities } from "./capabilities"
import { FeaturedProjects } from "./featured-projects"
import { Intro } from "./intro"

export const metadata: Metadata = {
  title: {
    absolute: "Fulcrum Technologies | Precision AI for Collision Repair"
  },
  alternates: {
    canonical: "https://fulcrumtechnologies.ai"
  }
}

const Homepage = () => {
  return (
    <div className="flex flex-col gap-18 lg:gap-32">
      <Intro />
      <Brands />
      <FeaturedProjects />
      <Capabilities />
      <Contact />
    </div>
  )
}

export default Homepage
