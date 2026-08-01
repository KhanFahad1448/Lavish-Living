import { useEffect, useState } from "react";
import { X,CheckCircle2,ArrowRight,} from "lucide-react";

import galleryData from "../data/galleryData";
import ImageLightbox from "./ImageLightbox";
import InquiryForm from "./InquiryForm";




export default function ServiceGalleryModal({
  open,
  onClose,
  service,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open || !service) return null;

  const images = Array.isArray(service.gallery)
  ? service.gallery
  : galleryData[service.gallery] || [];

  function openImage(index) {
    setSelectedImage(index);
  }

  function closeImage() {
    setSelectedImage(null);
  }

  return (
    <>
      <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm">

        {/* Main Modal */}

        <div className="absolute inset-0 overflow-y-auto">

          <div className="mx-auto min-h-screen max-w-7xl px-5 py-8 lg:px-10">

            <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-[0_25px_70px_rgba(0,0,0,.18)] sm:p-6 lg:p-8">

              {/* Close */}

              <button
                onClick={onClose}
                className="
                            absolute
                            right-4
                            top-4
                            z-30
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white/95
                            shadow-lg
                            transition-all
                            duration-300
                            hover:rotate-90
                            hover:scale-105
                            md:right-6
                            md:top-6
                            "
                       >
                <X
                  size={26}
                  className="text-emerald-deep"
                />
              </button>

          {/* ===== Luxury Editorial Hero ===== */}

<section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0f1d18] shadow-[0_30px_80px_rgba(0,0,0,.25)]">

          {/* Background */}

         <div
          className="absolute inset-0 opacity-30"
          style={{
          backgroundImage: `url(${service.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
           }}
      />

  <div className="absolute inset-0 bg-gradient-to-r from-[#07110d] via-[#07110ddd] to-transparent" />

  <div className="relative z-10 grid items-center gap-16 px-5 py-6 lg:grid-cols-[1fr_1fr] md:px-8 md:py-8">

    {/* Left */}

<div className="max-w-lg">

      <span className="inline-flex items-center rounded-full border border-brass/30 bg-brass/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-brass sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.28em]">

        Luxury Collection

      </span>

      <h1 className="mt-3 font-display text-2xl leading-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl xl:text-6xl">

        {service.title}

      </h1>

      <p className="mt-2 max-w-md text-xs leading-6 text-white/70 sm:mt-3 sm:text-sm sm:leading-7 md:text-[15px]">

        Designed with premium materials, timeless aesthetics and
        handcrafted precision to elevate everyday living.

      </p>

      {/* Luxury Specs */}

      <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">

        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur sm:px-4 sm:py-3">

          <p className="text-[9px] uppercase tracking-[0.18em] text-brass sm:text-[10px] sm:tracking-[0.22em]">

            Timeline

          </p>

          <p className="mt-1 text-xs font-semibold text-white sm:text-sm">

            30–45 Days

          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur sm:px-4 sm:py-3">

          <p className="text-[9px] uppercase tracking-[0.18em] text-brass sm:text-[10px] sm:tracking-[0.22em]">

            Warranty

          </p>

          <p className="mt-1 text-xs font-semibold text-white sm:text-sm">

            10 Years

          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur sm:px-4 sm:py-3">

          <p className="text-[9px] uppercase tracking-[0.18em] text-brass sm:text-[10px] sm:tracking-[0.22em]">

            Finish

          </p>

          <p className="mt-1 text-xs font-semibold text-white sm:text-sm">

            Premium

          </p>

        </div>

      </div>

      <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">

        <button
          onClick={() =>
            document
              .getElementById("gallery")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-xl bg-brass px-5 py-2.5 text-xs font-semibold text-emerald-deep transition hover:bg-brass-light sm:px-7 sm:py-3.5 sm:text-sm"
        >

          View Gallery

        </button>

        <button
          onClick={() =>
            document
              .getElementById("consultation")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-sm"
        >

          Free Consultation

        </button>

      </div>

    </div>

    {/* Right Editorial Image */}

    <div className="relative hidden md:block">

      <div className="overflow-hidden rounded-[22px]">

        <img
          src={service.heroImage}
          alt={service.title}
          className="h-[290px] w-full object-cover"
        />

      </div>

      <div className="absolute -bottom-5 left-5 rounded-2xl border border-white/10 bg-white/95 px-5 py-4 shadow-2xl">

        <p className="text-[10px] uppercase tracking-[0.24em] text-brass">

          Signature Design

        </p>

        <p className="mt-1 text-sm font-semibold text-emerald-deep">

          Crafted Around Your Lifestyle

        </p>

      </div>

    </div>

  </div>

</section>

              {/* ================= Editorial Story ================= */}

<section className="mt-10">

  <div className="mx-auto max-w-7xl">

    <div className="grid gap-20 lg:grid-cols-[1fr_1fr]">

      {/* Left */}

<div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-brass sm:text-[10px] sm:tracking-[0.30em]">

          OUR DESIGN PHILOSOPHY

        </p>

        <h2 className="mt-2 font-display text-2xl leading-tight text-emerald-deep sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl">

          Crafted Around
          <br />
          The Way You Live.

        </h2>

        <p className="mt-3 max-w-xl text-xs leading-6 text-ink/70 sm:mt-5 sm:text-[15px] sm:leading-8">

          Every Lavish Living project begins with understanding the
          people who will live inside it. We don't simply install
          interiors—we curate experiences through proportion,
          lighting, materials and handcrafted detailing.

        </p>

        <p className="mt-3 max-w-xl text-xs leading-6 text-ink/65 sm:mt-5 sm:text-[15px] sm:leading-8">

          Every corner is designed to feel timeless today and
          beautiful for years to come.

        </p>

      </div>

      {/* Right Luxury Specs */}

<div className="grid gap-3 sm:gap-4">

        <div className="rounded-2xl border border-emerald/10 bg-white p-3 shadow-sm sm:p-5">

          <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-[10px] sm:tracking-[0.25em]">

            Materials

          </p>

          <h3 className="mt-1 text-sm font-semibold text-emerald-deep sm:mt-2 sm:text-lg">

            Premium Surfaces

          </h3>

          <p className="mt-1 text-xs leading-5 text-ink/65 sm:mt-2 sm:text-sm sm:leading-7">

            Italian laminates, engineered wood,
            PU finishes, quartz surfaces and
            premium hardware.

          </p>

        </div>

        <div className="rounded-2xl border border-emerald/10 bg-white p-3 shadow-sm sm:p-5">

          <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-[10px] sm:tracking-[0.25em]">

            Craftsmanship

          </p>

          <h3 className="mt-1 text-sm font-semibold text-emerald-deep sm:mt-2 sm:text-lg">

            Built In-House

          </h3>

          <p className="mt-1 text-xs leading-5 text-ink/65 sm:mt-2 sm:text-sm sm:leading-7">

            Every installation is handled by
            experienced craftsmen ensuring
            precision, consistency and longevity.

          </p>

        </div>

        <div className="rounded-2xl border border-emerald/10 bg-gradient-to-br from-[#f9f6ef] to-white p-3 shadow-sm sm:p-5">

          <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-[10px] sm:tracking-[0.25em]">

            Personalisation

          </p>

          <h3 className="mt-1 text-sm font-semibold text-emerald-deep sm:mt-2 sm:text-lg">

            Tailored To You

          </h3>

          <p className="mt-1 text-xs leading-5 text-ink/65 sm:mt-2 sm:text-sm sm:leading-7">

            No catalogue designs.
            Every space is customised to your
            lifestyle, storage needs and aesthetic.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>
                            {/* ================= Luxury Specifications ================= */}

<section className="mt-8 sm:mt-12">

  <div className="mx-auto max-w-7xl">

    <div className="mb-5 flex items-end justify-between sm:mb-8">

      <div>

        <p className="text-[9px] uppercase tracking-[0.25em] text-brass sm:text-[10px] sm:tracking-[0.30em]">

          DESIGN DETAILS

        </p>

        <h2 className="mt-2 font-display text-2xl leading-tight text-emerald-deep sm:text-3xl md:text-4xl lg:text-5xl">

          Every Detail Matters

        </h2>

      </div>

      <span className="hidden rounded-full border border-brass/20 bg-brass/5 px-4 py-2 text-xs uppercase tracking-[0.20em] text-brass md:inline-flex">

        Luxury Specifications

      </span>

    </div>

    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-2 xl:grid-cols-4">

      {/* Card 1 */}

      <div className="rounded-2xl border border-emerald/10 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-xl sm:p-5">

        <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-[10px] sm:tracking-[0.25em]">

          MATERIALS

        </p>

        <h3 className="mt-2 text-sm font-semibold text-emerald-deep sm:mt-3 sm:text-lg">

          Premium Selection

        </h3>

        <ul className="mt-2 space-y-1 text-[11px] leading-5 text-ink/65 sm:mt-4 sm:space-y-2 sm:text-sm sm:leading-7">

          <li>• Italian Laminates</li>
          <li>• Quartz Surfaces</li>
          <li>• Soft-close Hardware</li>
          <li>• PU Finish</li>

        </ul>

      </div>

      {/* Card 2 */}

      <div className="rounded-2xl border border-emerald/10 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-xl sm:p-5">

        <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-[10px] sm:tracking-[0.25em]">

          EXECUTION

        </p>

        <h3 className="mt-2 text-sm font-semibold text-emerald-deep sm:mt-3 sm:text-lg">

          Precision Built

        </h3>

        <ul className="mt-2 space-y-1 text-[11px] leading-5 text-ink/65 sm:mt-4 sm:space-y-2 sm:text-sm sm:leading-7">

          <li>• In-house Team</li>
          <li>• Factory Finished</li>
          <li>• Site Supervision</li>
          <li>• Quality Inspection</li>

        </ul>

      </div>

      {/* Card 3 */}

      <div className="rounded-2xl border border-emerald/10 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-xl sm:p-5">

        <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-[10px] sm:tracking-[0.25em]">

          DELIVERY

        </p>

        <h3 className="mt-2 text-sm font-semibold text-emerald-deep sm:mt-3 sm:text-lg">

          Hassle Free

        </h3>

        <ul className="mt-2 space-y-1 text-[11px] leading-5 text-ink/65 sm:mt-4 sm:space-y-2 sm:text-sm sm:leading-7">

          <li>• 30–45 Day Timeline</li>
          <li>• Installation Included</li>
          <li>• Clean Finish</li>
          <li>• After-sales Support</li>

        </ul>

      </div>

      {/* Card 4 */}

      <div className="rounded-2xl bg-gradient-luxe p-3 text-white shadow-luxe sm:p-5">

        <p className="text-[9px] uppercase tracking-[0.2em] text-brass sm:text-[10px] sm:tracking-[0.25em]">

          PROMISE

        </p>

        <h3 className="mt-2 text-sm font-semibold sm:mt-3 sm:text-lg">

          Crafted To Last

        </h3>

        <p className="mt-2 text-[11px] leading-5 text-white/75 sm:mt-4 sm:text-sm sm:leading-7">

          Every Lavish Living interior is designed
          to remain elegant, functional and timeless,
          combining luxury with everyday practicality.

        </p>

        <div className="mt-3 inline-flex rounded-full bg-brass px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-deep sm:mt-6 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">

          10 Year Service Support

        </div>

      </div>

    </div>

  </div>

</section>
              {/* ================= Luxury Editorial Gallery ================= */}

<section
  id="gallery"
  className="mt-14"
>

  <div className="mx-auto max-w-7xl">

    {/* Heading */}

    <div className="mb-8 flex items-end justify-between">

      <div>

        <p className="text-[10px] uppercase tracking-[0.30em] text-brass">

          PROJECT GALLERY

        </p>

        <h2 className="mt-2 font-display text-2xl leading-tight text-emerald-deep sm:text-3xl lg:text-5xl">

          The {service.title} Edit

        </h2>

      </div>

      <p className="hidden max-w-xs text-right text-sm leading-6 text-ink/55 md:block">

        Every project reflects a balance between
        functionality, luxury and timeless design.

      </p>

    </div>

    {/* Compact Modular Grid */}

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">

      {images.map((img, index) => (

        <button
          key={img.id ?? index}
          onClick={() => openImage(index)}
          className="
            group
            relative
            aspect-square
            overflow-hidden
            rounded-2xl
            bg-emerald-deep/5
            shadow-md
            ring-1
            ring-emerald/10
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-xl
            hover:ring-brass/40
          "
        >

          {/* Image */}

          <img
            src={img.image}
            alt={img.title || `${service.title} ${index + 1}`}
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          {/* Overlay gradient for legibility */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#07110dcc] via-transparent to-transparent opacity-80" />

          {/* Index badge */}

          <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[10px] font-semibold text-emerald-deep backdrop-blur">

            {String(index + 1).padStart(2, "0")}

          </div>

          {/* Compact label */}

          <div className="absolute inset-x-0 bottom-0 px-2.5 py-2">

            <p className="text-[9px] uppercase tracking-[0.18em] text-brass">

              {img.style}

            </p>

            <p className="mt-0.5 truncate text-xs font-semibold text-white">

              {img.title}

            </p>

          </div>

        </button>

      ))}

    </div>

  </div>

</section>
              {/* IMAGE LIGHTBOX */}

              {selectedImage !== null && (

                <ImageLightbox
                  images={images}
                  currentIndex={selectedImage}
                  setCurrentIndex={setSelectedImage}
                  onClose={closeImage}
                />

              )}

       {/* ================= Luxury Consultation ================= */}

<section
  id="consultation"
  className="mt-16 mb-2"
>

  <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-emerald/10 bg-gradient-to-br from-[#0b1713] via-[#10221b] to-[#13281f] shadow-[0_25px_80px_rgba(0,0,0,.25)]">

    <div className="grid items-center md:grid-cols-[1fr_420px]">

      {/* Left Content */}

<div className="rounded-2xl bg-gradient-luxe p-4 text-white shadow-luxe sm:p-5 md:p-8">

        <p className="text-[9px] uppercase tracking-[0.25em] text-brass sm:text-[10px] sm:tracking-[0.30em]">

          PRIVATE CONSULTATION

        </p>

        <h2 className="mt-2 max-w-md font-display text-2xl leading-tight text-white sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl">

          Let's Design
          <br />
          Something Beautiful.

        </h2>

        <p className="mt-3 max-w-lg text-xs leading-6 text-white/70 sm:mt-5 sm:text-sm sm:leading-7">

          Whether you're planning a complete home,
          a luxury modular kitchen or simply
          exploring ideas, our designers will guide
          you through every detail.

        </p>

        {/* Editorial Stats */}

        <div className="mt-5 grid grid-cols-3 gap-3 sm:mt-8 sm:gap-4">

          <div>

            <h3 className="font-display text-lg text-brass sm:text-2xl">

              45

            </h3>

            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/60 sm:text-[11px] sm:tracking-[0.20em]">

              Day Delivery

            </p>

          </div>

          <div>

            <h3 className="font-display text-lg text-brass sm:text-2xl">

              250+

            </h3>

            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/60 sm:text-[11px] sm:tracking-[0.20em]">

              Projects

            </p>

          </div>

          <div>

            <h3 className="font-display text-lg text-brass sm:text-2xl">

              10Y

            </h3>

            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/60 sm:text-[11px] sm:tracking-[0.20em]">

              Support

            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="bg-white p-5 md:p-6">

        <div className="mb-5">

          <p className="text-[10px] uppercase tracking-[0.25em] text-brass">

            START TODAY

          </p>

          <h3 className="mt-2 font-display text-2xl text-emerald-deep">

            Book Your Consultation

          </h3>

          <p className="mt-2 text-sm leading-6 text-ink/55">

            Free design discussion with our experts.

          </p>

        </div>

        <InquiryForm compact />

      </div>

    </div>

  </div>

</section>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}
