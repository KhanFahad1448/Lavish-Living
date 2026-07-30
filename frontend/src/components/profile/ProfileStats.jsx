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
      subtitle: "Design consultations",
    },
    {
      title: "Running Projects",
      value: activeProjects,
      icon: Home,
      subtitle: "Currently in progress",
    },
    {
      title: "Quotations",
      value: quotations,
      icon: FileText,
      subtitle: "Price estimates shared",
    },
    {
      title: "Reviews",
      value: reviews,
      icon: Star,
      subtitle: "Feedback submitted",
    },
  ];

  return (
    <section className="mt-8 sm:mt-10">

      {/* Heading */}

      <div className="mb-6 sm:mb-8">

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-brass">
          Overview
        </p>

        <h2 className="mt-2 font-display text-2xl sm:text-3xl text-emerald-deep">
          Your Journey At A Glance
        </h2>

        <p className="mt-2 max-w-2xl text-sm sm:text-[15px] leading-6 sm:leading-7 text-ink/60">
          Track every milestone of your interior journey with Lavish Living,
          from your first consultation to completed dream spaces.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="group overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe"
            >

              {/* Brass Accent */}

              <div className="h-1 w-full bg-gradient-to-r from-brass via-[#d4b06b] to-brass" />

              <div className="p-3 sm:p-5 lg:p-6">

                {/* Top */}

                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-luxe text-brass">

                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />

                  </div>

                  <ArrowUpRight
                    className="h-4 w-4 sm:h-5 sm:w-5 text-brass transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

                {/* Value */}

                <h3 className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl lg:text-4xl text-emerald-deep">

                  {card.value}

                </h3>

                {/* Title */}

                <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-ink/45 leading-4">

                  {card.title}

                </p>

                {/* Subtitle */}

                <p className="mt-2 hidden sm:block text-sm leading-6 text-ink/60">

                  {card.subtitle}

                </p>

                {/* Footer */}

                <div className="mt-4 sm:mt-6 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-emerald" />

                  <span className="hidden lg:inline text-xs text-ink/45">
                    Updated from your latest activity
                  </span>

                  <span className="text-[10px] text-ink/45 lg:hidden">
                    Updated
                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}