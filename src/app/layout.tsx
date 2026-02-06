import "@/styles/globals.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

import { AppHooks } from "@/components/app-hooks-init"
import { AssetsProvider } from "@/components/assets-provider"
import { fetchAssets } from "@/components/assets-provider/fetch-assets"
import { Contact } from "@/components/contact/contact"
import { InspectableProvider } from "@/components/inspectables/context"
import { ContentWrapper } from "@/components/layout/content-wrapper"
import { Navbar } from "@/components/layout/navbar"
import { NavigationHandler } from "@/components/navigation-handler"
import { PostHogProvider } from "@/components/posthog/posthog-provider"
import { Transitions } from "@/components/transitions"
import { HtmlTunnelOut } from "@/components/tunnel"
import { cn } from "@/utils/cn"

export const metadata: Metadata = {
  title: {
    template: "%s | Fulcrum Technologies",
    default:
      "Fulcrum Technologies | Precision AI for Collision Repair"
  },
  description:
    "AI-powered forensic intelligence for the collision repair industry. We build the systems that find what insurance estimates miss.",
  twitter: {
    creator: "@fulcrumtechai",
    site: "@fulcrumtechai",
    card: "summary_large_image",
    title: "Fulcrum Technologies | Precision AI for Collision Repair",
    description:
      "AI-powered forensic intelligence for the collision repair industry. We build the systems that find what insurance estimates miss."
  },
  openGraph: {
    title: "Fulcrum Technologies | Precision AI for Collision Repair",
    description:
      "AI-powered forensic intelligence for the collision repair industry."
  }
}

// TODO: find a way to load font-feature-settings
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

const flauta = localFont({
  src: "../../public/fonts/flauta.ttf",
  variable: "--font-flauta"
})

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const assets = await fetchAssets()

  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <Transitions />
      <PostHogProvider>
        <AssetsProvider assets={assets}>
          <InspectableProvider>
            <body
              className={cn(
                geistSans.variable,
                geistMono.variable,
                flauta.variable,
                "font-sans"
              )}
              suppressHydrationWarning
            >
              <HtmlTunnelOut />
              <Navbar />
              <NavigationHandler />
              <ContentWrapper>{children}</ContentWrapper>
              <AppHooks assets={assets} />
              <Contact />
            </body>
          </InspectableProvider>
        </AssetsProvider>
      </PostHogProvider>
    </html>
  )
}

export default RootLayout
