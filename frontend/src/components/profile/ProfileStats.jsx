import {
  ClipboardList,
  Home,
  FileText,
  Star,
  ArrowUpRight,
} from "lucide-react";

export default function ProfileStats({
  totalEnquiries = 0,
  activeProjects = 0,
  quotations = 0,
  reviews = 0,
}) {
  const cards = [
    {
      title: "Total Enquiries",
      value: totalEnquiries,
      icon: ClipboardList,
      accent: "from-emerald to-emerald-deep",
      bg: "bg-emerald/5",
    },
    {
      title: "Running Projects",
      value: activeProjects,
      icon: Home,
      accent: "from-sky-500 to-blue-700",
      bg: "bg-blue-50",
    },
    {
      title: "Quotations",
      value: quotations,
      icon: FileText,
      accent: "from-amber-400 to-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      title: "Reviews",
      value: reviews,
      icon: Star,
      accent: "from-purple-500 to-fuchsia-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="mt-10">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-[28px] border border-emerald/10 bg-white p-7 shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-luxe"
            >
              {/* Decorative Blur */}

              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${card.bg} blur-3xl transition duration-500 group-hover:scale-125`}
              />

              <div className="relative">

                {/* Icon */}

                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-lg`}
                >
                  <Icon size={28} />
                </div>

                {/* Title */}

                <p className="text-sm uppercase tracking-[0.18em] text-ink/45">

                  {card.title}

                </p>

                {/* Number */}

                <h2 className="mt-4 font-display text-5xl text-emerald-deep">

                  {card.value}

                </h2>

                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm text-ink/55">
                    Updated just now
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-brass transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}