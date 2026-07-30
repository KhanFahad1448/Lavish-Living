import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Pencil,
  ChevronRight,
} from "lucide-react";

export default function PersonalInformation({
  user,
  onEdit,
}) {
  const cards = [
    {
      icon: User,
      title: "Full Name",
      value: user?.name || "Not Available",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: user?.email || "Not Available",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: user?.phone || "Not Added",
    },
    {
      icon: MapPin,
      title: "Location",
      value: user?.location || "Not Added",
    },
    {
      icon: ShieldCheck,
      title: "Account Type",
      value:
        user?.role === "admin"
          ? "Administrator"
          : "Premium Client",
    },
    {
      icon: CalendarDays,
      title: "Member Since",
      value: user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString(
            "en-IN",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )
        : "-",
    },
  ];

  return (
    <section className="mt-8 sm:mt-10">

      {/* Heading */}

      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

        <div>

          <p className="text-[10px] uppercase tracking-[0.22em] text-brass sm:text-xs">
            PERSONAL INFORMATION
          </p>

          <h2 className="mt-2 font-display text-2xl text-emerald-deep sm:text-3xl">
            Client Information
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/60 sm:text-[15px] sm:leading-7">
            Your personal information used for quotations,
            project updates and communication throughout
            your Lavish Living journey.
          </p>

        </div>

        <button
          onClick={onEdit}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-brass bg-gradient-luxe px-5 py-3 text-sm font-semibold text-brass transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

          <Pencil size={16} />

          Edit Profile

        </button>

      </div>

      {/* Cards */}

      <div className="grid gap-4 sm:grid-cols-2">

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <InfoCard
              key={index}
              icon={Icon}
              title={card.title}
              value={card.value}
            />
          );
        })}

      </div>

    </section>
  );
  }

function InfoCard({
  icon: Icon,
  title,
  value,
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-emerald/10 bg-white p-4 sm:p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-luxe">

      {/* Decorative Background */}

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brass/5 blur-3xl transition duration-500 group-hover:scale-125" />

      <div className="relative flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-4 min-w-0">

          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-luxe text-brass shadow-sm transition duration-300 group-hover:scale-110">

            <Icon className="h-5 w-5" />

          </div>

          <div className="min-w-0">

            <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-ink/45">

              {title}

            </p>

            <h3 className="mt-1 truncate text-sm sm:text-base font-semibold text-emerald-deep">

              {value}

            </h3>

          </div>

        </div>

        {/* Right */}

        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cream transition duration-300 group-hover:bg-brass group-hover:text-white">

          <ChevronRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />

        </div>

      </div>

      {/* Bottom Accent */}

      <div className="mt-5 flex items-center justify-between border-t border-emerald/10 pt-3">

        <span className="text-[11px] text-ink/45">
          Verified Information
        </span>

        <span className="h-2 w-2 rounded-full bg-emerald"></span>

      </div>

    </div>
  );
}