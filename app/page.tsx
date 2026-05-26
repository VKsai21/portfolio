import ProductionScale from "@/app/production-scale";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F3F4F1] text-[#111111]">

      {/* NAVBAR */}

      <header className="fixed top-0 z-50 w-full border-b border-black/[0.05] bg-[#F3F4F1]/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10 xl:px-16">

          {/* LEFT */}

          <div>

            <h1 className="text-sm font-semibold tracking-tight">
              VIVEK SAI ALAJPUR
            </h1>

            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-black/45">
              Production Engineer
            </p>

          </div>

          {/* RIGHT */}

          <nav className="hidden items-center gap-14 text-sm text-black/60 md:flex">

            <a href="#projects" className="transition hover:text-black">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-black">
              Experience
            </a>

            <a href="#skills" className="transition hover:text-black">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>

          </nav>

        </div>

      </header>
      
      {/* HERO */}

      <section className="mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pt-28 pb-16 md:px-10 xl:px-16">

        <div className="grid w-full grid-cols-1 gap-16 xl:grid-cols-12 xl:gap-20">

          {/* LEFT SIDE */}

          <div className="flex flex-col justify-center xl:col-span-6">

            {/* TOP LABEL */}

            <p className="text-[11px] uppercase tracking-[0.32em] text-black/45 md:text-xs">
              SMT • THT • NPI • DFM • Manufacturing Scale-Up
            </p>

            {/* HEADING */}

            <h1
              className="
                mt-3
                max-w-4xl
                font-bold
                leading-[1]
                tracking-[-0.05em]

                text-[3rem]

                sm:text-[5rem]
                md:text-[6rem]
                lg:text-[5rem]
                xl:text-[5rem]
              "
            >
              Vivek Sai
              
              Alajpur
            </h1>

            {/* DIVIDER */}

            <div className="mt-3 h-[2px] w-14 bg-black" />

            {/* DESCRIPTION */}

            <p className="mt-3 max-w-2xl text-base leading-8 text-black/58 md:text-[1.15rem]">

              Experienced in SMT/THT manufacturing, DFM validation,
              PCB review, embedded systems, process stabilization,
              and electronics production scale-up.

            </p>

            {/* BUTTONS */}

            <div className="mt-3 flex flex-wrap gap-5">

              <button className="rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:opacity-85">

                View Projects

              </button>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-2xl border border-black/10 bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Resume
              </a>

            </div>

            {/* BOTTOM INFO */}

            <div className="mt-3 grid grid-cols-1 gap-6 border-t border-black/10 pt-8 sm:grid-cols-3">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                  Location
                </p>

                <h3 className="mt-1 text-sm font-medium">
                  Hyderabad, India
                </h3>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                  Role
                </p>

                <h3 className="mt-3 text-sm font-medium">
                  Production Engineer
                </h3>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                  Availability
                </p>

                <h3 className="mt-3 text-sm font-medium">
                  Open to Opportunities
                </h3>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center xl:col-span-6">

            <div className="w-full rounded-[2.5rem] border border-black/10 bg-white p-6 md:p-8">

              {/* TOP SECTION */}

              <div className="grid gap-2 lg:grid-cols-[1fr_1.1fr]">

                {/* STATS */}

                <div className="rounded-[2rem] bg-[#F3F4F1] p-8">

                  <p className="text-xs uppercase tracking-[0.22em] text-black/45">
                    Production Capacity
                  </p>

                  <h2 className="mt-3 text-6xl font-semibold tracking-[-0.05em]">
                    200K+ counting
                  </h2>

                  <div className="mt-3 h-[1px] w-10 bg-black/15" />

                  <p className="mt-3 text-sm leading-7 text-black/55">
                    Units executed in 135 days
                  </p>

                </div>

                {/* IMAGE */}

                <div className="overflow-hidden rounded-[2rem] bg-[#E8E8E4]">

                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                    alt="Electronics Manufacturing"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

              {/* MIDDLE STATS */}

              <div className="mt-3 grid gap-5 border-t border-black/8 pt-8 md:grid-cols-2">

                {/* CARD 1 */}

                <div className="flex gap-5 rounded-[2rem] bg-[#F3F4F1] p-6">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl">
                    ↗
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                      Defect Reduction
                    </p>

                    <h3 className="mt-2 text-5xl font-semibold tracking-tight">
                      75%
                    </h3>

                    <p className="mt-2 text-sm text-black/50">
                      From 40–50% to 8–10%
                    </p>

                  </div>

                </div>

                {/* CARD 2 */}

                <div className="flex gap-5 rounded-[2rem] bg-[#F3F4F1] p-6">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl">
                    ⚙
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                      Production Lines
                    </p>

                    <h3 className="mt-2 text-5xl font-semibold tracking-tight">
                      Multi
                    </h3>

                    <p className="mt-2 text-sm text-black/50">
                      High-volume & multi-product
                    </p>

                  </div>

                </div>

              </div>

              {/* BOTTOM GRID */}

              <div className="mt-3 grid gap-1 gap-y-2 border-t border-black/8 pt-8 md:grid-cols-2">

                {[
                  "SMT • THT Manufacturing",
                  "NPI & New Product Introduction",
                  "DFM/DFA & PCB Validation",
                  "Production Planning & Execution",
                  "Process Stabilization",
                  "Quality Improvement",
                  "SOP Development & Testing",
                  "Embedded Systems & Hardware",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F3F4F1] text-xs">
                      ✓
                    </div>

                    <p className="text-sm text-black/70">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="border-t border-black/8 bg-white py-24 md:py-5"
      >

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">

          {/* TOP */}

          <div className="grid gap-10 lg:grid-cols-12">

            {/* LEFT */}

            <div className="lg:col-span-4">

              <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                Experience
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-3x2">

                Production &
                <br />

                Manufacturing
                <br />

                Experience.

              </h2>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-8">

              <p className="max-w-2xl text-base leading-8 text-black/55 md:text-lg">

                Hands-on experience in high-volume electronics manufacturing,
                SMT/THT process stabilization, DFM validation,
                production scale-up, PCB debugging, and pilot-to-production execution.

              </p>

            </div>

          </div>

          {/* EXPERIENCE BLOCKS */}

          <div className="mt-5 space-y-16">

            {/* EXPERIENCE 1 */}
            <div className="grid gap-10 border-t border-black/8 pt-5 lg:grid-cols-12">

              {/* LEFT */}

              <div className="lg:col-span-3">

                <p className="text-s uppercase tracking-[0.22em] text-black/70">
                  May 2025 — Present
                </p>

              </div>

              {/* CENTER */}

              <div className="lg:col-span-3">

                <h3 className="text-4xl font-semibold tracking-tight">
                  Production Engineer
                </h3>

                <p className="mt-1 text-black/65">
                  Trielectra LLP
                </p>

              </div>

              {/* RIGHT */}

              <div className="space-y-2 lg:col-span-6">

                <p className="text-base leading-6 text-black/65">
                  Managed end-to-end production workflows for multiple electronic products,
                  ensuring high-volume output, process stability,
                  SMT optimization, and scalable manufacturing execution.
                </p>

                {/* RESPONSIBILITIES */}

                <div className="grid gap-x-10 gap-y-1 pt-1 md:grid-cols-2">

                  {[
                    "SMT/THT manufacturing stabilization",
                    "DFM corrections & PCB validation",
                    "Pick-and-place optimization",
                    "SOP development & testing",
                    "Pilot-to-production transition",
                    "Audio signal debugging",
                    "Assembly process optimization",
                    "Production scalability execution",
                  ].map((item) => (
                    <div key={item} className="flex gap-4">

                      <div className="mt-[6px] h-2 w-2 rounded-full bg-black" />

                      <p className="text-sm leading-7 text-black/65">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>
                
                <div className="grid gap-1 md:grid-cols-3">

                  <div className="rounded-[1.8rem] bg-[#F3F4F1] p-6">

                    <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                      Units Produced
                    </p>

                    <h4 className="mt-2 text-3xl font-semibold tracking-tight">
                      200K+
                    </h4>

                  </div>

                  <div className="rounded-[1.8rem] bg-[#F3F4F1] p-6">

                    <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                      Defect Reduction
                    </p>

                    <h4 className="mt-2 text-4xl font-semibold tracking-tight">
                      75%
                    </h4>

                  </div>

                  <div className="rounded-[1.8rem] bg-[#F3F4F1] p-6">

                    <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                      Production Time
                    </p>

                    <h4 className="mt-2 text-3xl font-semibold tracking-tight">
                      135D (overall)
                    </h4>

                  </div>

                </div>

              </div>

            </div>
            

            {/* EXPERIENCE 2 */}
            <div className="grid gap-10 border-t border-black/8 pt-5 lg:grid-cols-12">

              {/* LEFT */}

              <div className="lg:col-span-3">

                <p className="text-s uppercase tracking-[0.22em] text-black/70">
                  2023 - 2025
                </p>

              </div>

              {/* CENTER */}

              <div className="lg:col-span-3">

                <h3 className="text-4xl font-semibold tracking-tight">
                  Co-Founder & Hardware Engineer
                </h3>

                <p className="mt-1 text-black/65">
                  Shoolin Automation Technologies
                </p>

              </div>

              {/* RIGHT */}

              <div className="space-y-2 lg:col-span-6">

                <p className="text-base leading-6 text-black/65">
                  Developed smart automation hardware systems from prototype to functional products,
                  including PCB design, embedded integration,
                  prototyping workflows, and hardware validation.
                </p>

                {/* RESPONSIBILITIES */}

                <div className="grid gap-x-10 gap-y-1 pt-1 md:grid-cols-2">

                  {[
                    "Single & double-layer PCB design",
                    "ESP32 & ESP8266 integrations",
                    "Relay & sensor systems",
                    "Embedded hardware debugging",
                    "Prototype fabrication",
                    "Wireless communication systems",
                    "BOM & sourcing management",
                    "Field testing & validation",
                  ].map((item) => (
                    <div key={item} className="flex gap-4">

                      <div className="mt-[6px] h-2 w-2 rounded-full bg-black" />

                      <p className="text-sm leading-7 text-black/65">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>
            

          </div>

        </div>

      </section>
      
      <ProductionScale />
      
      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="bg-[#F3F4F1] py-0 md:py-0"
      >

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">

          {/* HEADER */}

          <div className="grid gap-2 lg:grid-cols-12">

            {/* LEFT */}

            <div className="lg:col-span-4">

              <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                Selected Work
              </p>

              <h2 className="mt-2 text-3x2 font-semibold leading-tight tracking-[-0.05em] md:text-4xl">

                Engineering projects 

              </h2>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-8">

              <p className="max-w-2xl text-base leading-8 text-black/55 md:text-lg">

                A collection of embedded systems, production engineering workflows,
                automation platforms, PCB development, and scalable electronics solutions.

              </p>

            </div>

          </div>

          {/* PROJECT LIST */}

          <div className="mt-20 space-y-10">

            /* {/* PROJECT 1 */}

            <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white">

              <div className="grid lg:grid-cols-12">

                {/* IMAGE */}

                <div className="relative min-h-[340px] bg-[#E8E8E4] lg:col-span-5">

                  <img
                    src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1400&auto=format&fit=crop"
                    alt="Manufacturing"
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* CONTENT */}

                <div className="flex flex-col justify-between p-8 md:p-12 lg:col-span-7">

                  <div>

                    <p className="text-xs uppercase tracking-[0.24em] text-black/40">
                      Production Engineering
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">

                      Audio Product
                      <br />

                      Mass Production System

                    </h3>

                    <p className="mt-8 max-w-2xl text-base leading-8 text-black/60">

                      Led end-to-end manufacturing execution for high-volume
                      audio-response control boards, optimizing SMT workflows,
                      reducing production defects, stabilizing assembly processes,
                      and scaling production throughput.

                    </p>

                  </div>

                  {/* BOTTOM */}

                  <div className="mt-2">

                    {/* METRICS */}

                    <div className="grid gap-5 md:grid-cols-3">

                      <div>

                        <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                          Units
                        </p>

                        <h4 className="mt-8 text-3xl font-semibold">
                          1.25L+
                        </h4>

                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                          Defect Reduction
                        </p>

                        <h4 className="mt-4 text-3xl font-semibold">
                          75%
                        </h4>

                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                          Timeline
                        </p>

                        <h4 className="mt-8 text-3xl font-semibold">
                          55 Days
                        </h4>

                      </div>

                    </div>
                    {/* PRODUCTION EXECUTION */}

                    {/* TAGS */}

                    <div className="mt-10 flex flex-wrap gap-3">

                      {[
                        "SMT Optimization",
                        "DFM Validation",
                        "Production Stabilization",
                        "SOP Development",
                        "PCB Debugging",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-black/10 bg-[#F3F4F1] px-4 py-2 text-sm text-black/70"
                        >
                          {item}
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div> */

            {/* PROJECT 2 */}

            <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white">

              <div className="grid lg:grid-cols-12">

                {/* CONTENT */}

                <div className="flex flex-col justify-between p-8 md:p-12 lg:col-span-7">

                  <div>

                    <p className="text-xs uppercase tracking-[0.24em] text-black/40">
                      Embedded Systems
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">

                      Smart Home
                      <br />

                      Automation Platform

                    </h3>

                    <p className="mt-8 max-w-2xl text-base leading-8 text-black/60">

                      Developed a scalable IoT automation system using ESP32,
                      Firebase Realtime Database, relay control systems,
                      scheduling automation, and embedded communication workflows.

                    </p>

                  </div>

                  {/* TAGS */}

                  <div className="mt-12 flex flex-wrap gap-3">

                    {[
                      "ESP32",
                      "Firebase",
                      "IoT Automation",
                      "Relay Systems",
                      "Scheduling Logic",
                      "Embedded Communication",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-black/10 bg-[#F3F4F1] px-4 py-2 text-sm text-black/70"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                </div>

                {/* IMAGE */}

                <div className="relative min-h-[340px] bg-[#E8E8E4] lg:col-span-5">

                  <img
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1400&auto=format&fit=crop"
                    alt="Embedded Systems"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CAPABILITIES SECTION */}
      <section
        id="skills"
        className="border-t border-black/8 bg-white py-2 md:py-32"
      >

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">

          {/* HEADER */}

          <div className="grid gap-10 lg:grid-cols-12">

            {/* LEFT */}

            <div className="lg:col-span-4">

              <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                Capabilities
              </p>

              <h2 className="mt-2 text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5x2">

                Engineering

                technical systems.

              </h2>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-8">

              <p className="max-w-2xl text-base leading-8 text-black/55 md:text-lg">

                Experience across manufacturing systems,
                embedded hardware, PCB validation,
                process engineering, and scalable electronics production workflows.

              </p>

            </div>

          </div>

          {/* CAPABILITY GRID */}

          <div className="mt-2 grid gap-1 md:grid-cols-2 xl:grid-cols-3">

            {/* CARD */}

            {[
              {
                title: "SMT & THT Manufacturing",
                items: [
                  "SMT Assembly",
                  "THT Assembly",
                  "Rework & Inspection",
                  "Production Stabilization",
                  "Yield Improvement",
                ],
              },

              {
                title: "Production Engineering",
                items: [
                  "NPI Execution",
                  "Production Planning",
                  "Process Optimization",
                  "SOP Development",
                  "Quality Improvement",
                ],
              },

              {
                title: "PCB Engineering",
                items: [
                  "PCB Validation",
                  "Gerber Review",
                  "DFM/DFA",
                  "PCB Debugging",
                  "Prototype Verification",
                ],
              },

              {
                title: "Embedded Systems",
                items: [
                  "ESP32",
                  "ESP8266",
                  "Arduino",
                  "Relay Systems",
                  "Sensor Integration",
                ],
              },

              {
                title: "Manufacturing Tools",
                items: [
                  "EasyEDA",
                  "KiCad",
                  "DipTrace",
                  "FlatCAM",
                  "Mach3Mill",
                ],
              },

              {
                title: "Automation Systems",
                items: [
                  "IoT Infrastructure",
                  "Firebase",
                  "Automation Logic",
                  "Scheduling Systems",
                  "Embedded Communication",
                ],
              },
            ].map((section) => (

              <div
                key={section.title}
                className="rounded-[2.2rem] border border-black/10 bg-[#F3F4F1] p-8 transition duration-300 hover:border-black/20"
              >

                {/* TOP */}

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-[0.24em] text-black/40">
                      Capability
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold tracking-tight">

                      {section.title}

                    </h3>

                  </div>

                  <div className="h-3 w-3 rounded-full bg-black" />

                </div>

                {/* ITEMS */}

                <div className="mt-1 space-y-1">

                  {section.items.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >

                      <div className="h-2 w-2 rounded-full bg-black/70" />

                      <p className="text-sm text-black/65">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
        {/* CONTACT SECTION */}

        <section
          id="contact"
          className="bg-[#F3F4F1] py-5 md:py-5"
        >

          <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-16">

            <div className="overflow-hidden rounded-[3rem] border border-black/10 bg-white">

              <div className="grid lg:grid-cols-12">

                {/* LEFT */}

                <div className="border-b border-black/8 p-10 md:p-14 lg:col-span-5 lg:border-b-0 lg:border-r">

                  <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                    Contact
                  </p>

                  <h2 className="mt-2 text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5x2">

                    Let’s build
                    <br />

                    reliable
                    <br />

                    engineering
                    <br />

                    systems.

                  </h2>

                  <p className="mt-2 max-w-md text-base leading-8 text-black/55">

                    Open to opportunities in production engineering,
                    embedded systems, manufacturing optimization,
                    and electronics product development.

                  </p>

                  {/* CONTACT INFO */}

                  <div className="mt-2 space-y-8">

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                        Email
                      </p>

                      <a
                        href="mailto:vivekalajpur@gmail.com"
                        className="mt-3 block text-lg font-medium transition hover:opacity-60"
                      >
                        vivekalajpur@gmail.com
                      </a>

                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                        Location
                      </p>

                      <p className="mt-2 text-lg font-medium">
                        Hyderabad, India
                      </p>

                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                        Profiles
                      </p>

                      <div className="mt-2 flex flex-wrap gap-1">

                        <a
                          href="https://www.linkedin.com/in/vivek-sai-alajpur/"
                          className="rounded-full border border-black/10 px-5 py-2 text-sm transition hover:bg-black hover:text-white"
                        >
                          LinkedIn
                        </a>

                        <a
                          href="#"
                          className="rounded-full border border-black/10 px-5 py-2 text-sm transition hover:bg-black hover:text-white"
                        >
                          GitHub
                        </a>
                      </div>

                    </div>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="p-10 md:p-14 lg:col-span-7">

                  <form className="space-y-8">

                    {/* NAME */}

                    <div>

                      <label className="text-xs uppercase tracking-[0.2em] text-black/40">
                        Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="
                          mt-4
                          w-full
                          border-b
                          border-black/10
                          bg-transparent
                          pb-4
                          text-lg
                          outline-none
                          placeholder:text-black/30
                        "
                      />

                    </div>

                    {/* EMAIL */}

                    <div>

                      <label className="text-xs uppercase tracking-[0.2em] text-black/40">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="
                          mt-4
                          w-full
                          border-b
                          border-black/10
                          bg-transparent
                          pb-4
                          text-lg
                          outline-none
                          placeholder:text-black/30
                        "
                      />

                    </div>

                    {/* MESSAGE */}

                    <div>

                      <label className="text-xs uppercase tracking-[0.2em] text-black/40">
                        Project / Opportunity
                      </label>

                      <textarea
                        rows={5}
                        placeholder="Tell me about the role or project..."
                        className="
                          mt-4
                          w-full
                          resize-none
                          border-b
                          border-black/10
                          bg-transparent
                          pb-4
                          text-lg
                          outline-none
                          placeholder:text-black/30
                        "
                      />

                    </div>

                    {/* BUTTON */}

                    <div className="pt-6">

                      <button
                        className="
                          rounded-full
                          bg-black
                          px-8
                          py-4
                          text-sm
                          font-medium
                          text-white
                          transition
                          duration-300
                          hover:opacity-80
                        "
                      >
                        Send Message
                      </button>

                    </div>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </section>
    </main>
  );
}
