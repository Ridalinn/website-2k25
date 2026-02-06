import type { Metadata } from "next"

import { Contact } from "@/components/layout/contact"
import { Link } from "@/components/primitives/link"

export const metadata: Metadata = {
  title: "Insights",
  alternates: {
    canonical: "https://fulcrumtechnologies.ai/insights"
  }
}

const ARTICLES = [
  {
    title: "Why ADAS Calibrations Are the Biggest Revenue Leak in Collision Repair",
    date: "2026-01-15",
    category: "Industry Analysis",
    excerpt:
      "Advanced Driver Assistance Systems require recalibration after nearly every collision repair involving bumper, windshield, or structural components. Yet our data shows that 73% of estimates reviewed by AEGIS are missing at least one required calibration."
  },
  {
    title: "The Multi-Agent AI Approach to Estimate Forensics",
    date: "2025-12-08",
    category: "Technology",
    excerpt:
      "Traditional rule-based estimate review tools check against static databases. AEGIS uses a multi-agent architecture where specialized AI models collaborate — one reads the estimate, another cross-references OEM procedures, another validates parts pricing, and a coordinator synthesizes findings."
  },
  {
    title: "One-Time-Use Parts: The Hidden Cost Insurance Estimates Miss",
    date: "2025-11-22",
    category: "Industry Analysis",
    excerpt:
      "Modern vehicles use an increasing number of components designed for single use — clips, fasteners, seals, and adhesives that cannot be reused after removal. Our analysis of 50,000 estimates found an average of 7 missing OTU parts per repair."
  },
  {
    title: "Preparing Your Shop for Hail Season with AI",
    date: "2025-10-30",
    category: "Operations",
    excerpt:
      "Catastrophic hail events can overwhelm even the best-prepared collision repair facilities. AI-powered triage and damage assessment tools can help shops process 10x more vehicles during peak CAT events without sacrificing estimate accuracy."
  },
  {
    title: "How OEM Position Statements Impact Your Bottom Line",
    date: "2025-09-14",
    category: "Compliance",
    excerpt:
      "OEM position statements are updated frequently, and failing to follow them exposes shops to liability while leaving supplement revenue on the table. AEGIS monitors over 400 active position statements across major manufacturers."
  }
]

const InsightsPage = () => (
  <div className="flex flex-col gap-18 lg:gap-32">
    <section className="grid-layout">
      <div className="col-span-full lg:col-span-10">
        <h1 className="mb-4 text-f-h0-mobile text-brand-w1 lg:text-f-h0">
          Insights
        </h1>
        <p className="text-f-h4-mobile text-brand-w2 lg:text-f-h4">
          Analysis, research, and perspective on AI in collision repair.
        </p>
      </div>
    </section>

    <section className="grid-layout">
      <div className="col-span-full flex flex-col gap-0">
        {ARTICLES.map((article) => (
          <article
            key={article.title}
            className="border-t border-brand-w1/20 py-8"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="text-f-p-mobile text-brand-o lg:text-f-p">
                {article.category}
              </span>
              <span className="text-f-p-mobile text-brand-g1 lg:text-f-p">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </span>
            </div>

            <h2 className="mb-3 text-f-h3-mobile text-brand-w1 lg:text-f-h3">
              {article.title}
            </h2>

            <p className="text-f-p-mobile text-brand-w2 lg:text-f-p">
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="grid-layout">
      <div className="col-span-full flex flex-col items-start gap-4 border-t border-brand-w1/20 pt-8 lg:col-span-8">
        <h3 className="text-f-h3-mobile text-brand-w1 lg:text-f-h3">
          Get collision repair intelligence delivered weekly
        </h3>
        <p className="text-f-p-mobile text-brand-w2 lg:text-f-p">
          Subscribe to our newsletter for the latest analysis on AI in collision
          repair, OEM procedure updates, and industry trends.
        </p>
        <Link
          href="/contact"
          className="mt-2 bg-brand-o px-6 py-3 text-f-h4-mobile font-semibold text-brand-k lg:text-f-h4"
        >
          <span>Subscribe</span>
        </Link>
      </div>
    </section>

    <Contact />
  </div>
)

export default InsightsPage
