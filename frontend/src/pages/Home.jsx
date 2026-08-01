import Testimonials from "../components/Testimonials";
import ReviewForm from "../components/ReviewForm";
import FAQ from "../components/FAQ";
import TrustedBrands from "../components/TrustedBrands";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChefHat, BedDouble, Sofa, Lightbulb, DoorOpen, Building2 } from "lucide-react";
import InquiryForm from "../components/InquiryForm";

import { useState } from "react";
import ServiceGalleryModal from "../components/ServiceGalleryModal";
import serviceData from "../data/services";

//Image Imports
import kitchen1 from "../assets/service-gallery/modular-kitchen/kitchen6.jpg.jpg";
import bedroom1 from "../assets/service-gallery/bedroom/bedroom4.jpg.jpg";
import living1 from "../assets/service-gallery/living-dining/living&dining1.jpg.jpg";
import ceiling1 from "../assets/service-gallery/false-ceiling/FalseCeiling1.jpg.jpg";
import wardrobe1 from "../assets/service-gallery/wardrobes/wardrobe9.jpg.jpg";
import dining1 from "../assets/service-gallery/living-dining/living&dining8.jpg.jpg";




const services = [
  { icon: ChefHat, title: "Modular Kitchen", desc: "Ergonomic layouts, premium hardware, dust-free finishes." },
  { icon: BedDouble, title: "Bedroom", desc: "Restful palettes, wardrobes & bespoke headboards." },
  { icon: Sofa, title: "Living Hall", desc: "TV units, accent walls and conversation-led layouts." },
  { icon: Lightbulb, title: "False Ceiling", desc: "Cove, tray and POP ceilings with mood lighting." },
  { icon: DoorOpen, title: "Wardrobes & Storage", desc: "Floor-to-ceiling, laminate or lacquer finishes." },
  { icon: Building2, title: "Office / Commercial", desc: "Showrooms, clinics, cafés and workspaces." },
];

const portfolio = [
  {
    tag: "Modular Kitchen",
    img: kitchen1,
  },

  {
    tag: "Master Bedroom",
    img: bedroom1,
  },

  {
    tag: "Living Hall",
    img: living1,
  },

  {
    tag: "False Ceiling",
    img: ceiling1,
  },

  {
    tag: "Wardrobe",
    img: wardrobe1,
  },

  {
    tag: "Dining",
    img: dining1,
  },
];




export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <>
      <Helmet>
  <title>
    Best Interior Designer in Ranchi | Modular Kitchen |
    Lavish Living
  </title>

  <meta
    name="description"
    content="Lavish Living is Ranchi's premium interior design studio specializing in modular kitchens, bedrooms, wardrobes, false ceilings, living rooms and complete home interiors. Book your free consultation today."
  />

  <meta
    name="keywords"
    content="Interior Designer Ranchi, Modular Kitchen Ranchi, Wardrobe Design Ranchi, False Ceiling Ranchi, Bedroom Interior Ranchi, Living Room Design Ranchi, Home Interior Jharkhand, Lavish Living"
  />

  <meta
    property="og:title"
    content="Lavish Living | Interior Design Studio in Ranchi"
  />

  <meta
    property="og:description"
    content="Luxury interior solutions for homes and offices in Ranchi."
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:image"
    content="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
  />

  <meta
    property="og:url"
    content="https://lavishlivinginteriors.in/"
  />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <link
    rel="canonical"
    href="https://lavishlivinginteriors.in/"
  />
</Helmet>


      {/* HERO */}
<section className="relative overflow-hidden">

  <div className="absolute inset-0 -z-10 bg-gradient-luxe" />

  <div
    className="absolute inset-0 -z-10 opacity-30"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  <div className="container-luxe grid gap-6 py-10 md:grid-cols-2 md:gap-8 md:py-14 lg:py-16">

    {/* LEFT */}

    <div className="flex flex-col justify-center text-ivory">

      <p className="mb-2 inline-flex w-fit rounded-full border border-brass/40 bg-emerald-deep/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brass sm:text-[11px]">

        Ranchi · Since 2019

      </p>

      <h1 className="font-display text-[30px] leading-[1.15] sm:text-[38px] lg:text-[46px]">

        Interiors that feel{" "}

        <span className="text-brass-gradient">

          lavishly lived-in.

        </span>

      </h1>

      <p className="mt-3 max-w-md text-[14px] leading-6 text-ivory/80 sm:text-[15px]">

        One studio. Every room. From modular kitchens to false ceilings —
        we design, build and install end-to-end so you move in to a home
        that's truly yours.

      </p>

      <div className="mt-5 flex flex-wrap gap-2">

        <a
          href="#inquiry"
          className="btn-primary bg-brass px-4 py-2 text-sm text-emerald-deep hover:bg-brass-light"
        >
          Get a free design consult

          <ArrowRight className="h-4 w-4" />

        </a>

        <Link
          to="/portfolio"
          className="btn-outline border-ivory/30 px-4 py-2 text-sm text-ivory hover:bg-ivory hover:text-emerald-deep"
        >
          See our work
        </Link>

      </div>

      <ul className="mt-5 grid gap-2 text-[12px] text-ivory/80 sm:grid-cols-2">

        {[
          "10-year service warranty",
          "ISO-certified materials",
          "In-house carpentry team",
          "Flat 45-day turnaround",
        ].map((f) => (

          <li
            key={f}
            className="flex items-center gap-2"
          >

            <Check className="h-3.5 w-3.5 text-brass" />

            {f}

          </li>

        ))}

      </ul>

    </div>

    {/* RIGHT */}

    <div
      className="rounded-2xl bg-ivory/95 p-4 shadow-luxe md:p-5 lg:p-6"
      id="inquiry"
    >

      <h2 className="font-display text-xl text-emerald-deep sm:text-2xl">

        Book a free consult

      </h2>

      <p className="mb-3 mt-1 text-[13px] leading-6 text-ink/60">

        Tell us about your space — our designer reaches out within 24
        hours.

      </p>

      <InquiryForm compact />

     </div>

   </div>

    </section>

      {/* SERVICES */}

<section className="bg-cream py-8 sm:py-10 md:py-16">
  <div className="container-luxe">

    <div className="mb-6 max-w-2xl sm:mb-8 md:mb-12">
      <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-xs">What we do</p>
      <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-emerald-deep sm:text-2xl md:text-3xl lg:text-4xl">Every room, one studio.</h2>
      <p className="mt-2 text-xs leading-5 text-ink/70 sm:mt-3 sm:text-sm md:text-base">From the first sketch to the last screw — modular kitchens, wardrobes, ceilings, full-home — handled by one team you can call.</p>
    </div>

    {/* ========================================= */}
    {/* Icon constellation (desktop) */}
    {/* ========================================= */}

    <div className="hidden md:block">

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

    {/* ========================================= */}
    {/* Zigzag timeline (mobile) */}
    {/* ========================================= */}

    <div className="md:hidden">

      <div className="relative">

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

  </div>
</section>

      {/* PORTFOLIO */}
      <section className="section-pad">
        <div className="container-luxe">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brass">Proof of work</p>
              <h2 className="mt-2 font-display text-4xl text-emerald-deep">Recent projects across Ranchi.</h2>
            </div>
            <Link to="/portfolio" className="btn-outline">View full portfolio <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {portfolio.map((p, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={p.img} alt={p.tag} className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}`} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-emerald-deep/10 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-brass px-3 py-1 text-xs font-medium text-emerald-deep">{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials */}

     <Testimonials />



     {/* Share Your Experience */}

    <section className="section-pad">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">

      <div>

         <p className="text-xs uppercase tracking-[0.2em] text-brass">
          Share Your Experience
        </p>

        <h2 className="mt-3 font-display text-5xl text-emerald-deep">
          Every beautiful home deserves a story.
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-ink/70">
          If Lavish Living transformed your space, we'd love to hear about
          your experience. Your review helps future homeowners make
          confident decisions.
       </p>

      <div className="mt-10 space-y-4">

        <div className="flex items-center gap-3">

          <span className="text-brass">★★★★★</span>

          <span className="text-sm text-ink/70">
            Trusted by families across Ranchi
          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-brass">✓</span>

          <span className="text-sm text-ink/70">
            Genuine customer experiences
          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-brass">✓</span>

          <span className="text-sm text-ink/70">
            Every review is verified before publishing
          </span>

        </div>

      </div>

    </div>

    <div className="rounded-3xl bg-white p-8 shadow-luxe">

      <ReviewForm />

    </div>

    </div>
   </section>

  
      {/* CTA */}
      <section className="section-pad bg-gradient-luxe text-ivory">
        <div className="container-luxe grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Ready to start your space?</h2>
            <p className="mt-3 text-ivory/80">Visit our studio at Khan Complex, Bariatu Road, Ranchi — or send your details and we'll come to you.</p>
          </div>
          {/* <div className="rounded-2xl bg-ivory p-6 text-ink shadow-luxe md:p-8">
            <InquiryForm />
          </div> */}
        </div> 
      </section>


      <FAQ />

      <TrustedBrands />


    <ServiceGalleryModal
    open={selectedService !== null}
    service={selectedService}
    onClose={() => setSelectedService(null)}
     />

   </>
  );
}