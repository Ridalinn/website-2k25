import { NavbarContent } from "./navbar-content"

interface NavbarLink {
  title: string
  href: string
  count?: number
}

const LINKS: NavbarLink[] = [
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
        value:
          "Get collision repair intelligence delivered weekly."
      }
    ]
  }
]

export const Navbar = () => (
  <NavbarContent
    key="navbar-content"
    links={LINKS}
    socialLinks={SOCIAL_LINKS}
    newsletter={NEWSLETTER_CONTENT}
  />
)
