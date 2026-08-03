import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Pencil,
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
    <section className="mt-5 sm:mt-6">

      {/* Heading */}

      <div className="mb-3 flex flex-col gap-3 sm:mb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">

        <div className="min-w-0">

          <p className="text-[9px] uppercase tracking-[0.16em] text-brass sm:text-[10px]">
            Personal Information
          </p>

          <h2 className="mt-1 font-display text-base font-semibold tracking-tight text-emerald-deep sm:text-lg">
            Client Information
          </h2>

          <p className="mt-1 max-w-xl text-xs leading-5 text-ink/55 sm:text-sm sm:leading-6">
            Used for quotations, project updates, and communication
            throughout your journey.
          </p>

        </div>

        <button
          onClick={onEdit}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-luxe px-3.5 py-2 text-xs font-semibold text-brass transition duration-300 hover:shadow-md sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <Pencil size={13} />
          Edit
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

        {cards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
          />
        ))}

      </div>

    </section>
  );
}

function InfoCard({ icon: Icon, title, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-emerald/10 bg-white px-3.5 py-3 transition duration-300 hover:border-brass/30">

      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass">
        <Icon size={14} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] uppercase tracking-[0.12em] text-ink/45 sm:text-[10px]">
          {title}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-emerald-deep">
          {value}
        </p>
      </div>

    </div>
  );
}