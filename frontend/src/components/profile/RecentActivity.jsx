import {
  ClipboardList,
  Phone,
  Home,
  FileText,
  BadgeCheck,
  Star,
} from "lucide-react";

const demoActivities = [
  {
    id: 1,
    type: "submitted",
    title: "Inquiry Submitted",
    date: "28 July 2026",
    description:
      "You submitted an enquiry for a Modular Kitchen project.",
  },
  {
    id: 2,
    type: "contacted",
    title: "Designer Contacted You",
    date: "29 July 2026",
    description:
      "Our interior designer contacted you to discuss your requirements.",
  },
  {
    id: 3,
    type: "site_visit",
    title: "Site Visit Scheduled",
    date: "31 July 2026",
    description:
      "A site visit has been scheduled to understand your space better.",
  },
  {
    id: 4,
    type: "quotation",
    title: "Quotation Shared",
    date: "02 August 2026",
    description:
      "A customized quotation has been prepared and shared with you.",
  },
];

const icons = {
  submitted: ClipboardList,
  contacted: Phone,
  site_visit: Home,
  quotation: FileText,
  converted: BadgeCheck,
  completed: Star,
};

export default function RecentActivity() {
  const activities = demoActivities;

  return (
    <section className="rounded-2xl border border-emerald/10 bg-white p-4 shadow-soft sm:rounded-3xl sm:p-6 lg:p-8">

      {/* Heading */}

      <div className="mb-4 sm:mb-6">

        <p className="text-[9px] uppercase tracking-[0.16em] text-brass sm:text-[10px]">
          Timeline
        </p>

        <h2 className="mt-1 font-display text-base font-semibold tracking-tight text-emerald-deep sm:text-lg">
          Recent Activity
        </h2>

        <p className="mt-1 max-w-xl text-xs leading-5 text-ink/55 sm:text-sm sm:leading-6">
          Every important update about your project appears here, so
          you stay informed throughout your journey.
        </p>

      </div>

      {/* Empty State */}

      {activities.length === 0 ? (

        <div className="rounded-xl border border-dashed border-emerald/20 bg-cream py-10 text-center sm:rounded-2xl sm:py-14">

          <ClipboardList size={28} className="mx-auto text-brass sm:size-8" />

          <h3 className="mt-3 font-display text-sm font-semibold text-emerald-deep sm:text-base">
            No Activity Yet
          </h3>

          <p className="mx-auto mt-1.5 max-w-sm text-xs leading-5 text-ink/55 sm:text-sm sm:leading-6">
            Once our team begins working on your enquiry, every
            milestone will appear here.
          </p>

        </div>

      ) : (

        <div className="relative ml-1.5 sm:ml-2">

          {/* Timeline Line */}

          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brass via-emerald/40 to-transparent sm:left-[18px]" />

          <div className="space-y-3.5 sm:space-y-4">

            {activities.map((activity) => {

              const Icon = icons[activity.type] || ClipboardList;

              return (

                <div key={activity.id} className="relative flex gap-3">

                  {/* Timeline Circle */}

                  <div className="relative z-10 shrink-0">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-luxe text-brass shadow-md sm:h-9 sm:w-9">
                      <Icon size={14} />
                    </div>
                  </div>

                  {/* Card */}

                  <div className="min-w-0 flex-1 rounded-xl border border-emerald/10 bg-white px-3.5 py-3 transition duration-300 hover:border-brass/30 sm:rounded-2xl">

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-emerald-deep">
                        {activity.title}
                      </h3>
                      <span className="rounded-full bg-brass/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-brass sm:text-[10px]">
                        {activity.date}
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs leading-5 text-ink/60 sm:text-sm sm:leading-6">
                      {activity.description}
                    </p>

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      )}

    </section>
  );
}