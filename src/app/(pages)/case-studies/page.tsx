import type { Metadata } from "next"

import { Contact } from "@/components/layout/contact"

export const metadata: Metadata = {
  title: "Case Studies",
  alternates: {
    canonical: "https://fulcrumtechnologies.ai/case-studies"
  }
}

const CASE_STUDIES = [
  {
    title: "Multi-Location MSO Supplement Recovery",
    client: "Regional MSO — 12 Locations",
    metric: "$847K additional supplement revenue in 6 months",
    description:
      "A 12-location MSO in the Dallas-Fort Worth metroplex deployed AEGIS across all facilities. Within the first month, the platform identified an average of $1,200 in missing operations per estimate, with ADAS calibrations being the most frequently missed category.",
    tags: ["MSO", "ADAS", "Supplement Recovery"]
  },
  {
    title: "Hail Season Storm Response",
    client: "Texas Panhandle — CAT Event",
    metric: "4,200 claims processed in 72 hours",
    description:
      "When a severe hail event struck the Texas Panhandle, our Storm Response platform was deployed to coordinate damage assessment across 8 participating facilities. AI-powered photo analysis triaged vehicles into PDR, conventional, and total loss categories at 50x the speed of manual assessment.",
    tags: ["Storm Response", "Hail Damage", "CAT Event"]
  },
  {
    title: "Insurance Carrier Audit Compliance",
    client: "Top 5 National Carrier",
    metric: "98.7% audit pass rate (up from 71%)",
    description:
      "A top-5 insurance carrier integrated AEGIS into their estimate review workflow to ensure DRP compliance. The platform's OEM procedure cross-referencing eliminated the most common audit failures: missing calibrations, incorrect labor times, and undocumented one-time-use parts.",
    tags: ["Insurance", "Compliance", "DRP"]
  },
  {
    title: "Single-Shop Profitability Turnaround",
    client: "Independent Collision Center — San Antonio",
    metric: "Average RO value increased 34%",
    description:
      "An independent shop in San Antonio was leaving significant supplement revenue unidentified. After implementing AEGIS, the shop discovered an average of 8 missing operations per estimate, including blend operations, R&I procedures, and ADAS calibrations that were previously overlooked.",
    tags: ["Independent Shop", "Profitability", "Supplements"]
  }
]

const CaseStudiesPage = () => (
  <div className="flex flex-col gap-18 lg:gap-32">
    <section className="grid-layout">
      <div className="col-span-full lg:col-span-10">
        <h1 className="mb-4 text-f-h0-mobile text-brand-w1 lg:text-f-h0">
          Case Studies
        </h1>
        <p className="text-f-h4-mobile text-brand-w2 lg:text-f-h4">
          Real results from real collision repair operations. See how AEGIS
          transforms estimate accuracy and supplement recovery.
        </p>
      </div>
    </section>

    {CASE_STUDIES.map((study, index) => (
      <section key={study.title} className="grid-layout">
        <div className="col-span-full border-t border-brand-w1/20 pt-8 lg:col-span-10">
          <div className="mb-2 flex items-baseline gap-3">
            <span className="font-mono text-f-p text-brand-g1">
              0{index + 1}
            </span>
            <span className="text-f-p text-brand-g1">{study.client}</span>
          </div>

          <h2 className="mb-3 text-f-h2-mobile text-brand-w1 lg:text-f-h2">
            {study.title}
          </h2>

          <p className="mb-6 text-f-h3-mobile font-semibold text-brand-o lg:text-f-h3">
            {study.metric}
          </p>

          <p className="mb-6 text-f-h4-mobile text-brand-w2 lg:text-f-h4">
            {study.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="bg-brand-g2 px-2 py-0.5 text-f-p-mobile text-brand-w1 lg:text-f-p"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    ))}

    <Contact />
  </div>
)

export default CaseStudiesPage
