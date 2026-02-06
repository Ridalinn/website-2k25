import { SocialLinks } from "@/components/layout/shared-sections"

const SOCIAL_LINKS = {
  twitter: "https://twitter.com/fulcrumtechai",
  instagram: "https://instagram.com/fulcrumtechnologies",
  github: "https://github.com/fulcrumtechnologies",
  linkedIn: "https://linkedin.com/company/fulcrumtechnologies"
}

export const ContactFooter = () => (
  <footer className="col-span-4 row-start-2 mt-auto flex flex-col justify-end gap-6 xl:mt-0">
    <a
      href="mailto:info@fulcrumtechnologies.ai"
      className="w-fit text-[30px] font-semibold not-italic leading-none tracking-[-2.16px] xl:text-[56px] xl:tracking-[-2.24px]"
    >
      <span className="actionable actionable-no-underline group !inline">
        <span className="custom-underline">info@</span>
        <br />
        <span className="custom-underline">fulcrum</span>
        <br />
        <span className="custom-underline">technologies.ai</span>
      </span>
    </a>
    <SocialLinks
      links={SOCIAL_LINKS}
      className="flex items-center gap-2 text-f-h3-mobile lg:text-f-h3"
    />
  </footer>
)
