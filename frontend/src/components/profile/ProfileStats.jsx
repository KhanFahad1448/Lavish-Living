import {
  ClipboardList,
  Home,
  FileText,
  Star,
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
    },
    {
      title: "Running Projects",
      value: activeProjects,
      icon: Home,
    },
    {
      title: "Quotations",
      value: quotations,
      icon: FileText,
    },
    {
      title: "Reviews",
      value: reviews,
      icon: Star,
    },
  ];

  return (
    <section className="mt-5 sm:mt-6">

      {/* Heading */}

      <div className="mb-3 sm:mb-4">

        <p className="text-[9px] uppercase tracking-[0.16em] text-brass sm:text-[10px]">
          Overview
        </p>

        <h2 className="mt-1 font-display text-base font-semibold tracking-tight text-emerald-deep sm:text-lg">
          Your Journey At A Glance
        </h2>

        <p className="mt-1 max-w-xl text-xs leading-5 text-ink/55 sm:text-sm sm:leading-6">
          Track every milestone, from your first consultation to
          completed dream spaces.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">

        {cards.map((card) => (
          <StatCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            value={card.value}
          />
        ))}

      </div>

    </section>
  );
}

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-emerald/10 bg-white px-3.5 py-3 transition duration-300 hover:border-brass/30">

      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass">
        <Icon size={14} />
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-lg font-semibold leading-none text-emerald-deep sm:text-xl">
          {value}
        </h3>
        <p className="mt-1 truncate text-[9px] uppercase tracking-[0.1em] text-ink/45 sm:text-[10px]">
          {title}
        </p>
      </div>

    </div>
  );
}