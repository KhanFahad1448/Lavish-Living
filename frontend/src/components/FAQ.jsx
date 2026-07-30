import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does interior designing cost in Ranchi?",
    answer:
      "The cost depends on the size of your home, materials selected and the scope of work. We provide a free consultation and customized quotation based on your requirements.",
  },
  {
    question: "Do you provide modular kitchen solutions?",
    answer:
      "Yes. We design and install premium modular kitchens with soft-close hardware, premium laminates, quartz countertops and customized storage solutions.",
  },
  {
    question: "How long does a complete interior project take?",
    answer:
      "Most residential interior projects are completed within 30–45 days after design approval. Larger projects may require additional time depending on customization.",
  },
  {
    question: "Do you offer 3D interior designs before execution?",
    answer:
      "Absolutely. Every client receives detailed 3D visualizations before execution so you know exactly how your space will look.",
  },
  {
    question: "Do you work only in Ranchi?",
    answer:
      "Our primary service area is Ranchi and nearby regions across Jharkhand. For larger projects, we can also work in neighboring cities.",
  },
  {
    question: "Can I renovate only one room instead of the entire house?",
    answer:
      "Yes. Whether it's a modular kitchen, bedroom, wardrobe, false ceiling or living room, we handle projects of every size.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream py-8 md:py-12">

      <div className="container-luxe max-w-5xl">

        {/* Heading */}

        <div className="mx-auto mb-8 max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-brass/20 bg-brass/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brass sm:text-[11px]">

            Frequently Asked Questions

          </span>

          <h2 className="mt-3 font-display text-[22px] leading-tight text-emerald-deep sm:text-[28px] lg:text-[34px]">

            Planning Your Dream Interior?

          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-ink/60 sm:text-sm">

            Everything you need to know before starting your
            interior journey with
            <span className="font-semibold text-emerald-deep">
              {" "}Lavish Living.
            </span>

          </p>

        </div>

        {/* FAQ */}

        <div className="mx-auto max-w-3xl space-y-2 sm:space-y-3">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (

              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  open
                    ? "border-brass/30 bg-white shadow-lg"
                    : "border-emerald/10 bg-white hover:border-brass/20 hover:shadow-md"
                }`}
              >

                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="flex w-full items-center gap-3 px-3 py-3 text-left sm:px-5 sm:py-4"
                >

                  {/* Accent */}

                  <span
                    className={`h-8 w-1 rounded-full transition-all ${
                      open
                        ? "bg-brass"
                        : "bg-emerald/20"
                    }`}
                  />

                  {/* Question */}

                  <h3 className="flex-1 font-display text-[14px] leading-5 text-emerald-deep sm:text-[15px] lg:text-base">

                    {faq.question}

                  </h3>

                  {/* Arrow */}

                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                      open
                        ? "rotate-180 bg-brass text-emerald-deep"
                        : "bg-cream text-emerald-deep"
                    }`}
                  >

                    <ChevronDown size={14} />

                  </div>

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                                        <div className="px-3 pb-3 sm:px-5 sm:pb-4">

                      <div className="ml-4 rounded-lg border border-brass/10 bg-cream/40 p-3 sm:ml-5 sm:p-4">

                        <p className="text-[12px] leading-6 text-ink/65 sm:text-[13px] sm:leading-6 lg:text-sm">

                          {faq.answer}

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}