import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import InquiryForm from "../components/InquiryForm";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
    <Helmet>

  <title>
    Contact Lavish Living | Interior Designers in Ranchi
  </title>

  <meta
    name="description"
    content="Contact Lavish Living for premium home and office interior design services in Ranchi. Book a free consultation for modular kitchens, bedrooms, false ceilings, wardrobes and complete interior solutions."
  />

  <meta
    name="keywords"
    content="Contact Interior Designer Ranchi, Lavish Living Ranchi, Interior Design Consultation, Modular Kitchen Contact, Home Interior Jharkhand"
  />

  <link
    rel="canonical"
    href="https://lavishlivinginteriors.in/contact"
  />

  <meta
    property="og:title"
    content="Contact Lavish Living | Interior Designers in Ranchi"
  />

  <meta
    property="og:description"
    content="Get in touch with Lavish Living for luxury interior design solutions in Ranchi and across Jharkhand."
  />

  <meta
    property="og:image"
    content="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
  />

  <meta
    property="og:url"
    content="https://lavishlivinginteriors.in/contact"
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
      {/* HERO — Editorial split */}
      {/* ========================================= */}

      <section className="relative overflow-hidden bg-gradient-luxe text-ivory">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,154,107,.15),transparent_50%)]" />

        <div className="container-luxe relative grid gap-6 py-10 sm:py-12 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-10 md:py-16">

          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] text-brass sm:text-[11px] sm:tracking-[0.3em]">
              Let's Talk
            </p>

            <h1 className="mt-2 max-w-md font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl">
              Visit the studio.
            </h1>
          </div>

          <p className="text-xs leading-5 text-ivory/75 sm:text-sm sm:leading-6 md:text-base md:leading-7">
            Walk in to see material samples, finishes and live project
            mock-ups. Or send the form below and we'll come to your site.
          </p>

        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-brass/40 to-transparent" />

      </section>

      {/* ========================================= */}
      {/* GET IN TOUCH — Editorial list + floating form */}
      {/* ========================================= */}

      <section className="py-8 sm:py-10 md:py-16">
        <div className="container-luxe grid gap-8 md:grid-cols-[0.85fr_1fr] md:gap-12 lg:gap-16">

          {/* LEFT: Numbered editorial contact list */}

          <div>

            <p className="text-[9px] uppercase tracking-[0.22em] text-brass sm:text-[10px] sm:tracking-[0.28em]">
              Reach Us Directly
            </p>

            <h2 className="mt-2 font-display text-xl font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-3 sm:text-2xl md:text-3xl">
              Four ways to
              <br />
              start the conversation.
            </h2>

            <div className="mt-5 divide-y divide-emerald/10 border-t border-emerald/10 sm:mt-7">

              <ContactRow index="01" icon={MapPin} title="Studio">
                Khan Complex, Bariatu Road,<br />Ranchi 834009, Jharkhand
              </ContactRow>

              <ContactRow index="02" icon={Phone} title="Phone">
                +91 80855 09001
              </ContactRow>

              <ContactRow index="03" icon={Mail} title="Email">
                hello@lavishliving.in
              </ContactRow>

              <ContactRow index="04" icon={Clock} title="Hours">
                Mon – Sat, 10:00 AM – 7:30 PM
              </ContactRow>

            </div>

          </div>

          {/* RIGHT: Floating luxury form card */}

          <div className="md:sticky md:top-24 md:self-start">
            <div className="rounded-2xl border border-emerald/10 bg-white p-4 shadow-luxe sm:rounded-[28px] sm:p-5 md:p-6">
              <p className="text-[9px] uppercase tracking-[0.22em] text-brass sm:text-[10px] sm:tracking-[0.28em]">
                Free Consultation
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-emerald-deep sm:text-xl">
                Tell us about your space
              </h3>
              <div className="mt-3 sm:mt-4">
                <InquiryForm />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* QUICK STATS BAND */}
      {/* ========================================= */}

      <section className="border-y border-emerald/10 bg-cream py-5 sm:py-6">
        <div className="container-luxe grid grid-cols-3 gap-2 text-center sm:gap-4">

          <StatChip number="24 Hrs" label="Response Time" />
          <StatChip number="Free" label="First Consultation" />
          <StatChip number="6" label="Days a Week Open" />

        </div>
      </section>

      {/* ========================================= */}
      {/* VISIT THE STUDIO — Map band */}
      {/* ========================================= */}

      <section className="py-8 sm:py-10 md:py-14">
        <div className="container-luxe">

          <div className="mb-4 flex items-end justify-between sm:mb-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-brass sm:text-[10px] sm:tracking-[0.28em]">
                Find Us
              </p>
              <h2 className="mt-1 font-display text-xl font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-2 sm:text-2xl md:text-3xl">
                On Bariatu Road, Ranchi.
              </h2>
            </div>

            <a
              href="https://maps.google.com/maps?q=Bariatu%20Road%20Ranchi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-1 rounded-full border border-brass/30 bg-brass/5 px-4 py-2 text-xs font-semibold text-brass transition hover:bg-brass/10 sm:inline-flex"
            >
              Get Directions
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-emerald/10 shadow-soft sm:rounded-[28px]">
            <iframe
              title="Map"
              className="h-40 w-full sm:h-56 md:h-72"
              src="https://maps.google.com/maps?q=Bariatu%20Road%20Ranchi&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>

          <a
            href="https://maps.google.com/maps?q=Bariatu%20Road%20Ranchi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brass sm:hidden"
          >
            Get Directions
            <ArrowUpRight size={12} />
          </a>

        </div>
      </section>

    </>
  );
}

function ContactRow({ index, icon: Icon, title, children }) {
  return (
    <div className="group flex items-start gap-3 py-3 sm:gap-4 sm:py-4">

      <span className="font-display text-xs font-semibold text-brass/50 sm:text-sm">
        {index}
      </span>

      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-luxe text-brass transition duration-300 group-hover:scale-105 sm:h-9 sm:w-9 sm:rounded-xl">
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </div>

      <div>
        <div className="text-[9px] uppercase tracking-[0.16em] text-brass sm:text-[10px] sm:tracking-wider">
          {title}
        </div>
        <div className="mt-0.5 text-xs leading-4 text-ink sm:text-sm sm:leading-5">
          {children}
        </div>
      </div>

    </div>
  );
}

function StatChip({ number, label }) {
  return (
    <div>
      <p className="font-display text-lg font-semibold text-emerald-deep sm:text-2xl md:text-3xl">
        {number}
      </p>
      <p className="mt-0.5 text-[8px] uppercase leading-tight tracking-[0.12em] text-ink/55 sm:mt-1 sm:text-[10px] sm:tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}