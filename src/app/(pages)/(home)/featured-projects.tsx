import { Arrow } from "@/components/primitives/icons/arrow"
import { Link } from "@/components/primitives/link"
import { cn } from "@/utils/cn"

const PRODUCTS = [
  {
    title: "AEGIS",
    slug: "aegis",
    excerpt:
      "Our flagship AI forensic audit platform. Drop an estimate, get a complete supplement analysis in seconds. Multi-agent AI that cross-references OEM procedures, labor times, and parts catalogs.",
    categories: ["AI Platform", "Forensic Audit", "Estimate Analysis"]
  },
  {
    title: "Supplement Engine",
    slug: "supplement-engine",
    excerpt:
      "Automated supplement generation powered by deep learning. Identifies ADAS calibrations, one-time-use parts, and missing R&I operations that human reviewers consistently miss.",
    categories: ["Automation", "ADAS", "Supplements"]
  },
  {
    title: "Storm Response",
    slug: "storm-response",
    excerpt:
      "Rapid-deployment hail damage assessment system. Process thousands of claims simultaneously during catastrophic weather events with AI-powered damage detection.",
    categories: ["CAT Events", "Hail Damage", "Fleet Processing"]
  }
]

export const FeaturedProjects = () => {
  return (
    <div className="grid-layout !gap-y-0">
      {PRODUCTS.map((product, index) => (
        <div
          key={product.title}
          className={cn(
            "col-span-full",
            "top-[6.7rem] lg:sticky lg:top-[9.2rem]",
            index === 0 && "!top-0 lg:!top-0",
            index === PRODUCTS.length - 1 && "top-[6.8rem] lg:top-[9.3rem]"
          )}
          style={{ zIndex: index + 1 }}
        >
          {index === 0 && (
            <h2
              className={cn(
                "col-span-full bg-brand-k pb-6 pt-12 !text-f-h1-mobile text-brand-w2 lg:pt-14 lg:!text-f-h1"
              )}
            >
              Our Products
            </h2>
          )}
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

const ProductItem = ({
  product
}: {
  product: (typeof PRODUCTS)[number]
}) => (
  <div
    className={cn(
      "grid-layout bg-transparent !px-0 py-4",
      "transition-transform duration-300",
      "bg-brand-k",
      "border-t border-brand-w1/30",
      "col-span-full"
    )}
  >
    <div className="relative col-span-full flex h-48 items-center justify-center border border-brand-w1/10 bg-brand-g2/30 lg:col-span-7 lg:h-72">
      <div className="flex flex-col items-center gap-2">
        <span className="text-f-h2-mobile font-bold text-brand-o lg:text-f-h2">
          {product.title}
        </span>
        <span className="text-f-p text-brand-g1">Product Preview</span>
      </div>
    </div>
    <div className="col-span-full flex flex-col justify-between gap-y-2 md:col-span-3 md:pr-12 lg:pr-2">
      <Link
        href={`/products`}
        className="text-f-h2-mobile text-brand-w1 md:hidden lg:text-f-h2"
      >
        <span className="actionable">{product.title}</span>
      </Link>

      <p className="text-f-h4-mobile text-brand-w2 lg:text-f-h4">
        {product.excerpt}
      </p>

      <div className="hidden !flex-col lg:!flex">
        {product.categories.map((category) => (
          <span
            key={category}
            className="text-f-h4-mobile text-brand-w1 lg:text-f-h4"
          >
            {category}
          </span>
        ))}
      </div>
    </div>

    <Link
      href={`/products`}
      className="hidden h-max w-max justify-self-end pr-0.5 text-right text-f-h2-mobile text-brand-w1 md:block lg:col-span-2 lg:col-start-11 lg:text-f-h2"
    >
      <span className="actionable group gap-x-2 [&:before]:delay-0 [&:before]:hover:delay-150">
        <span className="translate-x-6 transition-transform duration-200 ease-in-out group-hover:translate-x-0">
          {product.title}
        </span>
        <Arrow className="size-6 opacity-0 transition-opacity delay-0 duration-100 ease-in-out hover:delay-200 group-hover:opacity-100" />
      </span>
    </Link>
  </div>
)
