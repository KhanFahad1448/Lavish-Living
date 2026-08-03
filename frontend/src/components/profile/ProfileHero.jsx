import {
  Edit3,
  Lock,
  CalendarDays,
  Crown,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function ProfileHero({
  user,
  totalEnquiries = 0,
  onEdit,
  onChangePassword,
}) {
  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase() || "U";

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      })
    : "Recently Joined";

  return (
    <section className="rounded-2xl border border-emerald/10 bg-white p-4 shadow-soft sm:rounded-3xl sm:p-6 lg:p-8">

      {/* ========================================= */}
      {/* Top row — avatar, identity, actions */}
      {/* ========================================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">

        <div className="flex items-center gap-3 sm:gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-luxe font-display text-lg font-semibold text-brass shadow-md sm:h-16 sm:w-16 sm:text-xl lg:h-20 lg:w-20 lg:text-2xl">
            {initials}
          </div>

          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-brass/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-brass sm:text-[10px]">
              <Crown size={11} />
              Premium Client
            </span>

            <h1 className="mt-1.5 truncate font-display text-xl font-semibold leading-tight tracking-tight text-emerald-deep sm:mt-2 sm:text-2xl lg:text-3xl">
              {user?.name || "Customer"}
            </h1>

            <p className="mt-1 text-xs text-ink/55 sm:text-sm">
              Welcome back to your Lavish Living account.
            </p>
          </div>

        </div>

        {/* Actions — compact pills, not full-width */}

        <div className="flex shrink-0 gap-2 sm:gap-2.5">

          <button
            onClick={onEdit}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-luxe px-3.5 py-2 text-xs font-semibold text-brass transition duration-300 hover:shadow-md sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <Edit3 size={13} />
            Edit
          </button>

          <button
            onClick={onChangePassword}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald/15 bg-white px-3.5 py-2 text-xs font-semibold text-emerald-deep transition duration-300 hover:border-brass sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <Lock size={13} />
            Password
          </button>

        </div>

      </div>

      {/* ========================================= */}
      {/* Inline stat line */}
      {/* ========================================= */}

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl bg-cream px-3.5 py-2.5 sm:mt-5 sm:gap-x-4 sm:px-4 sm:py-3">

        <span className="inline-flex items-baseline gap-1.5">
          <b className="font-display text-sm font-semibold text-emerald-deep sm:text-base">{totalEnquiries}</b>
          <span className="text-[10px] uppercase tracking-[0.08em] text-ink/50 sm:text-xs">Enquiries</span>
        </span>

        <span className="h-3 w-px bg-emerald/15" />

        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brass" />
          <span className="text-[10px] font-medium text-brass sm:text-xs">Active</span>
        </span>

        <span className="h-3 w-px bg-emerald/15" />

        <span className="text-[10px] text-ink/50 sm:text-xs">
          Member since {memberSince}
        </span>

      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-gradient-to-r from-transparent via-emerald/15 to-transparent sm:my-6" />

      {/* ========================================= */}
      {/* Contact information grid */}
      {/* ========================================= */}

      <div>

        <div className="mb-3 flex items-center justify-between sm:mb-4">
          <h2 className="font-display text-base font-semibold text-emerald-deep sm:text-lg">
            Profile Information
          </h2>
          <span className="rounded-full bg-emerald/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-emerald sm:text-[10px]">
            Verified
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

          <Field icon={Mail} label="Email">{user?.email || "Not Available"}</Field>
          <Field icon={Phone} label="Phone">{user?.phone || "Not Added"}</Field>
          <Field icon={MapPin} label="Location">{user?.location || "Not Specified"}</Field>
          <Field icon={CalendarDays} label="Member Since">{memberSince}</Field>

        </div>

      </div>

      {/* Trust note */}

      <p className="mt-5 flex items-start gap-2 rounded-xl bg-cream px-3.5 py-3 text-[11px] leading-5 text-ink/60 sm:mt-6 sm:px-4 sm:text-xs">
        <ShieldCheck size={14} className="mt-0.5 shrink-0 text-emerald/60" />
        Your information stays private — used only for project updates,
        quotations, and design consultations.
      </p>

    </section>
  );
}

function Field({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-emerald/10 bg-white px-3.5 py-3">

      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brass/10 text-brass">
        <Icon size={14} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] uppercase tracking-[0.12em] text-ink/45 sm:text-[10px]">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-emerald-deep">
          {children}
        </p>
      </div>

    </div>
  );
}