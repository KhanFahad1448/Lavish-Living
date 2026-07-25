import {
  CalendarDays,
  IndianRupee,
  MapPin,
  Home,
  BadgeCheck,
} from "lucide-react";

export default function InquiryCard({ inquiry }) {
  const statusStyles = {
    new: "bg-yellow-100 text-yellow-700",
    contacted: "bg-blue-100 text-blue-700",
    converted: "bg-green-100 text-green-700",
    closed: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="rounded-3xl border border-emerald/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-luxe">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="font-display text-2xl text-emerald-deep">
            {inquiry.service || "General Interior Consultation"}
          </h3>

          <p className="mt-1 text-sm text-ink/60">
            Submitted on{" "}
            {new Date(inquiry.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide ${
            statusStyles[inquiry.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {inquiry.status}
        </span>

      </div>

      {/* Divider */}

      <div className="my-6 h-px bg-emerald/10" />

      {/* Details */}

      <div className="grid gap-4 sm:grid-cols-2">

        <Info
          icon={MapPin}
          label="Location"
          value={inquiry.location || "Not specified"}
        />

        <Info
          icon={IndianRupee}
          label="Budget"
          value={inquiry.budget || "Not specified"}
        />

        <Info
          icon={Home}
          label="Project Type"
          value={inquiry.projectType || "Not specified"}
        />

        <Info
          icon={CalendarDays}
          label="Submitted"
          value={new Date(inquiry.createdAt).toLocaleDateString("en-IN")}
        />

      </div>

      {/* Message */}

      {inquiry.message && (
        <>
          <div className="my-6 h-px bg-emerald/10" />

          <div>

            <div className="mb-2 flex items-center gap-2">

              <BadgeCheck
                size={18}
                className="text-brass"
              />

              <h4 className="font-semibold text-emerald-deep">
                Project Notes
              </h4>

            </div>

            <p className="leading-7 text-ink/70">
              {inquiry.message}
            </p>

          </div>
        </>
      )}

    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-1 rounded-xl bg-gradient-luxe p-2 text-brass">

        <Icon size={16} />

      </div>

      <div>

        <p className="text-xs uppercase tracking-wider text-ink/50">
          {label}
        </p>

        <p className="mt-1 font-medium text-emerald-deep">
          {value}
        </p>

      </div>

    </div>
  );
}