const PARTNERS = [
  "State Farm",
  "Allstate",
  "GEICO",
  "Progressive",
  "USAA",
  "CCC Intelligent Solutions",
  "Mitchell International",
  "Audatex",
  "Caliber Collision",
  "Service King",
  "Gerber Collision",
  "ABRA Auto Body"
]

export const Brands = () => {
  return (
    <section className="grid-layout">
      <div className="col-span-full">
        <p className="mb-6 text-f-h4-mobile text-brand-g1 lg:text-f-h4">
          Trusted by repair facilities and insurance carriers across Texas
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="flex h-16 items-center justify-center border border-brand-w1/10 px-4"
            >
              <span className="text-center text-f-p-mobile font-semibold text-brand-w2 lg:text-f-p">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
