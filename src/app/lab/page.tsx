import type { Metadata } from "next"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { LabClient } from "./client"

export const metadata: Metadata = {
  title: "Lab",
  alternates: {
    canonical: "https://fulcrumtechnologies.ai/lab"
  }
}

const Laboratory = async () => {
  const headersList = await headers()
  const userAgent = headersList.get("user-agent") || ""

  const isMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(userAgent)

  if (isMobile) {
    redirect("/")
  }

  return <LabClient />
}

export default Laboratory
