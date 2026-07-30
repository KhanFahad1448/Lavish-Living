import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Pencil,
} from "lucide-react";

export default function ProfileInformation({
  user,
  onEdit,
}) {
  return (
    <section className="mt-12">

      <div className="mb-8">

        <p className="text-xs uppercase tracking-[0.25em] text-brass">
          Personal Details
        </p>

        <h2 className="mt-2 font-display text-4xl text-emerald-deep">
          Profile Information
        </h2>

        <p className="mt-2 max-w-2xl text-ink/60">
          Manage your personal information and keep your account
          details updated for a smoother design experience.
        </p>

      </div>

      <div className="overflow-hidden rounded-[32px] border border-emerald/10 bg-white shadow-soft">

        {/* Header */}

        <div className="flex flex-col items-start justify-between gap-6 border-b border-emerald/10 bg-gradient-to-r from-emerald-deep to-emerald px-8 py-7 md:flex-row md:items-center">

          <div>

            <h3 className="font-display text-3xl text-ivory">
              Client Profile
            </h3>

            <p className="mt-2 text-sm text-ivory/80">
              Your account information used across Lavish Living.
            </p>

          </div>

          <button
            onClick={onEdit}
            className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-3 text-sm font-semibold text-emerald-deep transition hover:scale-105"
          >
            <Pencil size={16} />
            Edit Profile
          </button>

        </div>

        {/* Body */}

        <div className="grid gap-6 p-8 md:grid-cols-2">

          <InfoCard
            icon={User}
            label="Full Name"
            value={user?.name || "Not Available"}
          />

          <InfoCard
            icon={Mail}
            label="Email Address"
            value={user?.email || "Not Available"}
          />

          <InfoCard
            icon={Phone}
            label="Phone Number"
            value={user?.phone || "Not Added"}
          />

          <InfoCard
            icon={MapPin}
            label="Location"
            value={user?.location || "Not Added"}
          />

          <InfoCard
            icon={ShieldCheck}
            label="Account Type"
            value={
              user?.role === "admin"
                ? "Administrator"
                : "Client"
            }
          />

          <InfoCard
            icon={CalendarDays}
            label="Member Since"
            value={
              user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )
                : "-"
            }
          />

        </div>

      </div>

    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="group rounded-2xl border border-emerald/10 bg-cream/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-brass/40 hover:bg-white hover:shadow-soft">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-luxe text-brass transition group-hover:scale-110">

          <Icon size={22} />

        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            {label}
          </p>

          <h4 className="mt-1 text-lg font-semibold text-emerald-deep">
            {value}
          </h4>

        </div>

      </div>

    </div>
  );
}