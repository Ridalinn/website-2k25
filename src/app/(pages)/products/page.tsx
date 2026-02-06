import type { Metadata } from "next"

import { Contact } from "@/components/layout/contact"
import { Link } from "@/components/primitives/link"

export const metadata: Metadata = {
  title: "Products",
  alternates: {
    canonical: "https://fulcrumtechnologies.ai/products"
  }
}

const PRODUCTS = [
  {
    name: "AEGIS Platform",
    tagline: "AI Forensic Audit System",
    description:
      "Our flagship multi-agent AI platform that performs forensic-level audits on collision repair estimates. AEGIS cross-references OEM repair procedures, parts catalogs, labor time databases, and ADAS calibration requirements to identify every missing operation and supplement opportunity.",
    features: [
      "Multi-agent AI orchestration across 12+ specialized models",
      "Real-time OEM procedure cross-referencing",
      "Automated ADAS calibration requirement detection",
      "One-time-use parts identification",
      "Labor time discrepancy analysis",
      "CCC ONE, Mitchell, and Audatex native parsing"
    ]
  },
  {
    name: "Supplement Engine",
    tagline: "Automated Supplement Generation",
    description:
      "Purpose-built deep learning system that generates comprehensive supplement requests from initial estimates. Identifies operations that human reviewers consistently miss, from blend operations to R&I procedures to ADAS calibrations required by OEM position statements.",
    features: [
      "Automated supplement document generation",
      "OEM position statement compliance checking",
      "Blend operation identification",
      "R&I operation gap analysis",
      "Photo AI integration for damage verification",
      "DRP-compliant formatting"
    ]
  },
  {
    name: "Estimate Analyzer",
    tagline: "Multi-Platform Estimate Intelligence",
    description:
      "Line-by-line forensic analysis engine that parses estimates from any major platform. Identifies pricing inconsistencies, missing labor operations, and parts markup discrepancies at machine speed.",
    features: [
      "Multi-platform estimate parsing (CCC, Mitchell, Audatex)",
      "Line-item forensic analysis",
      "Labor rate benchmarking",
      "Parts pricing verification",
      "Historical claim pattern matching",
      "Batch processing for high-volume operations"
    ]
  },
  {
    name: "Storm Response",
    tagline: "Catastrophic Event Rapid Deployment",
    description:
      "Scalable hail damage assessment and repair coordination platform. When catastrophic weather events hit, Storm Response enables facilities to process thousands of claims simultaneously with AI-powered damage detection and automated repair planning.",
    features: [
      "AI-powered hail damage detection from photos",
      "Automated PDR vs. conventional repair routing",
      "Fleet-scale claim processing",
      "Real-time capacity planning",
      "Insurance carrier integration",
      "Mobile-first field assessment tools"
    ]
  }
]

const ProductsPage = () => (
  <div className="flex flex-col gap-18 lg:gap-44">
    <section className="grid-layout">
      <div className="col-span-full lg:col-span-10">
        <h1 className="mb-4 text-f-h0-mobile text-brand-w1 lg:text-f-h0">
          Products
        </h1>
        <p className="text-f-h4-mobile text-brand-w2 lg:text-f-h4">
          Precision AI tools built for the collision repair industry. Each
          product is designed to find revenue that estimates leave on the table.
        </p>
      </div>
    </section>

    {PRODUCTS.map((product, index) => (
      <section key={product.name} className="grid-layout">
        <div className="col-span-full border-t border-brand-w1/20 pt-8 lg:col-span-10">
          <div className="mb-2 flex items-baseline gap-3">
            <span className="font-mono text-f-p text-brand-g1">
              0{index + 1}
            </span>
            <span className="text-f-p text-brand-o">{product.tagline}</span>
          </div>

          <h2 className="mb-6 text-f-h1-mobile text-brand-w1 lg:text-f-h1">
            {product.name}
          </h2>

          <p className="mb-8 text-f-h4-mobile text-brand-w2 lg:text-f-h4">
            {product.description}
          </p>

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 text-f-p-mobile text-brand-w1 lg:text-f-p"
              >
                <span className="mt-0.5 text-brand-o">&bull;</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}

    <section className="grid-layout">
      <div className="col-span-full flex flex-col items-start gap-4 border-t border-brand-w1/20 pt-8 lg:col-span-8">
        <h3 className="text-f-h2-mobile text-brand-w1 lg:text-f-h2">
          Request an AEGIS Demo
        </h3>
        <p className="text-f-h4-mobile text-brand-w2 lg:text-f-h4">
          See how AEGIS identifies supplement opportunities in your estimates.
          Drop a sample estimate in our interactive demo or schedule a
          walkthrough with our team.
        </p>
        <Link
          href="/contact"
          className="mt-2 bg-brand-o px-6 py-3 text-f-h4-mobile font-semibold text-brand-k lg:text-f-h4"
        >
          <span>Schedule Demo</span>
        </Link>
      </div>
    </section>

    <Contact />
  </div>
)

export default ProductsPage
