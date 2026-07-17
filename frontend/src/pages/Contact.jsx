import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
      <section className="bg-gradient-luxe py-24 text-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">Contact</p>
          <h1 className="mt-3 font-display text-5xl">Visit the studio.</h1>
          <p className="mt-4 text-ivory/80">Walk in to see material samples, finishes and live project mock-ups. Or send the form and we'll come to your site.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-luxe grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Row icon={MapPin} title="Studio">Khan Complex, Bariatu Road,<br />Ranchi 834009, Jharkhand</Row>
            <Row icon={Phone} title="Phone">+91 99999 99999</Row>
            <Row icon={Mail} title="Email">hello@lavishliving.in</Row>
            <Row icon={Clock} title="Hours">Mon – Sat, 10:00 AM – 7:30 PM</Row>
            <iframe title="Map" className="h-72 w-full rounded-2xl border border-emerald/10"
              src="https://maps.google.com/maps?q=Bariatu%20Road%20Ranchi&t=&z=14&ie=UTF8&iwloc=&output=embed" />
          </div>
          <div className="rounded-2xl bg-cream p-6 shadow-soft md:p-8"><InquiryForm /></div>
        </div>
      </section>
    </>
  );
}
function Row({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-luxe text-brass"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-brass">{title}</div>
        <div className="mt-1 text-ink">{children}</div>
      </div>
    </div>
  );
}
