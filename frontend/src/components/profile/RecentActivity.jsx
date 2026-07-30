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
    <section className="rounded-3xl border border-emerald/10 bg-white p-8 shadow-soft">

      {/* Heading */}

      <div className="mb-10">

        <p className="text-xs uppercase tracking-[0.25em] text-brass">
          Timeline
        </p>

        <h2 className="mt-2 font-display text-4xl text-emerald-deep">
          Recent Activity
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-ink/60">
          Every important update about your project will appear here.
          Stay informed throughout your interior design journey.
        </p>

      </div>

      {/* Empty State */}

      {activities.length === 0 ? (

        <div className="rounded-3xl border border-dashed border-emerald/20 bg-cream py-20 text-center">

          <ClipboardList
            size={54}
            className="mx-auto text-brass"
          />

          <h3 className="mt-6 font-display text-3xl text-emerald-deep">
            No Activity Yet
          </h3>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-ink/60">
            Once our team begins working on your enquiry,
            every milestone will automatically appear
            here.
          </p>

        </div>

      ) : (

        <div className="relative ml-3">

          {/* Timeline Line */}

          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-brass via-emerald to-transparent" />

          <div className="space-y-10">

            {activities.map((activity) => {

              const Icon =
                icons[activity.type] || ClipboardList;

              return (

                <div
                  key={activity.id}
                  className="relative flex gap-6"
                >

                  {/* Timeline Circle */}

                  <div className="relative z-10">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-luxe text-brass shadow-lg transition duration-300 hover:scale-110">

                      <Icon size={18} />

                    </div>

                  </div>

                  {/* Card */}

                  <div className="group flex-1 rounded-3xl border border-emerald/10 bg-gradient-to-br from-white via-white to-cream p-6 transition duration-300 hover:-translate-y-1 hover:border-brass/30 hover:shadow-luxe">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <h3 className="font-display text-2xl text-emerald-deep">
                        {activity.title}
                      </h3>

                      <span className="rounded-full bg-brass/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brass">
                        {activity.date}
                      </span>

                    </div>

                    <p className="mt-4 leading-7 text-ink/65">
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