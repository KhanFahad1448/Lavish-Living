import { useState } from "react";
import { ArrowRight } from "lucide-react";
import InquiryForm from "../components/InquiryForm";
import ServiceGalleryModal from "../components/ServiceGalleryModal";
import serviceData from "../data/services";
import { Helmet } from "react-helmet-async";

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
      <section className="bg-gradient-luxe py-24 text-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass">
            Services
          </p>

          <h1 className="mt-3 font-display text-5xl">
            A one-stop interior solution.
          </h1>

          <p className="mt-4 text-ivory/80">
            Every trade under one roof — design, carpentry, electrical, false
            ceiling, painting, and installation. No coordinating multiple
            contractors.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad">
        <div className="container-luxe grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {serviceData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.slug}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer rounded-2xl border border-emerald/10 bg-ivory p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-luxe"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-luxe text-brass">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-display text-xl text-emerald-deep">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-ink/70">
                  {service.shortDescription}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brass">
                  View Details
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </div>
            );
          })}

        </div>
      </section>

      {/* Quote Section */}
      <section className="section-pad bg-cream">
        <div className="container-luxe grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-emerald-deep">
              Request a Quote
            </h2>

            <p className="mt-3 text-ink/70">
              Share a few details and we'll prepare a transparent quotation
              tailored to your space within 48 hours.
            </p>
          </div>

          <div className="rounded-2xl bg-ivory p-6 shadow-soft md:p-8">
            <InquiryForm />
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

