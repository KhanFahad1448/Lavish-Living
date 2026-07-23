import { Helmet } from "react-helmet-async";
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
      <section className="bg-gradient-luxe py-24 text-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">About</p>
          <h1 className="mt-3 font-display text-5xl">A studio rooted in Ranchi, built for living.</h1>
          <p className="mt-4 text-ivory/80">Lavish Living is a full-service interior design studio at Khan Complex, Bariatu Road. We bring together designers, carpenters, electricians and finishers under one roof — so every project ships on time, on budget, and beautifully detailed.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-luxe grid gap-12 md:grid-cols-3">
          {[
            { n: "120+", l: "Homes designed" },
            { n: "45 days", l: "Average turnaround" },
            { n: "10 yrs", l: "Service warranty" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-emerald/10 bg-cream p-8 text-center">
              <div className="font-display text-5xl text-emerald-deep">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-ink/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-pad bg-cream">
        
        <div className="container-luxe grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-emerald-deep">Our approach</h2>
            <p className="mt-4 text-ink/70">We start every project with a site visit and a long conversation — about how you cook, where the family gathers, which mornings you treasure. Design follows life, never the other way around.</p>
            <p className="mt-4 text-ink/70">From there, our team delivers 3D walkthroughs, transparent line-item quotes, factory-finished modular units and on-site finishing — all coordinated by a single project manager.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80" alt="Interior" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-luxe" />
        </div>

      </section>

      <TrustedBrands />

    </>
  );
}