import { Link } from "@/components/primitives/link"

const CAPABILITIES = [
  {
    title: "AEGIS Platform",
    description:
      "AI forensic audit system for collision repair estimates. Multi-agent orchestration that cross-references OEM procedures, parts catalogs, and labor databases.",
    tags: [
      "Forensic Audit",
      "AI Orchestration",
      "OEM Procedures",
      "Real-time Analysis"
    ]
  },
  {
    title: "Supplement Generation",
    description:
      "Automated identification of missing operations, ADAS calibrations, and one-time-use parts that estimates consistently miss.",
    tags: [
      "ADAS Calibrations",
      "OTU Parts",
      "Missing Operations",
      "Blend Operations"
    ]
  },
  {
    title: "Estimate Analysis",
    description:
      "Multi-agent AI orchestration for CCC, Mitchell, and Audatex estimate parsing. Line-by-line forensic review at machine speed.",
    tags: ["CCC ONE", "Mitchell", "Audatex", "Multi-Platform"]
  },
  {
    title: "Storm Response",
    description:
      "Rapid deployment hail damage assessment and repair coordination. Scaled processing for catastrophic weather events.",
    tags: [
      "Hail Damage",
      "CAT Events",
      "Rapid Deployment",
      "Fleet Processing"
    ]
  }
]

export const Capabilities = () => {
  return (
    <div className="grid-layout">
      <h3 className="col-span-full mb-2 text-f-h3-mobile text-brand-g1 lg:col-start-2 lg:text-f-h3 2xl:col-start-3">
        Capabilities
      </h3>

      <div className="col-span-full text-brand-w2 [&_p]:text-f-h1-mobile lg:[&_p]:text-f-h1">
        <p>
          Where AI meets the collision repair industry. Precision tools that
          transform how estimates are written, reviewed, and supplemented.
        </p>
      </div>

      <div className="grid-layout relative col-span-full mt-16 !px-0">
        <div className="col-start-1 col-end-11 grid grid-cols-2 gap-x-3 gap-y-8 lg:col-start-2 lg:grid-cols-8 2xl:col-start-3">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="col-span-1 mt-1.25 flex flex-col gap-y-6 text-brand-w1 lg:col-span-2"
            >
              <h4 className="text-f-h4-mobile lg:text-f-h4">
                <Link href="/products">
                  <span className="actionable">{c.title}</span>
                </Link>
              </h4>

              <p className="-mt-1 text-f-h4-mobile text-brand-w2 lg:text-f-h4">
                {c.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {c.tags.map((tag) => (
                  <p
                    key={tag}
                    title={tag}
                    className="line-clamp-1 w-fit bg-brand-g2 px-1 text-f-p-mobile text-brand-w1 lg:text-f-p"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
