import Testimonials from "../components/Testimonials";
import ReviewForm from "../components/ReviewForm";
import FAQ from "../components/FAQ";
import TrustedBrands from "../components/TrustedBrands";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChefHat, BedDouble, Sofa, Lightbulb, DoorOpen, Building2 } from "lucide-react";
import { Star, MessageCircleHeart, BadgeCheck } from "lucide-react";
import { Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
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
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8 md:mb-12">
      <div>
        <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-xs">Proof of work</p>
        <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-emerald-deep sm:text-2xl md:text-4xl">Recent projects across Ranchi.</h2>
      </div>
      <Link to="/portfolio" className="btn-outline">View full portfolio <ArrowRight className="h-4 w-4" /></Link>
    </div>

    {/* Desktop bento grid */}

    <div className="hidden md:grid md:grid-cols-3 md:gap-4">
      {portfolio.map((p, i) => (
        <div key={i} className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
          <img src={p.img} alt={p.tag} className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}`} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-emerald-deep/10 to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full bg-brass px-3 py-1 text-xs font-medium text-emerald-deep">{p.tag}</span>
        </div>
      ))}
    </div>

    {/* Mobile grid — large, clearly visible images */}

    <div className="grid grid-cols-2 gap-3 md:hidden">
      {portfolio.map((p, i) => (
        <div
          key={i}
          className={`group relative overflow-hidden rounded-2xl shadow-soft ${
            i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
          }`}
        >
          <img
            src={p.img}
            alt={p.tag}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/75 via-emerald-deep/5 to-transparent" />
          <span className="absolute bottom-2.5 left-2.5 rounded-full bg-brass px-2.5 py-1 text-[10px] font-medium text-emerald-deep">
            {p.tag}
          </span>
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

  <p className="text-[9px] uppercase tracking-[0.18em] text-brass sm:text-[10px] sm:tracking-[0.24em]">
    Share Your Experience
  </p>

  <h2 className="mt-1.5 font-display text-lg font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-2 sm:text-xl md:text-2xl lg:text-4xl">
    Every beautiful home deserves a story.
  </h2>

  <p className="mt-2 max-w-lg text-xs leading-5 text-ink/70 sm:mt-3 sm:text-sm sm:leading-6 lg:text-base lg:leading-7">
    If Lavish Living transformed your space, we'd love to hear about
    your experience. Your review helps future homeowners make
    confident decisions.
  </p>

  {/* Trust chips */}

  <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">

    <div className="rounded-xl border border-emerald/10 bg-white p-2.5 text-center shadow-sm sm:rounded-2xl sm:p-3.5">
      <div className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-brass/10 sm:h-9 sm:w-9">
        <Star size={13} className="fill-brass text-brass sm:size-4" />
      </div>
      <p className="mt-1.5 text-[9px] font-medium leading-tight text-ink/65 sm:mt-2 sm:text-[11px]">
        Trusted by families
      </p>
    </div>

    <div className="rounded-xl border border-emerald/10 bg-white p-2.5 text-center shadow-sm sm:rounded-2xl sm:p-3.5">
      <div className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-brass/10 sm:h-9 sm:w-9">
        <MessageCircleHeart size={13} className="text-brass sm:size-4" />
      </div>
      <p className="mt-1.5 text-[9px] font-medium leading-tight text-ink/65 sm:mt-2 sm:text-[11px]">
        Genuine experiences
      </p>
    </div>

    <div className="rounded-xl border border-emerald/10 bg-white p-2.5 text-center shadow-sm sm:rounded-2xl sm:p-3.5">
      <div className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-brass/10 sm:h-9 sm:w-9">
        <BadgeCheck size={13} className="text-brass sm:size-4" />
      </div>
      <p className="mt-1.5 text-[9px] font-medium leading-tight text-ink/65 sm:mt-2 sm:text-[11px]">
        Verified before publishing
      </p>
    </div>

  </div>

</div>
    <div className="rounded-3xl bg-white p-8 shadow-luxe">

      <ReviewForm />

    </div>

    </div>
   </section>

  
{/* ========================================= */}
{/* CTA — Editorial close */}
{/* ========================================= */}

<section className="relative overflow-hidden bg-emerald-deep py-8 text-ivory sm:py-8 md:py-10">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,165,96,0.14),transparent_50%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,165,96,0.08),transparent_45%)]" />

  <div className="container-luxe relative">

    {/* Headline */}

    <div className="mx-auto max-w-2xl text-center">

      <p className="text-[9px] uppercase tracking-[0.24em] text-brass sm:text-[10px] sm:tracking-[0.26em]">
        Let's Build Something Lavish
      </p>

      <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl">
        Ready to start
        <br />
        your space?
      </h2>

      <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-ivory/70 sm:mt-3 sm:text-xs sm:leading-5 md:text-sm md:leading-6">
        Visit our studio at Khan Complex, Bariatu Road, Ranchi — or reach out
        directly and we'll come to you.
      </p>

    </div>

    {/* Quick action cards */}

    <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-2.5 md:mt-8">

      
      <a  href="tel:+918085509001"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition duration-300 hover:border-brass/40 hover:bg-white/10 sm:flex-col sm:items-start sm:gap-0 sm:rounded-xl sm:p-3"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass/15 text-brass transition duration-300 group-hover:scale-105 sm:h-8 sm:w-8">
          <Phone size={16} className="sm:size-[14px]" />
        </span>
        <div className="sm:mt-2.5">
          <p className="text-[9px] uppercase tracking-[0.14em] text-ivory/50 sm:text-[9px]">Call Us</p>
          <p className="mt-0.5 text-xs font-semibold text-ivory sm:text-xs">+91 80855 09001</p>
        </div>
        <ArrowUpRight size={14} className="ml-auto text-ivory/30 transition group-hover:text-brass sm:hidden" />
      </a>

      
      <a href="https://wa.me/918085509001"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition duration-300 hover:border-brass/40 hover:bg-white/10 sm:flex-col sm:items-start sm:gap-0 sm:rounded-xl sm:p-3"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass/15 text-brass transition duration-300 group-hover:scale-105 sm:h-8 sm:w-8">
          <MessageCircle size={16} className="sm:size-[14px]" />
        </span>
        <div className="sm:mt-2.5">
          <p className="text-[9px] uppercase tracking-[0.14em] text-ivory/50 sm:text-[9px]">WhatsApp</p>
          <p className="mt-0.5 text-xs font-semibold text-ivory sm:text-xs">Chat with us</p>
        </div>
        <ArrowUpRight size={14} className="ml-auto text-ivory/30 transition group-hover:text-brass sm:hidden" />
      </a>

      
      <a  href="https://maps.google.com/maps?q=Bariatu%20Road%20Ranchi"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition duration-300 hover:border-brass/40 hover:bg-white/10 sm:flex-col sm:items-start sm:gap-0 sm:rounded-xl sm:p-3"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass/15 text-brass transition duration-300 group-hover:scale-105 sm:h-8 sm:w-8">
          <MapPin size={16} className="sm:size-[14px]" />
        </span>
        <div className="sm:mt-2.5">
          <p className="text-[9px] uppercase tracking-[0.14em] text-ivory/50 sm:text-[9px]">Visit Studio</p>
          <p className="mt-0.5 text-xs font-semibold text-ivory sm:text-xs">Bariatu Road, Ranchi</p>
        </div>
        <ArrowUpRight size={14} className="ml-auto text-ivory/30 transition group-hover:text-brass sm:hidden" />
      </a>

    </div>

    {/* Stats strip */}

    <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-6 border-t border-white/10 pt-5 sm:mt-6 sm:gap-8 sm:pt-4 md:mt-8">

      <div className="text-center">
        <p className="font-display text-lg font-semibold text-brass sm:text-lg">250+</p>
        <p className="mt-0.5 text-[8px] uppercase tracking-[0.14em] text-ivory/50 sm:text-[9px] sm:tracking-[0.16em]">Projects</p>
      </div>

      <div className="h-8 w-px bg-white/10" />

      <div className="text-center">
        <p className="font-display text-lg font-semibold text-brass sm:text-lg">45</p>
        <p className="mt-0.5 text-[8px] uppercase tracking-[0.14em] text-ivory/50 sm:text-[9px] sm:tracking-[0.16em]">Days Delivery</p>
      </div>

      <div className="h-8 w-px bg-white/10" />

      <div className="text-center">
        <p className="font-display text-lg font-semibold text-brass sm:text-lg">10Y</p>
        <p className="mt-0.5 text-[8px] uppercase tracking-[0.14em] text-ivory/50 sm:text-[9px] sm:tracking-[0.16em]">Warranty</p>
      </div>

    </div>

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