import Testimonials from "../components/Testimonials";
import ReviewForm from "../components/ReviewForm";

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
        <div className="absolute inset-0 -z-10 opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')",
          backgroundSize: "cover", backgroundPosition: "center"
        }} />
        <div className="container-luxe grid gap-12 py-24 md:grid-cols-2 md:py-32">
          <div className="text-ivory">
            <p className="mb-4 inline-block rounded-full border border-brass/40 bg-emerald-deep/40 px-3 py-1 text-xs uppercase tracking-wider text-brass">Ranchi · Since 2019</p>
            <h1 className="font-display text-5xl leading-tight md:text-6xl">
              Interiors that feel <span className="text-brass-gradient">lavishly lived-in.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-ivory/80">
              One studio. Every room. From modular kitchens to false ceilings — we design, build and install end-to-end so you move in to a home that's truly yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inquiry" className="btn-primary bg-brass text-emerald-deep hover:bg-brass-light">
                Get a free design consult <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/portfolio" className="btn-outline border-ivory/30 text-ivory hover:bg-ivory hover:text-emerald-deep">
                See our work
              </Link>
            </div>
            <ul className="mt-10 grid gap-3 text-sm text-ivory/80 sm:grid-cols-2">
              {["10-year service warranty", "ISO-certified materials", "In-house carpentry team", "Flat 45-day turnaround"].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-brass" /> {f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-ivory/95 p-6 shadow-luxe md:p-8" id="inquiry">
            <h2 className="font-display text-2xl text-emerald-deep">Book a free consult</h2>
            <p className="mb-4 text-sm text-ink/60">Tell us about your space — our designer reaches out within 24 hours.</p>
            <InquiryForm compact />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-cream">
        <div className="container-luxe">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-brass">What we do</p>
            <h2 className="mt-2 font-display text-4xl text-emerald-deep">Every room, one studio.</h2>
            <p className="mt-3 text-ink/70">From the first sketch to the last screw — modular kitchens, wardrobes, ceilings, full-home — handled by one team you can call.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceData.map((service) => {

  const Icon = service.icon;

  return (

    <button
      key={service.slug}
      onClick={() => setSelectedService(service)}
      className="group rounded-2xl border border-emerald/10 bg-ivory p-7 text-left shadow-soft transition hover:-translate-y-2 hover:shadow-luxe"
    >

      <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-luxe text-brass">

        <Icon className="h-5 w-5"/>

      </div>

      <h3 className="font-display text-xl text-emerald-deep">

        {service.title}

      </h3>

      <p className="mt-2 text-sm text-ink/70">

        {service.shortDescription}

      </p>

      <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brass">

        View Designs

        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />

      </span>

    </button>

  );

})}
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

<ServiceGalleryModal
    open={selectedService !== null}
    service={selectedService}
    onClose={() => setSelectedService(null)}
/>

</>
);
}