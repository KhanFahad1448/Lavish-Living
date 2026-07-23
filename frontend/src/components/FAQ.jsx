
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
    <section className="section-pad bg-cream">
      <div className="container-luxe">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <span className="inline-flex items-center rounded-full border border-brass/30 bg-brass/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brass">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 font-display text-4xl leading-tight text-emerald-deep md:text-6xl">
            Planning Your
            <br />
            <span className="text-brass-gradient">
              Dream Interior?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ink/65">
            Whether you're planning a complete home interior, a luxury
            modular kitchen, or renovating a single room, here are the
            answers to the questions our clients ask before beginning
            their journey with
            <span className="font-semibold text-emerald-deep">
              {" "}Lavish Living.
            </span>
          </p>

        </div>

        {/* FAQ Cards */}
        <div className="mx-auto max-w-4xl space-y-5">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  open
                    ? "border-brass/40 bg-white shadow-luxe"
                    : "border-emerald/10 bg-white shadow-soft hover:border-brass/20 hover:shadow-md"
                }`}
              >

                <button
                  onClick={() => setActive(open ? -1 : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="font-display text-xl text-emerald-deep">
                    {faq.question}
                  </h3>

                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full transition-all duration-300 ${
                      open
                        ? "bg-brass text-emerald-deep rotate-180"
                        : "bg-emerald-deep/5 text-emerald-deep"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 leading-8 text-ink/70">
                      {faq.answer}
                    </p>
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
