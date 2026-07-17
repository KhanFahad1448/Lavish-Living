import { ChefHat, BedDouble, Sofa, Lightbulb, DoorOpen, Building2, Paintbrush, Layers } from "lucide-react";
import InquiryForm from "../components/InquiryForm";
import { Helmet } from "react-helmet-async";

const items = [
  { icon: ChefHat, t: "Modular Kitchen", d: "L-shape, U-shape, island & parallel layouts in PU, lacquered glass or premium laminate. Hettich/Hafele hardware standard." },
  { icon: BedDouble, t: "Bedroom Interiors", d: "Wardrobes, beds, bedside units, study desks and dressers — designed around your daily rhythm." },
  { icon: Sofa, t: "Living & Dining", d: "TV consoles, accent walls, crockery units, bar units and crafted seating zones." },
  { icon: Lightbulb, t: "False Ceiling", d: "Cove, tray, gypsum & POP ceilings with layered lighting design." },
  { icon: DoorOpen, t: "Wardrobes & Storage", d: "Sliding, openable, walk-in. Acrylic, laminate, PU or fabric finishes." },
  { icon: Building2, t: "Office & Commercial", d: "Workstations, cabins, retail fit-outs, clinics and cafés." },
  { icon: Paintbrush, t: "Paint, Wallpaper & Texture", d: "Curated colour palettes, imported wallpapers and Italian textures." },
  { icon: Layers, t: "Flooring & Panelling", d: "Wooden, vinyl, marble inlay flooring and decorative wall panelling." },
];

export default function Services() {
  return (
    <>
          <Helmet>
        <title>
          Interior Design Services in Ranchi | Modular Kitchen, Bedroom & False Ceiling | Lavish Living
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
      <section className="bg-gradient-luxe py-24 text-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">Services</p>
          <h1 className="mt-3 font-display text-5xl">A one-stop interior solution.</h1>
          <p className="mt-4 text-ivory/80">Every trade under one roof — design, carpentry, electrical, false ceiling, painting, and installation. No coordinating five contractors.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-luxe grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <article key={s.t} className="rounded-2xl border border-emerald/10 bg-ivory p-7 shadow-soft">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-luxe text-brass"><s.icon className="h-5 w-5" /></div>
              <h3 className="font-display text-xl text-emerald-deep">{s.t}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad bg-cream">
        <div className="container-luxe grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-emerald-deep">Request a quote</h2>
            <p className="mt-3 text-ink/70">Share a few details and we'll put together a transparent, line-item quote within 48 hours.</p>
          </div>
          <div className="rounded-2xl bg-ivory p-6 shadow-soft md:p-8"><InquiryForm /></div>
        </div>
      </section>
    </>
  );
}
