export default function ProductionScale() {
  return (
    <section className="border-t border-black/8 bg-[#F3F4F1] py-10 md:py-10">

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">

        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-12">

          {/* LEFT */}

          <div className="lg:col-span-4">

            <p className="text-xs uppercase tracking-[0.28em] text-black/40">
              Production Scale
            </p>

            <h2 className="mt-1 text-5xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">

              High-volume
              <br />

              manufacturing execution.

            </h2>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-8">

            <p className="max-w-1xl text-base leading-8 text-black/55 md:text-lg">

              Managed large-scale Electronics Production workflows
              involving PCB Layout Design, DRC & DFM, SMT/THT Assembly, Process Stabilization,
              manufacturing optimization, and Production Execution
              across multiple high-volume projects.

            </p>

          </div>

        </div>

        {/* TABLE */}

        <div className="mt-2 overflow-hidden rounded-[2.5rem] border border-black/10 bg-white">

          {/* TOP */}

          <div className="border-b border-black/8 px-6 py-6 md:px-5">

            <div className="grid grid-cols-12">

              <div className="col-span-6">

                <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                  Product
                </p>

              </div>

              <div className="col-span-3">

                <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                  Production
                </p>

              </div>

              <div className="col-span-3">

                <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                  Timeline
                </p>

              </div>

            </div>

          </div>

          {/* ROWS */}

          <div className="divide-y divide-black/16">

            {[
              {
                project: "Music Responsive System",
                units: "1.25L+",
                timeline: "60 Days",
              },

              {
                project: "Drone Transmitter",
                units: "15K",
                timeline: "25 Days",
              },

              {
                project: "Drone Reciever",
                units: "15K",
                timeline: "20 Days",
              },

              {
                project: "Audio Based Kiddy Bank",
                units: "50K",
                timeline: "30 Days",
              },
            ].map((item) => (

              <div
                key={item.project}
                className="
                  grid
                  grid-cols-1
                  gap-8
                  px-6
                  py-8

                  md:grid-cols-12
                  md:items-center
                  md:px-10
                "
              >

                {/* PRODUCT */}

                <div className="md:col-span-6">

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {item.project}
                  </h3>

                </div>

                {/* UNITS */}

                <div className="md:col-span-3">

                  <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                    Production
                  </p>

                  <h4 className="mt-3 text-4xl font-semibold tracking-tight">
                    {item.units}
                  </h4>

                </div>

                {/* TIMELINE */}

                <div className="md:col-span-3">

                  <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                    Timeline
                  </p>

                  <h4 className="mt-3 text-4xl font-semibold tracking-tight">
                    {item.timeline}
                  </h4>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}