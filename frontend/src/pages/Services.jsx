import { useState } from "react";
import InquiryForm from "../components/InquiryForm";
import ServiceGalleryModal from "../components/ServiceGalleryModal";
import serviceData from "../data/services";
import { Helmet } from "react-helmet-async";
import { Sparkles } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <Helmet>
        <title>
          Interior Design Services in Ranchi | Modular Kitchen, Bedroom &
          False Ceiling | Lavish Living
        </title>

        <meta
          name="description"
          content="Explore Lavish Living's interior design services in Ranchi including modular kitchens, bedrooms, living rooms, false ceilings, wardrobes, offices and complete home interiors."
        />

        <meta
          name="keywords"
          content="Interior designer Ranchi, Modular kitchen Ranchi, Bedroom interiors Ranchi, False ceiling Ranchi, Wardrobe design Ranchi, Office interior Ranchi, Home interiors Jharkhand"
        />

        <link
          rel="canonical"
          href="https://lavishlivinginteriors.com/services"
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-luxe py-8 text-ivory sm:py-10 md:py-16">
        <div className="container-luxe max-w-3xl">
          <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-xs">
            Services
          </p>

          <h1 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl">
              A one-stop interior solution.
         </h1>

          <p className="mt-2 text-xs leading-5 text-ivory/80 sm:mt-4 sm:text-sm sm:leading-6 md:text-base">
            Every trade under one roof — design, carpentry, electrical, false
            ceiling, painting, and installation. No coordinating multiple
            contractors.
          </p>
        </div>
      </section>

      {/* ========================================= */}
      {/* SERVICES — Icon constellation (desktop) */}
      {/* ========================================= */}

      <section className="hidden bg-white py-16 md:block lg:py-20">
        <div className="container-luxe">

          <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-10 lg:gap-x-12">

            {serviceData.map((service, i) => {
              const Icon = service.icon;
              const big = i % 3 === 1;

              return (
                <button
                  key={service.slug}
                  onClick={() => setSelectedService(service)}
                  className={`group flex flex-col items-center ${
                    big ? "mt-0" : "mt-10"
                  }`}
                >
                  <span
                    className={`relative grid place-items-center bg-gradient-luxe text-brass shadow-luxe transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_-10px_rgba(200,165,96,0.45)] ${
                      big ? "h-28 w-28 lg:h-32 lg:w-32" : "h-20 w-20 lg:h-24 lg:w-24"
                    }`}
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      background: "radial-gradient(circle at 50% 30%, rgba(227,201,138,0.35), transparent 70%)",
                    }} />

                    <Icon
                      className={`relative transition-transform duration-500 group-hover:scale-110 ${
                        big ? "h-11 w-11 lg:h-12 lg:w-12" : "h-8 w-8 lg:h-9 lg:w-9"
                      }`}
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ink/60 transition-colors duration-300 group-hover:text-brass lg:text-xs">
                    {service.title}
                  </span>
                </button>
              );
            })}

          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* SERVICES — Zigzag timeline (mobile) */}
      {/* ========================================= */}

      <section className="bg-white py-8 md:hidden">
        <div className="container-luxe">

          <div className="relative">

            {/* Center connecting line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brass/25 to-transparent" />

            <div className="relative flex flex-col gap-1">

              {serviceData.map((service, i) => {
                const Icon = service.icon;
                const left = i % 2 === 0;

                return (
                  <button
                    key={service.slug}
                    onClick={() => setSelectedService(service)}
                    className={`flex items-center gap-3 py-3 ${
                      left ? "flex-row" : "flex-row-reverse text-right"
                    }`}
                  >
                    <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-luxe text-brass shadow-md transition-transform duration-300 active:scale-95">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>

                    <span
                      className={`flex-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-deep ${
                        left ? "text-left" : "text-right"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================= */}
{/* REQUEST A QUOTE — Compact accent card */}
{/* ========================================= */}

<section className="bg-white py-6 sm:py-8 md:py-10">

  <div className="container-luxe">

    <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-emerald/10 bg-gradient-luxe px-4 py-5 text-center shadow-luxe sm:flex-row sm:gap-5 sm:rounded-[24px] sm:px-6 sm:py-5 sm:text-left md:px-8">

      <span
        className="grid h-10 w-10 shrink-0 place-items-center bg-brass/15 sm:h-12 sm:w-12"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <Sparkles className="h-4 w-4 text-brass sm:h-5 sm:w-5" strokeWidth={1.75} />
      </span>

      <div className="flex-1">
        <h2 className="font-display text-base font-semibold tracking-tight text-white sm:text-lg md:text-xl">
          Get a free, no-obligation quote
        </h2>
        <p className="mt-0.5 text-[11px] text-ivory/65 sm:text-xs">
          Transparent pricing, ready within 48 hours.
        </p>
      </div>

      <button
        onClick={() =>
          document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
        }
        className="w-full shrink-0 rounded-full bg-brass px-5 py-2 text-xs font-semibold text-emerald-deep transition hover:bg-brass-light sm:w-auto sm:px-6 sm:py-2.5 sm:text-sm"
      >
        Request Quote
      </button>

    </div>

    <div id="quote-form" className="mx-auto mt-4 max-w-lg scroll-mt-24 sm:mt-5">
      <InquiryForm compact />
    </div>

  </div>

</section>

      {/* Service Modal */}
      <ServiceGalleryModal
        open={!!selectedService}
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}