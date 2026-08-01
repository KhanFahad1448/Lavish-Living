import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import TrustedBrands from "../components/TrustedBrands";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          About Lavish Living | Interior Design Studio in Ranchi
        </title>

        <meta
          name="description"
          content="Learn about Lavish Living, a premium interior design company in Ranchi specializing in modular kitchens, luxury bedrooms, false ceilings, wardrobes, office interiors and complete turnkey interior solutions."
        />

        <meta
          name="keywords"
          content="About Lavish Living, Interior Designer Ranchi, Luxury Interior Company Ranchi, Home Interior Experts Jharkhand, Modular Kitchen Designers"
        />

        <link
          rel="canonical"
          href="https://lavishlivinginteriors.in/about"
        />

        <meta
          property="og:title"
          content="About Lavish Living | Premium Interior Designers in Ranchi"
        />

        <meta
          property="og:description"
          content="Meet the team behind Lavish Living and discover our commitment to creating elegant and functional interiors across Ranchi and Jharkhand."
        />

        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
        />

        <meta
          property="og:url"
          content="https://lavishlivinginteriors.in/about"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}

      <section className="relative overflow-hidden bg-gradient-luxe py-8 text-ivory sm:py-10 lg:py-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,154,107,.18),transparent_45%)]" />

        <div className="container-luxe relative max-w-[720px]">

          <span className="inline-flex rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-brass sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]">

            Since 2019

          </span>

          <h1 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:mt-3 sm:text-3xl lg:text-5xl">

            Designing Luxury Spaces
            <br />
            That Feel Like Home.

          </h1>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-ivory/75 sm:mt-3 sm:text-sm sm:leading-6 lg:text-base lg:leading-7">

            Lavish Living is a premium interior design studio
            based in Ranchi, dedicated to creating elegant,
            functional and timeless interiors.

            From modular kitchens and luxury bedrooms to
            complete turnkey home interiors, every project
            is thoughtfully designed around your lifestyle,
            crafted with premium materials and executed with
            exceptional attention to detail.

          </p>

        </div>

      </section>

      {/* ========================================= */}
      {/* STATS */}
      {/* ========================================= */}

      <section className="bg-white py-6 sm:py-8 lg:py-12">

        <div className="container-luxe grid max-w-4xl grid-cols-3 gap-2 sm:gap-4">

          {[
            {
              number: "120+",
              label: "Luxury Homes Delivered",
            },
            {
              number: "45 Days",
              label: "Average Project Timeline",
            },
            {
              number: "10 Years",
              label: "Service Support",
            },
          ].map((item) => (

            <div
              key={item.label}
              className="rounded-xl border border-emerald/10 bg-cream p-2.5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:p-4"
            >

              <h2 className="font-display text-lg font-semibold text-emerald-deep sm:text-2xl lg:text-4xl">

                {item.number}

              </h2>

              <p className="mt-1 text-[8px] uppercase leading-tight tracking-[0.14em] text-ink/60 sm:mt-3 sm:text-[11px] sm:tracking-[0.24em]">

                {item.label}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ========================================= */}
      {/* OUR STORY */}
      {/* ========================================= */}

      <section className="bg-cream py-8 sm:py-10 md:py-14">

        <div className="container-luxe max-w-5xl">

          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

            {/* LEFT */}

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-brass sm:text-[11px] sm:tracking-[0.28em]">

                OUR PHILOSOPHY

              </p>

              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-3 sm:text-3xl lg:text-4xl">

                Every Home Tells
                <br />
                A Different Story.

              </h2>

              <p className="mt-2 text-xs leading-5 text-ink/65 sm:mt-3 sm:text-[13px] sm:leading-6">

                We believe exceptional interiors begin
                with understanding the people who live
                inside them.

                Every conversation, every sketch and every
                material selection revolves around your
                lifestyle—not design trends.

              </p>

              <p className="mt-2 text-xs leading-5 text-ink/65 sm:mt-3 sm:text-[13px] sm:leading-6">

                Our team combines thoughtful planning,
                premium craftsmanship and meticulous
                execution to create interiors that remain
                elegant, functional and timeless for years.

              </p>

            </div>

            {/* RIGHT IMAGE */}

            <div>

              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80"
                alt="Luxury Interior"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-luxe transition duration-500 hover:scale-[1.02] sm:rounded-[26px]"
              />

            </div>

          </div>

        </div>

      </section>


            {/* ========================================= */}
      {/* WHY CHOOSE US */}
      {/* ========================================= */}

      <section className="bg-white py-8 sm:py-10 md:py-14">

        <div className="container-luxe max-w-5xl">

          <div className="text-center">

            <p className="text-[9px] uppercase tracking-[0.24em] text-brass sm:text-[11px] sm:tracking-[0.30em]">

              WHY LAVISH LIVING

            </p>

            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-3 sm:text-3xl lg:text-4xl">

              Designed With Precision.
              <br />
              Delivered With Perfection.

            </h2>

            <p className="mx-auto mt-2 max-w-3xl text-xs leading-5 text-ink/65 sm:mt-3 sm:text-[13px] sm:leading-6">

              Every project is managed from concept to completion by
              experienced designers, craftsmen and project managers,
              ensuring a seamless luxury experience.

            </p>

          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 md:mt-10 xl:grid-cols-4">

            {[
              {
                title: "Premium Materials",
                text: "Only carefully selected laminates, hardware, finishes and accessories from trusted brands."
              },
              {
                title: "Experienced Designers",
                text: "Creative planning with practical layouts tailored around your lifestyle."
              },
              {
                title: "Transparent Pricing",
                text: "Detailed quotations with no hidden costs throughout the project."
              },
              {
                title: "On-Time Delivery",
                text: "Dedicated project management ensuring every milestone is completed on schedule."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-xl border border-emerald/10 bg-cream p-3 transition duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-xl sm:rounded-2xl sm:p-4 md:p-5"
              >

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brass/10 sm:h-10 sm:w-10 md:h-12 md:w-12">

                  <CheckCircle2
                    size={16}
                    className="text-brass sm:size-[18px] md:size-[22px]"
                  />

                </div>

                <h3 className="mt-2 text-sm font-semibold text-emerald-deep sm:mt-3 sm:text-base md:text-xl">

                  {item.title}

                </h3>

                <p className="mt-1.5 text-[11px] leading-4 text-ink/65 sm:mt-3 sm:text-xs sm:leading-5 md:text-[13px] md:leading-6">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================= */}
      {/* DESIGN PROCESS */}
      {/* ========================================= */}

      <section className="bg-cream py-8 sm:py-10 md:py-14">

        <div className="container-luxe max-w-5xl">

          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            <div>

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80"
                alt="Interior Design Process"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-luxe transition duration-500 hover:scale-[1.02] sm:rounded-[28px]"
              />

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-[0.22em] text-brass sm:text-[11px] sm:tracking-[0.28em]">

                OUR PROCESS

              </p>

              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-3 sm:text-3xl lg:text-4xl">

                From Vision
                <br />
                To Reality.

              </h2>

              <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6 md:space-y-8">

                {[
                  [
                    "01",
                    "Consultation",
                    "We understand your vision, lifestyle and expectations."
                  ],
                  [
                    "02",
                    "Design",
                    "Layouts, mood boards and realistic 3D visualisations."
                  ],
                  [
                    "03",
                    "Execution",
                    "Manufacturing, installation and quality inspections."
                  ],
                  [
                    "04",
                    "Handover",
                    "A beautifully finished home ready to be lived in."
                  ]
                ].map(([number, title, text]) => (

                  <div
                    key={number}
                    className="flex gap-3 sm:gap-4"
                  >

                    <div className="font-display text-xl font-semibold text-brass sm:text-2xl md:text-3xl">

                      {number}

                    </div>

                    <div>

                      <h3 className="text-sm font-semibold text-emerald-deep sm:text-base md:text-xl">

                        {title}

                      </h3>

                      <p className="mt-1 text-[11px] leading-4 text-ink/65 sm:mt-2 sm:text-xs sm:leading-5 md:text-[13px] md:leading-6">

                        {text}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================= */}
      {/* TRUSTED BRANDS */}
      {/* ========================================= */}

      <TrustedBrands />

    </>
  );
}