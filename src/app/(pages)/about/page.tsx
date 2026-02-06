import type { Metadata } from "next"

import { Contact } from "@/components/layout/contact"

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "https://fulcrumtechnologies.ai/about"
  }
}

const VALUES = [
  {
    title: "Precision Over Speed",
    description:
      "Every missed operation costs a repair facility money and compromises repair quality. We build systems that never sacrifice accuracy for throughput."
  },
  {
    title: "OEM-First Thinking",
    description:
      "Manufacturer repair procedures exist for a reason. Our AI is trained on the latest OEM position statements and technical service bulletins to ensure every repair meets factory specifications."
  },
  {
    title: "Transparency in AI",
    description:
      "Every finding AEGIS produces is traceable back to a specific OEM procedure, labor time database entry, or parts catalog reference. No black boxes."
  },
  {
    title: "Built for the Industry",
    description:
      "We're not a general-purpose AI company that wandered into collision repair. Every model, every feature, every interface is purpose-built for this industry."
  }
]

const AboutPage = () => (
  <div className="flex flex-col gap-18 lg:gap-44">
    <section className="grid-layout">
      <div className="col-span-full lg:col-span-10">
        <h1 className="mb-4 text-f-h0-mobile text-brand-w1 lg:text-f-h0">
          About Fulcrum
        </h1>
        <p className="mb-8 text-f-h4-mobile text-brand-w2 lg:text-f-h4">
          Fulcrum Technologies was founded on a simple observation: collision
          repair estimates consistently leave money on the table. Missing
          operations, overlooked ADAS calibrations, and unidentified one-time-use
          parts cost the industry billions annually.
        </p>
        <p className="text-f-h4-mobile text-brand-w2 lg:text-f-h4">
          We built AEGIS to fix that. Our multi-agent AI platform performs
          forensic-level audits on every estimate, cross-referencing OEM
          procedures, parts catalogs, and labor databases to find what human
          reviewers miss. Based in Texas, we serve collision repair facilities,
          MSOs, and insurance carriers nationwide.
        </p>
      </div>
    </section>

    <section className="grid-layout">
      <div className="col-span-full">
        <h2 className="mb-8 text-f-h3-mobile text-brand-g1 lg:text-f-h3">
          Our Values
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {VALUES.map((value) => (
            <div key={value.title} className="border-t border-brand-w1/20 pt-4">
              <h3 className="mb-2 text-f-h4-mobile text-brand-w1 lg:text-f-h4">
                {value.title}
              </h3>
              <p className="text-f-p-mobile text-brand-w2 lg:text-f-p">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="grid-layout">
      <div className="col-span-full lg:col-span-8">
        <h2 className="mb-4 text-f-h3-mobile text-brand-g1 lg:text-f-h3">
          The Team
        </h2>
        <p className="text-f-h4-mobile text-brand-w2 lg:text-f-h4">
          Our team combines deep collision repair industry expertise with
          cutting-edge AI engineering. We&apos;re a small, focused group that
          ships fast and iterates with our customers.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {["Engineering", "AI Research", "Industry Relations", "Operations"].map(
            (dept) => (
              <div
                key={dept}
                className="flex h-24 items-center justify-center border border-brand-w1/10 bg-brand-g2/20"
              >
                <span className="text-f-p-mobile text-brand-g1 lg:text-f-p">
                  {dept}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>

    <Contact />
  </div>
)

export default AboutPage
