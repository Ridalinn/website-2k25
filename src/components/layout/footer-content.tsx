import { cn } from "@/utils/cn"

import { Copyright, InternalLinks, SocialLinks } from "./shared-sections"
import { StayConnected } from "./stay-connected"

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col items-center gap-1", className)}>
    <span className="text-[2rem] font-bold tracking-[0.1em] leading-none lg:text-[5rem]">
      FULCRUM
    </span>
    <span className="text-[0.6rem] font-semibold tracking-[0.3em] uppercase leading-none text-brand-g1 lg:text-[1rem]">
      TECHNOLOGIES
    </span>
  </div>
)

const SOCIAL_LINKS = {
  twitter: "https://twitter.com/fulcrumtechai",
  instagram: "https://instagram.com/fulcrumtechnologies",
  github: "https://github.com/fulcrumtechnologies",
  linkedIn: "https://linkedin.com/company/fulcrumtechnologies"
}

const NEWSLETTER_CONTENT = [
  {
    type: "paragraph" as const,
    children: [
      {
        type: "text" as const,
        value: "Get collision repair intelligence delivered weekly."
      }
    ]
  }
]

const LINKS = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Products",
    href: "/products"
  },
  {
    title: "Case Studies",
    href: "/case-studies"
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Insights",
    href: "/insights"
  },
  {
    title: "Lab",
    href: "/lab"
  }
]

export const FooterContent = () => {
  return (
    <footer className="relative z-10 flex flex-col justify-between bg-brand-k pb-4 lg:h-[calc(100dvh-3.25rem)]">
      <div className="grid-layout">
        <Logo className="col-span-full mx-auto border-b border-brand-w1/30 pb-2 text-brand-w2 lg:pb-4" />
      </div>

      <div className="grid-layout relative grid-rows-[auto_auto_28px] !gap-y-10 pb-2 pt-4 lg:grid-rows-[auto] lg:items-end lg:!gap-y-2 lg:py-0">
        <InternalLinks
          className="col-start-1 col-end-5 row-start-1 border-b border-brand-w1/30 pb-4 lg:col-start-7 lg:col-end-9 lg:border-none lg:pb-0"
          links={LINKS}
          onNav={false}
        />

        <StayConnected
          className="col-start-1 col-end-5 row-start-2 hidden lg:row-auto"
          content={NEWSLETTER_CONTENT}
        />

        <div className="col-span-full row-start-3 flex flex-col justify-end gap-y-2 lg:hidden">
          <SocialLinks
            className="col-start-1 col-end-5 row-start-2 lg:hidden"
            links={SOCIAL_LINKS}
          />
          <Copyright className="text-left" />
        </div>

        <div className="col-start-10 col-end-13 hidden translate-y-[3px] flex-col items-end gap-y-2 lg:flex">
          <SocialLinks links={SOCIAL_LINKS} />
          <Copyright />
        </div>
      </div>
    </footer>
  )
}
