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

  const images = galleryData[service.gallery] || [];

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

          <div className="mx-auto min-h-screen max-w-7xl px-5 py-12">

            <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">

              {/* Close */}

              <button
                onClick={onClose}
                className="absolute right-10 top-10 z-20 rounded-full bg-white/90 p-3 transition hover:rotate-90 hover:bg-white"
              >
                <X
                  size={26}
                  className="text-emerald-deep"
                />
              </button>

              {/* HERO */}

              <section className="relative h-[520px] overflow-hidden">

                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

                <div className="relative z-10 flex h-full items-center">

                  <div className="max-w-3xl px-10 md:px-16">

                    <span className="rounded-full bg-brass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-deep">

                      Lavish Living Signature Collection

                    </span>

                    <h1 className="mt-6 font-display text-5xl leading-tight text-white md:text-6xl">

                      {service.title}

                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">

                      {service.shortDescription}

                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                      <button
                        onClick={() =>
                          document
                            .getElementById("book-consultation")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            })
                        }
                        className="inline-flex items-center gap-3 rounded-full bg-brass px-7 py-4 font-semibold text-emerald-deep transition hover:scale-105"
                      >
                        Book Free Consultation

                        <ArrowRight size={18} />
                      </button>

                      <button
                        onClick={() =>
                          document
                            .getElementById("gallery-section")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            })
                        }
                        className="rounded-full border border-white/40 px-7 py-4 font-medium text-white transition hover:bg-white hover:text-emerald-deep"
                      >
                        View Designs
                      </button>

                    </div>

                  </div>

                </div>

              </section>

              {/* ABOUT */}

              <section className="px-8 py-16 md:px-16">

                <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-brass">
                      Premium Interior Solution
                    </p>

                    <h2 className="mt-4 font-display text-4xl text-emerald-deep">
                      Designed Around Your Lifestyle
                    </h2>

                    <div className="mt-5 h-1 w-24 rounded-full bg-brass" />

                    <p className="mt-8 leading-8 text-ink/70">

                      Every project by Lavish Living is crafted with
                      functionality, luxury and timeless aesthetics.
                      From concept planning to final execution,
                      our team ensures every detail reflects
                      premium craftsmanship and modern living.

                    </p>

                  </div>

                  <div className="rounded-3xl bg-cream p-8">

                    <h3 className="font-display text-2xl text-emerald-deep">
                      What's Included
                    </h3>

                    <div className="mt-8 space-y-5">

                      {service.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-4"
                        >
                          <CheckCircle2
                            className="text-brass"
                            size={22}
                          />

                          <span className="font-medium text-emerald-deep">

                            {feature}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </section>
                            {/* FEATURES */}

              <section className="bg-cream px-8 py-16 md:px-16">

                <div className="text-center">

                  <p className="text-xs uppercase tracking-[0.25em] text-brass">
                    Why Homeowners Choose Us
                  </p>

                  <h2 className="mt-3 font-display text-4xl text-emerald-deep">
                    Premium Quality. Luxury Finish.
                  </h2>

                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                  {service.features.map((item, index) => (

                    <div
                      key={index}
                      className="rounded-3xl bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-luxe"
                    >

                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-luxe">

                        <CheckCircle2
                          size={26}
                          className="text-brass"
                        />

                      </div>

                      <h3 className="font-display text-2xl text-emerald-deep">

                        {item}

                      </h3>

                      <p className="mt-4 leading-7 text-ink/70">

                        Every Lavish Living project is executed using
                        premium materials, experienced craftsmen and
                        meticulous finishing standards to deliver
                        interiors that remain beautiful for years.

                      </p>

                    </div>

                  ))}

                </div>

              </section>

              {/* GALLERY */}

              <section
                id="gallery-section"
                className="px-8 py-20 md:px-16"
              >

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-brass">
                      Design Gallery
                    </p>

                    <h2 className="mt-3 font-display text-4xl text-emerald-deep">
                      Explore Real Luxury Designs
                    </h2>

                  </div>

                  <span className="rounded-full bg-cream px-5 py-2 text-sm font-semibold text-emerald-deep">

                    {images.length} Designs

                  </span>

                </div>

                <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">

                  {images.map((image, index) => (

                    <div
                      key={image.id}
                      className="group mb-5 cursor-pointer overflow-hidden rounded-3xl bg-white shadow-soft transition hover:shadow-luxe break-inside-avoid"
                      onClick={() => openImage(index)}
                    >

                      <div className="overflow-hidden">

                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full transition duration-700 group-hover:scale-110"
                        />

                      </div>

                      <div className="p-6">

                        <h3 className="font-display text-2xl text-emerald-deep">

                          {image.title}

                        </h3>

                        <p className="mt-2 text-sm uppercase tracking-widest text-brass">

                          {image.style}

                        </p>

                      </div>

                    </div>

                  ))}

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

                            {/* BOOK CONSULTATION */}

              <section
                id="book-consultation"
                className="bg-gradient-luxe px-8 py-20 md:px-16"
              >

                <div className="grid items-center gap-12 lg:grid-cols-2">

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-brass">

                      Start Your Dream Project

                    </p>

                    <h2 className="mt-4 font-display text-5xl leading-tight text-white">

                      Let's Design Something Beautiful Together

                    </h2>

                    <p className="mt-6 max-w-xl leading-8 text-white/80">

                      Whether you're renovating one room or your entire
                      home, our designers are ready to help you create a
                      space that perfectly matches your lifestyle and
                      personality.

                    </p>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2">

                      <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                        <h4 className="font-semibold text-brass">

                          Free Design Consultation

                        </h4>

                        <p className="mt-2 text-sm leading-7 text-white/80">

                          Meet our designers and receive layout ideas,
                          colour suggestions and budget planning.

                        </p>

                      </div>

                      <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                        <h4 className="font-semibold text-brass">

                          End-to-End Execution

                        </h4>

                        <p className="mt-2 text-sm leading-7 text-white/80">

                          From design approval to installation,
                          Lavish Living handles everything under one roof.

                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="rounded-[30px] bg-white p-8 shadow-2xl">

                    <InquiryForm compact />

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