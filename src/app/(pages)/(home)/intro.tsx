export const Intro = () => {
  return (
    <section className="grid-layout">
      <article className="col-span-full flex flex-col gap-4 text-brand-w1 lg:col-span-11">
        <div>
          <h1 className="text-pretty text-f-h0-mobile lg:text-[5.4375rem] lg:leading-[4.875rem] 3xl:text-f-h0">
            AI-Powered Forensic Intelligence for Collision Repair
          </h1>
        </div>
        <div className="w-full lg:w-[60%]">
          <p className="text-balance text-f-h4-mobile lg:text-f-h4">
            We build the systems that find what insurance estimates miss.
            Precision AI that identifies missing operations, ADAS calibrations,
            and supplement opportunities in every estimate.
          </p>
        </div>
      </article>
    </section>
  )
}
